import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import SearchBar from "@/components/SearchBar";

export default function Hero() {
    return (
        <section id="home" className="relative pb-16 pt-10 md:pb-28 md:pt-16">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-12 md:px-6">
                {/* Cột chữ (trái) */}
                <div>
                    <h1 className="font-heading text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                        Pure rice from the{" "}
                        <span className="text-primary">paddies</span>, delivered with
                        pride.
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
                        Meet the growers cultivating Vietnam&apos;s finest rice varieties.
                        From fragrant ST25 to hearty brown rice, every grain is harvested
                        with care and delivered straight to your table.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link
                            href="#products"
                            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-sm transition-all hover:scale-105 hover:shadow-md"
                        >
                            Shop the harvest
                        </Link>

                        {/* TODO (Ngày 10): bấm vào sẽ mở Modal Video */}
                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-all hover:scale-105 hover:border-primary hover:text-primary"
                        >
                            <Play className="h-4 w-4" aria-hidden />
                            Watch Video
                        </button>
                    </div>
                </div>

                {/* Cột ảnh (phải) */}
                <div className="relative">
                    <div className="relative aspect-4/3 overflow-hidden rounded-3xl rounded-tl-[5rem] rounded-br-[5rem] shadow-xl md:aspect-4/5">
                        <Image
                            src="/images/hero-farmer.png"
                            alt="A farmer planting rice seedlings in a flooded paddy field"
                            fill
                            priority
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Thẻ nông dân nổi (glassmorphism) - Ngày 8 sẽ thêm animation lơ lửng */}
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-4 py-2 text-sm font-medium text-ink shadow-lg backdrop-blur-md md:-left-6 md:top-8">
                        <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                        Rice Farmer
                    </div>
                </div>
            </div>
            <SearchBar />
        </section>
    );
}