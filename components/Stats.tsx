"use client";

import { ScanLine, Sprout, Truck, Wheat, type LucideIcon } from "lucide-react";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";

const STATS: {
    icon: LucideIcon;
    value: number;
    suffix?: string;
    label: string;
}[] = [
        { icon: Sprout, value: 120, suffix: "+", label: "partnerFarms" },
        { icon: Wheat, value: 110, suffix: " days", label: "growingSeason" },
        { icon: Truck, value: 24, label: "deliveryZones" },
        { icon: ScanLine, value: 100, suffix: "%", label: "traceable" },
    ];

export default function Stats() {
    const { t } = useLanguage();
    return (
        <section className="pt-16 md:pt-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <Reveal className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-0">
                    {STATS.map(({ icon: Icon, value, suffix, label }) => (
                        <div
                            key={label}
                            className="border-ink/10 max-md:rounded-2xl max-md:border max-md:bg-white max-md:p-5 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
                        >
                            <Icon className="h-5 w-5 text-primary" aria-hidden />
                            <p className="mt-3 font-heading text-3xl text-ink md:text-4xl">
                                <CountUp to={value} suffix={suffix} />
                            </p>
                            <p className="mt-1 text-sm text-ink/60">{t(label as "partnerFarms" | "growingSeason" | "deliveryZones" | "traceable")}</p>
                        </div>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}