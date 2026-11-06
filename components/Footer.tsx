import Link from "next/link";
import { Wheat } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const FOOTER_LINKS = [
    {
        title: "Shop",
        links: ["White Rice", "Brown Rice", "Glutinous Rice", "Gift Boxes"],
    },
    {
        title: "Company",
        links: ["Our story", "Rice farmers", "Impact", "Careers"],
    },
    {
        title: "Support",
        links: ["Help center", "Delivery", "Returns", "Contact"],
    },
];

const SOCIALS = [
    { label: "Instagram", icon: FaInstagram },
    { label: "Facebook", icon: FaFacebookF },
    { label: "YouTube", icon: FaYoutube },
    { label: "TikTok", icon: FaTiktok },
];

export default function Footer() {
    return (
        <footer className="border-t border-ink/10">
            <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
                <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
                    {/* Thương hiệu */}
                    <div>
                        <Link href="#home" className="flex items-center gap-2">
                            <Wheat className="h-6 w-6 text-primary" aria-hidden />
                            <span className="font-heading text-2xl text-ink">Hạt Vàng</span>
                        </Link>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
                            Connecting Vietnamese rice farmers with families who value
                            flavour, nutrition, and fairness.
                        </p>
                    </div>

                    {/* Các cột link: mobile 2 cột, từ sm trở lên 3 cột */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        {FOOTER_LINKS.map((group) => (
                            <div key={group.title}>
                                <h3 className="font-heading text-base text-ink">
                                    {group.title}
                                </h3>
                                <ul className="mt-4 space-y-3">
                                    {group.links.map((label) => (
                                        <li key={label}>
                                            <Link
                                                href="#"
                                                className="text-sm text-ink/60 transition-colors hover:text-primary"
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dòng cuối: copyright + mạng xã hội */}
                <div className="mt-12 flex flex-col gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-ink/50">
                        © 2026 Hạt Vàng. All rights reserved.
                    </p>

                    <ul className="flex items-center gap-3">
                        {SOCIALS.map(({ label, icon: Icon }) => (
                            <li key={label}>
                                <a
                                    href="#"
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:border-primary hover:text-primary"
                                >
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