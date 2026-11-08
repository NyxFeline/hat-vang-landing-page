"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

type VideoModalProps = {
    videoId: string;
    title: string;
    onClose: () => void;
};

export default function VideoModal({ videoId, title, onClose }: VideoModalProps) {
    const closeRef = useRef<HTMLButtonElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        closeRef.current?.focus();

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [onClose]);

    return (
        <motion.div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} onClick={onClose}>
            <motion.div role="dialog" aria-modal="true" aria-label={title} className="relative w-full max-w-4xl" initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.3, ease: "easeOut" }} onClick={(e) => e.stopPropagation()}>
                <button ref={closeRef} type="button" onClick={onClose} aria-label={t("closeVideo")} className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white outline-none backdrop-blur-md transition-all hover:scale-110 hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-white">
                    <X className="h-5 w-5" aria-hidden />
                </button>

                <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl">
                    <iframe src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`} title={title} className="h-full w-full" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
                </div>
            </motion.div>
        </motion.div>
    );
}
