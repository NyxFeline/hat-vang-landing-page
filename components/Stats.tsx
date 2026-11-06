import { ScanLine, Sprout, Truck, Wheat, type LucideIcon } from "lucide-react";

// Số liệu mẫu, thay bằng số thật nếu muốn.
// Giữ dạng chuỗi tạm thời; Ngày 9 sẽ tách thành số + hậu tố để làm hiệu ứng đếm.
const STATS: { icon: LucideIcon; value: string; label: string }[] = [
    { icon: Sprout, value: "120+", label: "Partner rice farms" },
    { icon: Wheat, value: "110 days", label: "Avg. growing season" },
    { icon: Truck, value: "24", label: "Weekly delivery zones" },
    { icon: ScanLine, value: "100%", label: "Traceable grain sourcing" },
];

export default function Stats() {
    return (
        // pt-16/20: chừa chỗ cho nửa dưới của Search Bar nổi đè xuống từ Hero
        <section className="pt-16 md:pt-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-0">
                    {STATS.map(({ icon: Icon, value, label }) => (
                        <div
                            key={label}
                            className="border-ink/10 max-md:rounded-2xl max-md:border max-md:bg-white max-md:p-5 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
                        >
                            <Icon className="h-5 w-5 text-primary" aria-hidden />
                            <p className="mt-3 font-heading text-3xl text-ink md:text-4xl">
                                {value}
                            </p>
                            <p className="mt-1 text-sm text-ink/60">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}