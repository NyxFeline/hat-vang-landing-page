"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { MotionConfig, motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";

/**
 * Hiệu ứng "trượt từ dưới lên" dùng chung cho các khối chữ trong Hero.
 * `delay` giúp các khối hiện ra lần lượt (H1 -> mô tả -> nút) thay vì cùng lúc.
 */
const slideUp = (delay = 0) => ({
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
    return (
        // reducedMotion="user": tôn trọng cài đặt "giảm chuyển động" của hệ điều hành
        // (bỏ các animation di chuyển, chỉ giữ fade) - điểm cộng về accessibility.
        <MotionConfig reducedMotion="user">
            <section id="home" className="relative pb-16 pt-10 md:pb-28 md:pt-16">
                <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-12 md:px-6">
                    {/* Cột chữ (trái) */}
                    <div>
                        <motion.h1
                            {...slideUp(0)}
                            className="font-heading text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl"
                        >
                            Pure rice from the{" "}
                            <span className="text-primary">paddies</span>, delivered with
                            pride.
                        </motion.h1>

                        <motion.p
                            {...slideUp(0.15)}
                            className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg"
                        >
                            Meet the growers cultivating Vietnam&apos;s finest rice varieties.
                            From fragrant ST25 to hearty brown rice, every grain is harvested
                            with care and delivered straight to your table.
                        </motion.p>

                        <motion.div
                            {...slideUp(0.3)}
                            className="mt-8 flex flex-wrap items-center gap-3"
                        >
                            {/* CTA: đổi màu vàng -> xanh + phóng to nhẹ khi hover */}
                            <Link
                                href="#products"
                                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:bg-primary hover:text-white hover:shadow-md active:scale-95"
                            >
                                Shop the harvest
                            </Link>

                            {/* TODO (Ngày 10): bấm vào sẽ mở Modal Video */}
                            <button
                                type="button"
                                className="flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 ease-out hover:scale-105 hover:border-primary hover:text-primary active:scale-95"
                            >
                                <Play className="h-4 w-4" aria-hidden />
                                Watch Video
                            </button>
                        </motion.div>
                    </div>

                    {/* Cột ảnh (phải) */}
                    <div className="relative">
                        <div className="relative aspect-4/3 overflow-hidden rounded-3xl rounded-tl-[5rem] rounded-br-[5rem] shadow-xl md:aspect-4/5">
                            <Image
                                src="/images/hero-farmer.png"
                                alt="A farmer planting rice seedlings in a flooded paddy field"
                                fill
                                priority
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>

                        {/* Thẻ nông dân nổi (glassmorphism) - lơ lửng vô hạn */}
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
                            Rice Farmer
                        </motion.div>
                    </div>
                </div>
                <SearchBar />
            </section>
        </MotionConfig>
    );
}