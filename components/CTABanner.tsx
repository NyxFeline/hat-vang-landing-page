"use client";

import { Wheat } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";

export default function CTABanner() {
    const { t } = useLanguage();
    return (
        <section className="pb-20 md:pb-28">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <Reveal className="relative overflow-hidden rounded-3xl bg-lime-200 p-8 md:p-12">
                    <Wheat
                        className="pointer-events-none absolute -bottom-10 -right-6 h-56 w-56 rotate-12 text-primary/10 md:h-72 md:w-72"
                        aria-hidden
                    />

                    <div className="relative grid items-center gap-8 md:grid-cols-2 md:gap-12">
                        <div>
                            <h2 className="font-heading text-3xl leading-tight text-ink md:text-4xl">
                                {t("seasonalUpdates")}
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-ink/70">
                                {t("newsletterDescription")}
                            </p>
                        </div>

                        <NewsletterForm />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}