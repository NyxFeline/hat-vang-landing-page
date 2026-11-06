"use client"

import { Globe, Menu, Wheat, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Our Rice", href: "#products" },
    { label: "Farmers", href: "#farmers" },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/80 backdrop-blur-md">
            {/* Thanh chính: mobile = flex, desktop = grid 3 cột để link nằm chính giữa */}
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:grid md:grid-cols-3 md:px-6">
                {/* Logo (trái) */}
                <Link href="#home" className="flex items-center gap-2">
                    <Wheat className="h-6 w-6 text-primary" aria-hidden />
                    <span className="font-heading text-2xl text-ink">Hạt Vàng</span>
                </Link>

                {/* Links (giữa) - chỉ hiện từ desktop */}
                <nav className="hidden items-center gap-8 justify-self-center md:flex">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="whitespace-nowrap text-sm font-medium text-ink/70 transition-colors hover:text-primary"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Ngôn ngữ + Menu (phải) */}
                <div className="flex items-center gap-4 md:justify-self-end">
                    <button
                        type="button"
                        className="flex items-center gap-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-primary"
                        aria-label="Change language"
                    >
                        <Globe className="h-4 w-4" aria-hidden />
                        EN
                    </button>

                    <button
                        type="button"
                        className="md:hidden"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? "Close menu" : "Open menu"}
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            {open && (
                <nav
                    id="mobile-menu"
                    className="border-t border-ink/10 bg-cream px-4 py-4 md:hidden"
                >
                    <ul className="flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-xl px-3 py-3 text-base font-medium text-ink/80 hover:bg-primary/10 hover:text-primary"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )

}