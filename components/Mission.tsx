"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionBadge from "@/components/SectionBadge";
import MissionCards, { type MissionCardData } from "@/components/MissionCards";
import { useLanguage, type TranslationKey } from "@/components/LanguageProvider";

const MISSION_CARDS: {
    title: TranslationKey;
    description: TranslationKey;
    alt: TranslationKey;
    image: string;
}[] = [
    {
        title: "paddyStewardship",
        description: "paddyStewardshipDesc",
        alt: "paddyAlt",
        image: "/images/mission-paddy.png",
    },
    {
        title: "fairPay",
        description: "fairPayDesc",
        alt: "fairPayAlt",
        image: "/images/mission-fair-pay.png",
    },
    {
        title: "lowWaste",
        description: "lowWasteDesc",
        alt: "lowWasteAlt",
        image: "/images/mission-harvest.png",
    },
];

export default function Mission() {
    const { t } = useLanguage();

    const cards: MissionCardData[] = MISSION_CARDS.map((card) => ({
        title: t(card.title),
        description: t(card.description),
        alt: t(card.alt),
        image: card.image,
    }));

    return (
        <section id="about" className="mt-16 bg-sand py-20 md:mt-20 md:py-28">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:px-6 lg:grid-cols-5 lg:gap-12">
                <Reveal className="lg:col-span-2">
                    <SectionBadge>{t("missionBadge")}</SectionBadge>
                    <h2 className="font-heading text-3xl leading-tight text-ink md:text-4xl lg:text-5xl">{t("missionTitle")}</h2>
                    <p className="mt-5 text-base leading-relaxed text-ink/70 md:text-lg">{t("missionDescription")}</p>
                    <Link href="#farmers" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90">
                        {t("meetFarmers")}
                    </Link>
                </Reveal>

                <Reveal delay={0.15} className="lg:col-span-3">
                    <MissionCards cards={cards} />
                </Reveal>
            </div>
        </section>
    );
}
