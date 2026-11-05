"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <form
            role="search"
            onSubmit={(e) => e.preventDefault()} // TODO: xử lý tìm kiếm thật sau
            className="absolute bottom-0 left-1/2 z-20 flex w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 translate-y-1/2 items-center gap-3 rounded-full border border-white/60 bg-white/70 p-2 pl-5 shadow-xl backdrop-blur-xl"
        >
            <Search className="h-5 w-5 shrink-0 text-ink/50" aria-hidden />

            <label htmlFor="hero-search" className="sr-only">
                Search rice varieties or farmers
            </label>
            <input
                id="hero-search"
                type="search"
                placeholder="Search rice varieties or farmers"
                className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink/50 md:text-base"
            />

            <button
                type="submit"
                className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90"
            >
                Search
            </button>
        </form>
    );
}