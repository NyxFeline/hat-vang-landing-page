import { Wheat } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";

export default function CTABanner() {
    return (
        <section className="pb-20 md:pb-28">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div className="relative overflow-hidden rounded-3xl bg-lime-200 p-8 md:p-12">
                    {/* Họa tiết trang trí mờ */}
                    <Wheat
                        className="pointer-events-none absolute -bottom-10 -right-6 h-56 w-56 rotate-12 text-primary/10 md:h-72 md:w-72"
                        aria-hidden
                    />

                    <div className="relative grid items-center gap-8 md:grid-cols-2 md:gap-12">
                        <div>
                            <h2 className="font-heading text-3xl leading-tight text-ink md:text-4xl">
                                Get seasonal updates and early access.
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-ink/70">
                                Join our newsletter for new rice arrivals, cooking tips, and
                                stories from the paddy fields.
                            </p>
                        </div>

                        <NewsletterForm />
                    </div>
                </div>
            </div>
        </section>
    );
}