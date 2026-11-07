"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import MissionCards, { type MissionCardData } from "@/components/MissionCards";
import { useLanguage } from "@/components/LanguageProvider";

const MISSION_CARDS: MissionCardData[] = [
    {
        title: "paddyStewardship",
        description:
            "Traditional water management and natural inputs that keep paddies fertile season after season.",
        image: "/images/mission-paddy.png",
        alt: "Rice paddies at sunset with an irrigation canal",
    },
    {
        title: "fairPay",
        description:
            "Direct relationships that reward rice growers for quality, effort, and careful cultivation.",
        image: "/images/mission-fair-pay.png",
        alt: "A farmer in a conical hat working in a rice field",
    },
    {
        title: "lowWaste",
        description:
            "Planned harvests and flexible bag sizes that reduce grain surplus and packaging waste.",
        image: "/images/mission-harvest.png",
        alt: "Farmers harvesting golden rice in the field",
    },
];

export default function Mission() {
    const { t } = useLanguage();
    return (
        <section id="about" className="py-20 md:py-28">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:px-6 lg:grid-cols-5 lg:gap-12">
                <Reveal className="lg:col-span-2">
                    <h2 className="font-heading text-3xl leading-tight text-ink md:text-4xl lg:text-5xl">
                        {t("missionTitle")}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-ink/70 md:text-lg">
                        {t("missionDescription")}
                    </p>
                    <Link
                        href="#products"
                        className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90"
                    >
                        {t("meetFarmers")}
                    </Link>
                </Reveal>

                <Reveal delay={0.15} className="lg:col-span-3">
                    <MissionCards
                        cards={MISSION_CARDS.map((card) => ({
                            ...card,
                            title: t(card.title as "paddyStewardship" | "fairPay" | "lowWaste"),
                        }))}
                    />
                </Reveal>
            </div>
        </section>
    );
}