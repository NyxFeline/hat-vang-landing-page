"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion } from "framer-motion";

type RevealProps = {
    children: ReactNode;
    className?: string;
    /** Trễ (giây) để nhiều khối cạnh nhau hiện ra lần lượt */
    delay?: number;
};

/**
 * Bọc một khối bất kỳ: mờ + trượt nhẹ từ dưới lên khi cuộn tới.
 * - once: chỉ chạy 1 lần, cuộn lên xuống không bị lặp lại.
 * - amount: khối phải lọt vào màn hình 20% thì mới bắt đầu chạy.
 * - reducedMotion="user": người dùng bật "giảm chuyển động" chỉ thấy fade, không thấy trượt.
 * Nhận className để thay thế thẳng cho thẻ <div> cũ, không làm vỡ grid/flex.
 */
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