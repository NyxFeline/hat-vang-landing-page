"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent, type PointerEvent } from "react";

const DRAG_THRESHOLD = 6;

export function useDragScroll<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const drag = useRef({
        pressed: false,
        moved: false,
        suppressClick: false,
        pointerId: -1,
        startX: 0,
        startScroll: 0,
    });
    const [isDragging, setIsDragging] = useState(false);
    const [edges, setEdges] = useState({ canPrev: false, canNext: true });

    const updateEdges = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        const canPrev = el.scrollLeft > 4;
        const canNext = el.scrollLeft < max - 4;
        setEdges((prev) => (prev.canPrev === canPrev && prev.canNext === canNext ? prev : { canPrev, canNext }));
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.addEventListener("scroll", updateEdges, { passive: true });
        const observer = new ResizeObserver(updateEdges);
        observer.observe(el);
        return () => {
            el.removeEventListener("scroll", updateEdges);
            observer.disconnect();
        };
    }, [updateEdges]);

    const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scrollByCard = useCallback((direction: 1 | -1) => {
        const el = ref.current;
        if (!el) return;
        const first = el.firstElementChild as HTMLElement | null;
        const gap = parseFloat(getComputedStyle(el).columnGap) || 16;
        const step = (first?.offsetWidth ?? el.clientWidth * 0.8) + gap;
        el.scrollBy({
            left: direction * step,
            behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
    }, []);

    const snapToNearest = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        const padLeft = parseFloat(getComputedStyle(el).paddingLeft) || 0;
        let target = 0;
        let best = Infinity;
        for (const child of Array.from(el.children) as HTMLElement[]) {
            const left = child.offsetLeft - padLeft;
            const distance = Math.abs(left - el.scrollLeft);
            if (distance < best) {
                best = distance;
                target = left;
            }
        }
        el.scrollTo({
            left: target,
            behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
    }, []);

    const onPointerDown = useCallback((e: PointerEvent<T>) => {
        if (e.pointerType !== "mouse" || e.button !== 0) return;
        const el = ref.current;
        if (!el) return;
        const d = drag.current;
        d.pressed = true;
        d.moved = false;
        d.pointerId = e.pointerId;
        d.startX = e.clientX;
        d.startScroll = el.scrollLeft;
    }, []);

    const onPointerMove = useCallback((e: PointerEvent<T>) => {
        const d = drag.current;
        const el = ref.current;
        if (!d.pressed || !el) return;
        const dx = e.clientX - d.startX;
        if (!d.moved) {
            if (Math.abs(dx) < DRAG_THRESHOLD) return;
            d.moved = true;
            el.setPointerCapture(d.pointerId);
            setIsDragging(true);
        }
        el.scrollLeft = d.startScroll - dx;
    }, []);

    const endDrag = useCallback(() => {
        const d = drag.current;
        if (!d.pressed) return;
        d.pressed = false;
        if (!d.moved) return;
        d.moved = false;

        d.suppressClick = true;
        setTimeout(() => {
            d.suppressClick = false;
        }, 0);

        try {
            ref.current?.releasePointerCapture(d.pointerId);
        } catch {
        }
        setIsDragging(false);
        requestAnimationFrame(snapToNearest);
    }, [snapToNearest]);

    const onClickCapture = useCallback((e: MouseEvent<T>) => {
        if (drag.current.suppressClick) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, []);

    return { ref, isDragging, canPrev: edges.canPrev, canNext: edges.canNext, scrollByCard, dragHandlers: { onPointerDown, onPointerMove, onPointerUp: endDrag, onPointerCancel: endDrag, onClickCapture } };
}
