import type { Variants } from "framer-motion";

export const staggerContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};
