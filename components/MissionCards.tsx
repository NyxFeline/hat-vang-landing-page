"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export type MissionCardData = {
    title: string;
    description: string;
    image: string;
    alt: string;
};

const EXPANDED_GROW = 2.5;

export default function MissionCards({ cards }: { cards: MissionCardData[] }) {
    const [active, setActive] = useState<number | null>(null);
    const reduceMotion = useReducedMotion();

    return (
        <div className="flex flex-col gap-4 sm:flex-row">
            {cards.map((card, i) => {
                const isActive = active === i;

                return (
                    <motion.article
                        key={card.title}
                        tabIndex={0}
                        onMouseEnter={() => setActive(i)}
                        onMouseLeave={() => setActive(null)}
                        onFocus={() => setActive(i)}
                        onBlur={() => setActive(null)}
                        initial={false}
                        animate={{ flexGrow: isActive ? EXPANDED_GROW : 1 }}
                        transition={
                            reduceMotion
                                ? { duration: 0 }
                                : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                        }
                        className="relative h-72 overflow-hidden rounded-3xl shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-primary sm:h-104 sm:min-w-0 sm:flex-1"
                    >
                        <Image
                            src={card.image}
                            alt={card.alt}
                            fill
                            sizes="(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                            <h3 className="font-heading text-xl">{card.title}</h3>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${isActive
                                    ? "max-h-40 opacity-100"
                                    : "sm:max-h-0 sm:opacity-0"
                                    }`}
                            >
                                <p className="mt-2 text-sm leading-relaxed text-white/85">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    </motion.article>
                );
            })}
        </div>
    );
}