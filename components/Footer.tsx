"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { useLanguage, type TranslationKey } from "@/components/LanguageProvider";

const FOOTER_LINKS: {
    title: TranslationKey;
    links: { label: TranslationKey; href: string }[];
}[] = [
    {
        title: "shop",
        links: [
            { label: "linkWhiteRice", href: "#products" },
            { label: "linkBrownRice", href: "#products" },
            { label: "linkGlutinousRice", href: "#products" },
            { label: "linkGiftBoxes", href: "#products" },
        ],
    },
    {
        title: "company",
        links: [
            { label: "linkOurStory", href: "#about" },
            { label: "linkRiceFarmers", href: "#farmers" },
            { label: "linkImpact", href: "#about" },
            { label: "linkCareers", href: "#" },
        ],
    },
    {
        title: "support",
        links: [
            { label: "linkHelp", href: "#" },
            { label: "linkDelivery", href: "#" },
            { label: "linkReturns", href: "#" },
            { label: "linkContact", href: "#" },
        ],
    },
];

const SOCIALS = [
    { label: "Instagram", icon: FaInstagram },
    { label: "Facebook", icon: FaFacebookF },
    { label: "YouTube", icon: FaYoutube },
    { label: "TikTok", icon: FaTiktok },
];

export default function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="border-t border-ink/10">
            <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
                <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
                    <div>
                        <Link href="#home" className="flex items-center gap-2">
                            <Image src="/images/logo.png" alt="Hạt Vàng" width={40} height={40} className="h-10 w-10 object-contain" />
                            <span className="font-heading text-2xl text-ink">Hạt Vàng</span>
                        </Link>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">{t("footerDescription")}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        {FOOTER_LINKS.map((group) => (
                            <div key={group.title}>
                                <h3 className="font-heading text-base text-ink">{t(group.title)}</h3>
                                <ul className="mt-4 space-y-3">
                                    {group.links.map(({ label, href }) => (
                                        <li key={label}>
                                            <Link href={href} className="text-sm text-ink/60 transition-colors hover:text-primary">
                                                {t(label)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-ink/50">© 2026 Hạt Vàng. {t("allRightsReserved")}</p>

                    <ul className="flex items-center gap-3">
                        {SOCIALS.map(({ label, icon: Icon }) => (
                            <li key={label}>
                                <a href="#" aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:border-primary hover:text-primary">
                                    <Icon className="h-4 w-4" aria-hidden />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
