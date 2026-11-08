"use client";

import { useState } from "react";
import Image from "next/image";
import { HeartIcon, StarIcon } from "@/components/icons";
import { useLanguage, type TranslationKey } from "@/components/LanguageProvider";

export type Product = {
    nameKey: TranslationKey;
    descKey: TranslationKey;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    tagKey?: TranslationKey;
};

export default function ProductCard({ product }: { product: Product }) {
    const [liked, setLiked] = useState(false);
    const { language, t } = useLanguage();
    const { nameKey, descKey, price, rating, reviews, image, tagKey } = product;

    const name = t(nameKey);
    let locale = "en-US";
    if (language === "vi") locale = "vi-VN";
    const formattedPrice = new Intl.NumberFormat(locale).format(price);

    return (
        <article className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-3 shadow-sm transition-shadow hover:shadow-lg">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                <Image src={image} alt={name} fill draggable={false} sizes="(min-width: 640px) 288px, 78vw" className="object-cover" />

                {tagKey && <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink">{t(tagKey)}</span>}

                <button type="button" onClick={() => setLiked((v) => !v)} aria-pressed={liked} aria-label={t(liked ? "removeFavorite" : "addFavorite", { name })} className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-md transition-transform hover:scale-110">
                    <HeartIcon filled={liked} className={`h-5 w-5 ${liked ? "text-red-500" : "text-ink/70"}`} />
                </button>
            </div>

            <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                <h3 className="font-heading text-lg text-ink">{name}</h3>

                <div className="mt-1 flex items-center gap-1" role="img" aria-label={t("rated", { rating })}>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} filled={i < Math.round(rating)} className={`h-4 w-4 ${i < Math.round(rating) ? "text-accent" : "text-ink/25"}`} />
                    ))}
                    <span className="ml-1 text-xs text-ink/60">
                        {rating.toFixed(1)} ({reviews})
                    </span>
                </div>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60">{t(descKey)}</p>

                <p className="mt-auto pt-4 text-lg font-semibold text-primary">
                    {formattedPrice}
                    <span className="text-sm font-normal text-ink/50">{t("priceUnit")}</span>
                </p>
            </div>
        </article>
    );
}
