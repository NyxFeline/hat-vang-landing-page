import { ScanLine, Sprout, Truck, Wheat, type LucideIcon } from "lucide-react";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

// Số liệu mẫu, thay bằng số thật nếu muốn.
// value (số) + suffix (hậu tố) tách riêng để CountUp đếm được phần số.
const STATS: {
    icon: LucideIcon;
    value: number;
    suffix?: string;
    label: string;
}[] = [
        { icon: Sprout, value: 120, suffix: "+", label: "Partner rice farms" },
        { icon: Wheat, value: 110, suffix: " days", label: "Avg. growing season" },
        { icon: Truck, value: 24, label: "Weekly delivery zones" },
        { icon: ScanLine, value: 100, suffix: "%", label: "Traceable grain sourcing" },
    ];

export default function Stats() {
    return (
        // pt-16/20: chừa chỗ cho nửa dưới của Search Bar nổi đè xuống từ Hero
        <section className="pt-16 md:pt-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <Reveal className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-0">
                    {STATS.map(({ icon: Icon, value, suffix, label }) => (
                        <div
                            key={label}
                            className="border-ink/10 max-md:rounded-2xl max-md:border max-md:bg-white max-md:p-5 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
                        >
                            <Icon className="h-5 w-5 text-primary" aria-hidden />
                            <p className="mt-3 font-heading text-3xl text-ink md:text-4xl">
                                <CountUp to={value} suffix={suffix} />
                            </p>
                            <p className="mt-1 text-sm text-ink/60">{label}</p>
                        </div>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}