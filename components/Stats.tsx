"use client";

import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import { FieldIcon, GrainIcon, PinGrainIcon, ScanGrainIcon, type IconComponent } from "@/components/icons";
import { useLanguage, type TranslationKey } from "@/components/LanguageProvider";

const STATS: {
    icon: IconComponent;
    value: number;
    suffix?: "plus" | "days" | "percent";
    label: TranslationKey;
}[] = [
    { icon: GrainIcon, value: 120, suffix: "plus", label: "partnerFarms" },
    { icon: FieldIcon, value: 110, suffix: "days", label: "growingSeason" },
    { icon: PinGrainIcon, value: 24, label: "deliveryZones" },
    { icon: ScanGrainIcon, value: 100, suffix: "percent", label: "traceable" },
];

export default function Stats() {
    const { t } = useLanguage();

    const suffixOf = (suffix?: "plus" | "days" | "percent") => {
        if (suffix === "plus") return "+";
        if (suffix === "percent") return "%";
        if (suffix === "days") return t("daysSuffix");
        return "";
    };

    return (
        <section className="pt-16 md:pt-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <Reveal className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-0">
                    {STATS.map(({ icon: Icon, value, suffix, label }) => (
                        <div key={label} className="border-ink/10 max-md:rounded-2xl max-md:border max-md:bg-white max-md:p-5 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0">
                            <Icon className="h-7 w-7 text-primary" />
                            <p className="mt-3 font-heading text-3xl text-ink md:text-4xl">
                                <CountUp to={value} suffix={suffixOf(suffix)} />
                            </p>
                            <p className="mt-1 text-sm text-ink/60">{t(label)}</p>
                        </div>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
