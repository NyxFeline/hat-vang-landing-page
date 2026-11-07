"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
    to: number;
    suffix?: string;
    duration?: number;
};

/**
 * Đếm từ 0 lên `to` khi phần tử cuộn vào màn hình (chỉ chạy 1 lần).
 * Ghi thẳng vào textContent thay vì setState để không re-render React 60 lần/giây.
 */
export default function CountUp({ to, suffix = "", duration = 2 }: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const node = ref.current;
        if (!node || !inView) return;

        // Người dùng bật "giảm chuyển động": hiện số thật luôn, không đếm.
        if (reduceMotion) {
            node.textContent = String(to);
            return;
        }

        const controls = animate(0, to, {
            duration,
            ease: "easeOut",
            onUpdate: (value) => {
                node.textContent = String(Math.round(value));
            },
        });
        return () => controls.stop();
    }, [inView, reduceMotion, to, duration]);

    return (
        <>
            {/* Screen reader đọc luôn số cuối, không đọc các số trung gian */}
            <span className="sr-only">
                {to}
                {suffix}
            </span>
            {/* tabular-nums: mọi chữ số cùng bề rộng nên số không bị "nhảy" khi đếm */}
            <span aria-hidden="true" className="tabular-nums">
                <span ref={ref}>0</span>
                {suffix}
            </span>
        </>
    );
}