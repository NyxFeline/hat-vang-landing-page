"use client";

import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import ProductCard, { type Product } from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";
import { useLanguage } from "@/components/LanguageProvider";
import { useDragScroll } from "@/hooks/useDragScroll";
import { staggerContainer, staggerItem } from "@/lib/motion";

const PRODUCTS: Product[] = [
    {
        nameKey: "st25Name",
        descKey: "st25Desc",
        price: 85000,
        rating: 4.9,
        reviews: 128,
        image: "/images/product-st25.png",
        tagKey: "tagHot",
    },
    {
        nameKey: "brownName",
        descKey: "brownDesc",
        price: 120000,
        rating: 4.7,
        reviews: 86,
        image: "/images/product-brown-rice.png",
        tagKey: "tagSale10",
    },
    {
        nameKey: "glutinousName",
        descKey: "glutinousDesc",
        price: 97500,
        rating: 4.8,
        reviews: 64,
        image: "/images/product-glutinous-rice.png",
        tagKey: "tagHot",
    },
    {
        nameKey: "jasmineName",
        descKey: "jasmineDesc",
        price: 62500,
        rating: 4.6,
        reviews: 92,
        image: "/images/product-jasmine.png",
        tagKey: "tagSale5",
    },
    {
        nameKey: "whiteName",
        descKey: "whiteDesc",
        price: 70000,
        rating: 4.5,
        reviews: 78,
        image: "/images/product-white-rice.png",
        tagKey: "tagPopular",
    },
];

const arrowButton = "flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition-all hover:border-primary hover:text-primary active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-ink/15 disabled:hover:text-ink";

export default function Products() {
    const { t } = useLanguage();
    const { ref, isDragging, canPrev, canNext, scrollByCard, dragHandlers } = useDragScroll<HTMLDivElement>();

    return (
        <MotionConfig reducedMotion="user">
            <section id="products" className="py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <Reveal className="flex flex-wrap items-end justify-between gap-4">
                        <h2 className="font-heading text-3xl text-ink md:text-4xl lg:text-5xl">{t("productsTitle")}</h2>

                        <div className="flex items-center gap-2">
                            <button type="button" onClick={() => scrollByCard(-1)} disabled={!canPrev} aria-label={t("prevProducts")} className={arrowButton}>
                                <ArrowIcon className="h-5 w-5 rotate-180" />
                            </button>
                            <button type="button" onClick={() => scrollByCard(1)} disabled={!canNext} aria-label={t("nextProducts")} className={arrowButton}>
                                <ArrowIcon className="h-5 w-5" />
                            </button>
                            <Link href="#products" className="ml-1 rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:border-primary hover:text-primary">
                                {t("viewAllVarieties")}
                            </Link>
                        </div>
                    </Reveal>

                    <motion.div ref={ref} role="group" aria-label={t("productsCarousel")} variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} {...dragHandlers} className={`relative -mx-4 mt-10 flex gap-4 overflow-x-auto px-4 pb-6 scrollbar-hide scroll-px-4 md:mx-0 md:px-0 md:scroll-px-0 ${isDragging ? "cursor-grabbing select-none" : "cursor-grab snap-x snap-mandatory"}`}>
                        {PRODUCTS.map((product) => (
                            <motion.div key={product.nameKey} variants={staggerItem} className="w-[78%] shrink-0 snap-start sm:w-72">
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </MotionConfig>
    );
}
