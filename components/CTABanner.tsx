"use client";

import NewsletterForm from "@/components/NewsletterForm";
import Reveal from "@/components/Reveal";
import { RicePattern } from "@/components/icons";
import { useLanguage } from "@/components/LanguageProvider";

export default function CTABanner() {
    const { t } = useLanguage();
    return (
        <section className="py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <Reveal className="relative overflow-hidden rounded-3xl bg-forest p-8 md:p-12">
                    <RicePattern className="pointer-events-none absolute -bottom-6 -right-4 h-56 w-80 text-cream/10 md:h-72 md:w-md" />

                    <div className="relative grid items-center gap-8 md:grid-cols-2 md:gap-12">
                        <div>
                            <h2 className="font-heading text-3xl leading-tight text-cream md:text-4xl">{t("seasonalUpdates")}</h2>
                            <p className="mt-4 text-base leading-relaxed text-cream/70">{t("newsletterDescription")}</p>
                        </div>

                        <NewsletterForm />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
