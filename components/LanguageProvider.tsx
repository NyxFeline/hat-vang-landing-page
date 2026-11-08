"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { translations, type Language, type TranslationKey } from "@/lib/translations";

export type { Language, TranslationKey };

type TranslateVars = Record<string, string | number>;

type LanguageContextValue = {
    language: Language;
    toggleLanguage: () => void;
    t: (key: TranslationKey, vars?: TranslateVars) => string;
};

const STORAGE_KEY = "hat-vang-language";
const DEFAULT_LANGUAGE: Language = "en";

let memoryLanguage: Language | null = null;
const listeners = new Set<() => void>();

function readLanguage(): Language {
    try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved === "vi" || saved === "en") return saved;
    } catch {
    }
    if (memoryLanguage) return memoryLanguage;
    return DEFAULT_LANGUAGE;
}

function writeLanguage(next: Language) {
    memoryLanguage = next;
    try {
        window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
    }
    listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
    listeners.add(callback);
    window.addEventListener("storage", callback);
    return () => {
        listeners.delete(callback);
        window.removeEventListener("storage", callback);
    };
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const language = useSyncExternalStore(subscribe, readLanguage, () => DEFAULT_LANGUAGE);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = useCallback(() => {
        let nextLanguage: Language = "vi";
        if (language === "vi") nextLanguage = "en";
        writeLanguage(nextLanguage);
    }, [language]);

    const t = useCallback(
        (key: TranslationKey, vars?: TranslateVars) => {
            let text = translations[language][key];
            if (vars) {
                for (const [name, value] of Object.entries(vars)) {
                    text = text.replaceAll(`{${name}}`, String(value));
                }
            }
            return text;
        },
        [language],
    );

    const value = useMemo(() => ({ language, toggleLanguage, t }), [language, toggleLanguage, t]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
    return context;
}
