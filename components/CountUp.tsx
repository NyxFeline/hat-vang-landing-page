"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
    to: number;
    suffix?: string;
    duration?: number;
};

export default function CountUp({ to, suffix = "", duration = 2 }: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const node = ref.current;
        if (!node || !inView) return;

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
            <span className="sr-only">
                {to}
                {suffix}
            </span>
            <span aria-hidden="true" className="tabular-nums">
                <span ref={ref}>0</span>
                {suffix}
            </span>
        </>
    );
}
