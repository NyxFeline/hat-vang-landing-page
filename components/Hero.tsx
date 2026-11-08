"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";
import VideoModal from "@/components/VideoModal";
import SectionBadge from "@/components/SectionBadge";
import { FieldIcon, GrainIcon, PinGrainIcon, PlayIcon } from "@/components/icons";
import { useLanguage } from "@/components/LanguageProvider";

const HERO_VIDEO_ID = "PXxDB-gYhWY";

const slideUp = (delay = 0) => ({
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const TRUST_AVATARS = [
    { Icon: GrainIcon, className: "bg-primary/15 text-primary" },
    { Icon: FieldIcon, className: "bg-accent/30 text-amber-700" },
    { Icon: PinGrainIcon, className: "bg-lime-200 text-primary" },
];

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
                        <motion.div {...slideUp(0)}>
                            <SectionBadge>{t("heroBadge")}</SectionBadge>
                        </motion.div>

                        <motion.h1 {...slideUp(0.1)} className="font-heading text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                            {t("heroTitle")}
                        </motion.h1>

                        <motion.p {...slideUp(0.2)} className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
                            {t("heroDescription")}
                        </motion.p>

                        <motion.div {...slideUp(0.3)} className="mt-8 flex flex-wrap items-center gap-3">
                            <Link href="#products" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:bg-primary hover:text-white hover:shadow-md active:scale-95">
                                {t("shopHarvest")}
                            </Link>

                            <button ref={triggerRef} type="button" onClick={() => setVideoOpen(true)} aria-haspopup="dialog" className="flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 ease-out hover:scale-105 hover:border-primary hover:text-primary active:scale-95">
                                <PlayIcon className="h-4 w-4" />
                                {t("watchVideo")}
                            </button>
                        </motion.div>

                        <motion.div {...slideUp(0.4)} className="mt-8 flex items-center gap-3">
                            <div className="flex -space-x-2" aria-hidden="true">
                                {TRUST_AVATARS.map(({ Icon, className }, i) => (
                                    <span key={i} className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream ${className}`}>
                                        <Icon className="h-4.5 w-4.5" />
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-ink/60">{t("heroTrust")}</p>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <div className="relative aspect-4/3 overflow-hidden rounded-3xl rounded-tl-[5rem] rounded-br-[5rem] shadow-xl md:aspect-4/5">
                            <Image src="/images/hero-farmer.png" alt={t("heroImageAlt")} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                        </div>

                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-4 py-2 text-sm font-medium text-ink shadow-lg backdrop-blur-md md:-left-6 md:top-8">
                            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                            {t("farmer")}
                        </motion.div>

                        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.6, delay: 0.8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-4 right-4 max-w-[70%] rounded-2xl border border-white/40 bg-white/65 px-4 py-3 shadow-lg backdrop-blur-md md:-right-4 md:bottom-12">
                            <p className="text-xs text-ink/60">{t("latestHarvest")}</p>
                            <p className="mt-0.5 text-sm font-semibold text-ink">{t("latestHarvestName")}</p>
                            <p className="mt-1 flex items-center gap-1.5 text-xs text-ink/60">
                                <span className="relative flex h-2 w-2" aria-hidden="true">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary/60 motion-safe:animate-ping" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                                </span>
                                {t("availableThisWeek")}
                            </p>
                        </motion.div>
                    </div>
                </div>
                <SearchBar />

                <AnimatePresence>{videoOpen && <VideoModal videoId={HERO_VIDEO_ID} title={`${t("watchVideo")} - Hạt Vàng`} onClose={closeVideo} />}</AnimatePresence>
            </section>
        </MotionConfig>
    );
}
