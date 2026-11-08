import type { ReactNode } from "react";

export default function SectionBadge({ children }: { children: ReactNode }) {
    return <span className="mb-4 inline-block rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium text-ink/70">{children}</span>;
}
