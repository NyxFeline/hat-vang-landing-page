"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";
import VideoModal from "@/components/VideoModal";
import { useLanguage } from "@/components/LanguageProvider";

const HERO_VIDEO_ID = "PXxDB-gYhWY";

const slideUp = (delay = 0) => ({
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
    const [videoOpen, setVideoOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const { t } = useLanguage();

    const closeVideo = useCallback(() => {
        setVideoOpen(false);
        triggerRef.current?.focus();
    }, []);

    return (
        <MotionConfig reducedMotion="user">
            <section id="home" className="relative pb-16 pt-10 md:pb-28 md:pt-16">
                <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-12 md:px-6">
                    <div>
                        <motion.h1
                            {...slideUp(0)}
                            className="font-heading text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl"
                        >
                            {t("heroTitle")}
                        </motion.h1>

                        <motion.p
                            {...slideUp(0.15)}
                            className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg"
                        >
                            {t("heroDescription")}
                        </motion.p>

                        <motion.div
                            {...slideUp(0.3)}
                            className="mt-8 flex flex-wrap items-center gap-3"
                        >
                            <Link
                                href="#products"
                                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:bg-primary hover:text-white hover:shadow-md active:scale-95"
                            >
                                {t("shopHarvest")}
                            </Link>

                            <button
                                ref={triggerRef}
                                type="button"
                                onClick={() => setVideoOpen(true)}
                                aria-haspopup="dialog"
                                className="flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 ease-out hover:scale-105 hover:border-primary hover:text-primary active:scale-95"
                            >
                                <Play className="h-4 w-4" aria-hidden />
                                {t("watchVideo")}
                            </button>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <div className="relative aspect-4/3 overflow-hidden rounded-3xl rounded-tl-[5rem] rounded-br-[5rem] shadow-xl md:aspect-4/5">
                            <Image
                                src="/images/hero-farmer.png"
                                alt={t("farmer")}
                                fill
                                priority
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-4 py-2 text-sm font-medium text-ink shadow-lg backdrop-blur-md md:-left-6 md:top-8"
                        >
                            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                            {t("farmer")}
                        </motion.div>
                    </div>
                </div>
                <SearchBar />

                <AnimatePresence>
                    {videoOpen && (
                        <VideoModal
                            videoId={HERO_VIDEO_ID}
                            title={`${t("watchVideo")} - Hạt Vàng`}
                            onClose={closeVideo}
                        />
                    )}
                </AnimatePresence>
            </section>
        </MotionConfig>
    );
}