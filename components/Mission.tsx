import Link from "next/link";
import Reveal from "@/components/Reveal";
import MissionCards, { type MissionCardData } from "@/components/MissionCards";

const MISSION_CARDS: MissionCardData[] = [
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
                <Reveal className="lg:col-span-2">
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
                </Reveal>

                {/* 3 thẻ mở rộng (phải) */}
                <Reveal delay={0.15} className="lg:col-span-3">
                    <MissionCards cards={MISSION_CARDS} />
                </Reveal>
            </div>
        </section>
    );
}