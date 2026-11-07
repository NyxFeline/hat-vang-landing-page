"use client";

import { MotionConfig, motion, type Variants } from "framer-motion";
import ProductCard, { type Product } from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";

const PRODUCTS: Product[] = [
    {
        name: "ST25 Rice",
        description:
            "Fragrant long-grain variety, soft and slightly sweet, ideal for everyday cooking.",
        price: 38000,
        rating: 4.9,
        reviews: 128,
        image: "/images/product-st25.png",
        tag: "Hot",
    },
    {
        name: "Brown Rice",
        description:
            "Whole-grain rice with the bran layer intact, nutty flavour and higher fibre content.",
        price: 32000,
        rating: 4.7,
        reviews: 86,
        image: "/images/product-brown-rice.png",
        tag: "-10%",
    },
    {
        name: "Glutinous Rice",
        description:
            "Sticky and tender when cooked, beloved for traditional cakes and sweet rice dishes.",
        price: 35000,
        rating: 4.8,
        reviews: 64,
        image: "/images/product-glutinous-rice.png",
        tag: "Hot",
    },
    {
        name: "Jasmine Rice",
        description:
            "Delicately floral aroma with a slightly sticky texture once cooked.",
        price: 30000,
        rating: 4.6,
        reviews: 92,
        image: "/images/product-jasmine.png",
        tag: "-5%",
    },
    {
        name: "White Rice",
        description:
            "Clean, mild flavor with a soft and fluffy texture, making it perfect for everyday meals.",
        price: 25000,
        rating: 4.5,
        reviews: 78,
        image: "/images/product-white-rice.png",
        tag: "Popular",
    },
];

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Products() {
    const { t } = useLanguage();
    return (
        <MotionConfig reducedMotion="user">
            <section id="products" className="py-20 md:py-28">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <Reveal>
                        <h2 className="font-heading text-3xl text-ink md:text-4xl lg:text-5xl">
                            {t("productsTitle")}
                        </h2>
                    </Reveal>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 scrollbar-hide md:mx-0 md:px-0"
                    >
                        {PRODUCTS.map((product) => (
                            <motion.div
                                key={product.name}
                                variants={item}
                                className="w-[78%] shrink-0 snap-start sm:w-72"
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </MotionConfig>
    );
}