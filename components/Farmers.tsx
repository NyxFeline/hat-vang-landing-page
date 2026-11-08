"use client";

import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import FieldScene, { type FieldTone } from "@/components/art/FieldScene";
import Reveal from "@/components/Reveal";
import SectionBadge from "@/components/SectionBadge";
import { PinGrainIcon } from "@/components/icons";
import { useLanguage, type TranslationKey } from "@/components/LanguageProvider";
import { staggerContainer, staggerItem } from "@/lib/motion";

const FARMERS: {
    name: string;
    since: number;
    location: string;
    region: TranslationKey;
    rice: TranslationKey;
    story: TranslationKey;
    tone: FieldTone;
    sunX: number;
}[] = [
    {
        name: "Nguyễn Văn Hiền",
        since: 2009,
        location: "Sóc Trăng",
        region: "regionMekong",
        rice: "st25Name",
        story: "farmer1Story",
        tone: "dawn",
        sunX: 310,
    },
    {
        name: "Trần Thị Mai",
        since: 2013,
        location: "Đồng Tháp",
        region: "regionMekong",
        rice: "brownName",
        story: "farmer2Story",
        tone: "mist",
        sunX: 90,
    },
    {
        name: "Hoàng Văn Sơn",
        since: 2006,
        location: "Yên Bái",
        region: "regionNorthwest",
        rice: "glutinousName",
        story: "farmer3Story",
        tone: "terrace",
        sunX: 200,
    },
    {
        name: "Lê Thị Thu",
        since: 2016,
        location: "An Giang",
        region: "regionMekong",
        rice: "jasmineName",
        story: "farmer4Story",
        tone: "gold",
        sunX: 330,
    },
];

const STEPS: { title: TranslationKey; desc: TranslationKey }[] = [
    { title: "step1Title", desc: "step1Desc" },
    { title: "step2Title", desc: "step2Desc" },
    { title: "step3Title", desc: "step3Desc" },
    { title: "step4Title", desc: "step4Desc" },
];

export default function Farmers() {
    const { t } = useLanguage();

    return (
        <MotionConfig reducedMotion="user">
            <section id="farmers" className="bg-sand py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <Reveal className="flex flex-wrap items-end justify-between gap-6">
                        <div className="max-w-2xl">
                            <SectionBadge>{t("farmersBadge")}</SectionBadge>
                            <h2 className="font-heading text-3xl leading-tight text-ink md:text-4xl lg:text-5xl">{t("farmersTitle")}</h2>
                            <p className="mt-5 text-base leading-relaxed text-ink/70 md:text-lg">{t("farmersDescription")}</p>
                        </div>
                        <Link href="#farmers" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90">
                            {t("seeAllFarms")}
                        </Link>
                    </Reveal>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {FARMERS.map((farmer) => (
                            <motion.article key={farmer.name} variants={staggerItem} className="flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition-shadow hover:shadow-lg">
                                <div className="relative aspect-4/3 overflow-hidden">
                                    <FieldScene tone={farmer.tone} sunX={farmer.sunX} className="absolute inset-0 h-full w-full" />
                                    <span className="absolute left-3 top-3 max-w-[85%] rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium leading-tight text-ink/80 backdrop-blur-md">{t(farmer.region)}</span>
                                </div>

                                <div className="flex flex-1 flex-col p-5">
                                    <div className="flex items-start justify-between gap-3">
                                        <h3 className="font-heading text-lg text-ink">{farmer.name}</h3>
                                        <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">{t("sinceYear", { year: farmer.since })}</span>
                                    </div>

                                    <p className="mt-2 flex items-center gap-2 text-sm font-medium text-ink/80">
                                        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                                        {t("specialityLabel", { rice: t(farmer.rice) })}
                                    </p>

                                    <p className="mt-3 text-sm leading-relaxed text-ink/60">{t(farmer.story)}</p>

                                    <div className="mt-auto flex items-center justify-between gap-2 border-t border-ink/10 pt-4 text-xs text-ink/60">
                                        <span className="flex items-center gap-1.5">
                                            <PinGrainIcon className="h-4 w-4 text-primary" />
                                            {farmer.location}
                                        </span>
                                        <Link href="#farmers" className="font-medium text-primary transition-colors hover:text-primary/70">
                                            {t("readStory")}
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    <Reveal className="mt-20">
                        <h3 className="font-heading text-2xl text-ink md:text-3xl">{t("howWeWork")}</h3>

                        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {STEPS.map((step, i) => (
                                <li key={step.title} className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-heading text-base text-white">{i + 1}</span>
                                    <h4 className="mt-4 font-heading text-lg text-ink">{t(step.title)}</h4>
                                    <p className="mt-2 text-sm leading-relaxed text-ink/60">{t(step.desc)}</p>
                                </li>
                            ))}
                        </ol>
                    </Reveal>
                </div>
            </section>
        </MotionConfig>
    );
}
