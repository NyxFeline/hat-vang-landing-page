"use client";

import { Mail } from "lucide-react";

export default function NewsletterForm() {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 sm:flex-row"
        >
            <div className="relative flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                </label>
                <Mail
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40"
                    aria-hidden
                />
                <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full rounded-full border border-ink/10 bg-white py-3.5 pl-12 pr-4 text-sm text-ink outline-none transition-shadow placeholder:text-ink/40 focus:ring-2 focus:ring-primary"
                />
            </div>

            <button
                type="submit"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90"
            >
                Subscribe
            </button>
        </form>
    );
}