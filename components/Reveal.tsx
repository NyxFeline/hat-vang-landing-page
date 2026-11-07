"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion } from "framer-motion";

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
    return (
        <MotionConfig reducedMotion="user">
            <motion.div
                className={className}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </MotionConfig>
    );
}