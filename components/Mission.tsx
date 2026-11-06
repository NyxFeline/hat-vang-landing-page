import Image from "next/image";
import Link from "next/link";

const MISSION_CARDS = [
    {
        title: "Paddy stewardship",
        description:
            "Traditional water management and natural inputs that keep paddies fertile season after season.",
        image: "/images/mission-paddy.png",
        alt: "Rice paddies at sunset with an irrigation canal",
    },
    {
        title: "Fair pay",
        description:
            "Direct relationships that reward rice growers for quality, effort, and careful cultivation.",
        image: "/images/mission-fair-pay.png",
        alt: "A farmer in a conical hat working in a rice field",
    },
    {
        title: "Low waste",
        description:
            "Planned harvests and flexible bag sizes that reduce grain surplus and packaging waste.",
        image: "/images/mission-harvest.png",
        alt: "Farmers harvesting golden rice in the field",
    },
];

export default function Mission() {
    return (
        <section id="about" className="py-20 md:py-28">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:px-6 lg:grid-cols-5 lg:gap-12">
                {/* Cột chữ (trái) */}
                <div className="lg:col-span-2">
                    <h2 className="font-heading text-3xl leading-tight text-ink md:text-4xl lg:text-5xl">
                        Great rice starts with great growers.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-ink/70 md:text-lg">
                        We connect Vietnamese rice farmers with families who value flavor,
                        nutrition, and fairness. Every bag supports a regional paddy farm
                        and helps build a more sustainable grain supply.
                    </p>
                    <Link
                        href="#products"
                        className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90"
                    >
                        Meet the farmers
                    </Link>
                </div>

                {/* 3 thẻ (phải): mobile xếp dọc, từ sm trở lên xếp ngang */}
                <div className="flex flex-col gap-4 sm:flex-row lg:col-span-3">
                    {MISSION_CARDS.map((card) => (
                        <article
                            key={card.title}
                            className="relative h-72 overflow-hidden rounded-3xl shadow-lg sm:h-104 sm:flex-1"
                        >
                            <Image
                                src={card.image}
                                alt={card.alt}
                                fill
                                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 100vw"
                                className="object-cover"
                            />

                            {/* Lớp gradient đen ở đáy để chữ trắng nổi lên */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

                            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                                <h3 className="font-heading text-xl">{card.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/85">
                                    {card.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}