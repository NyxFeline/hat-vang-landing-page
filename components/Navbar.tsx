"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();
    const navLinks = [
        { label: t("home"), href: "#home" },
        { label: t("about"), href: "#about" },
        { label: t("rice"), href: "#products" },
        { label: t("farmers"), href: "#farmers" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:grid md:grid-cols-3 md:px-6">
                <Link href="#home" className="flex items-center gap-2">
                    <Image src="/images/logo.png" alt="Hạt Vàng" width={40} height={40} priority className="h-10 w-10 object-contain" />
                    <span className="font-heading text-2xl text-ink">Hạt Vàng</span>
                </Link>

                <nav className="hidden items-center gap-8 justify-self-center md:flex">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="whitespace-nowrap text-sm font-medium text-ink/70 transition-colors hover:text-primary">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3 md:justify-self-end">
                    <button type="button" onClick={toggleLanguage} className="rounded-full border border-ink/15 px-3 py-1 text-sm font-semibold tracking-wide text-ink/80 transition-colors hover:border-primary hover:text-primary" aria-label={t("changeLanguage")} title={t("changeLanguage")}>
                        {language.toUpperCase()}
                    </button>

                    <button type="button" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? t("closeMenu") : t("openMenu")}>
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {open && (
                <nav id="mobile-menu" className="border-t border-ink/10 bg-cream px-4 py-4 md:hidden">
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base font-medium text-ink/80 hover:bg-primary/10 hover:text-primary">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
