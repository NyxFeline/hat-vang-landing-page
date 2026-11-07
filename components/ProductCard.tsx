"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export type Product = {
    name: string;
    description: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    tag?: string;
};

const priceFormatter = new Intl.NumberFormat("vi-VN");

export default function ProductCard({ product }: { product: Product }) {
    const [liked, setLiked] = useState(false);
    const { language } = useLanguage();
    const { name, description, price, rating, reviews, image, tag } = product;
    const localized = language === "vi"
        ? {
            "ST25 Rice": ["Gạo ST25", "Giống gạo hạt dài thơm dẻo, hơi ngọt, phù hợp cho bữa cơm hằng ngày."],
            "Brown Rice": ["Gạo lứt", "Gạo nguyên cám giàu chất xơ, vị bùi và nhiều dinh dưỡng."],
            "Glutinous Rice": ["Gạo nếp", "Dẻo thơm khi nấu, thích hợp cho bánh truyền thống và các món xôi."],
            "Jasmine Rice": ["Gạo Jasmine", "Hương thơm dịu nhẹ và độ dẻo vừa phải sau khi nấu."],
            "White Rice": ["Gạo trắng", "Vị thanh nhẹ, mềm xốp, phù hợp cho mọi bữa ăn hằng ngày."],
        }[name as "ST25 Rice" | "Brown Rice" | "Glutinous Rice" | "Jasmine Rice" | "White Rice"]
        : [name, description];
    const displayName = localized?.[0] ?? name;
    const displayDescription = localized?.[1] ?? description;

    return (
        <article className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-3 shadow-sm transition-shadow hover:shadow-lg">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                    src={image}
                    alt={displayName}
                    fill
                    sizes="(min-width: 640px) 288px, 78vw"
                    className="object-cover"
                />

                {tag && (
                    <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink">
                        {tag}
                    </span>
                )}

                <button
                    type="button"
                    onClick={() => setLiked((v) => !v)}
                    aria-pressed={liked}
                    aria-label={liked ? `Remove ${displayName} from favorites` : `Add ${displayName} to favorites`}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-md transition-transform hover:scale-110"
                >
                    <Heart
                        className={`h-5 w-5 ${liked ? "fill-red-500 text-red-500" : "text-ink/70"}`}
                        aria-hidden
                    />
                </button>
            </div>

            <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                <h3 className="font-heading text-lg text-ink">{displayName}</h3>

                <div className="mt-1 flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.round(rating) ? "fill-accent text-accent" : "text-ink/20"
                                }`}
                            aria-hidden
                        />
                    ))}
                    <span className="ml-1 text-xs text-ink/60">
                        {rating.toFixed(1)} ({reviews})
                    </span>
                </div>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60">
                    {displayDescription}
                </p>

                <p className="mt-auto pt-4 text-lg font-semibold text-primary">
                    {priceFormatter.format(price)}đ
                    <span className="text-sm font-normal text-ink/50"> /kg</span>
                </p>
            </div>
        </article>
    );
}