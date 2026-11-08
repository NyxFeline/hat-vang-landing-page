import type { ReactElement } from "react";

export type IconProps = { className?: string };
export type IconComponent = (props: IconProps) => ReactElement;

const base = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
};

export const GrainIcon: IconComponent = ({ className }) => (
    <svg {...base} className={className}>
        <path d="M6 21Q8 9 18 4" />
        <ellipse cx="6.9" cy="11.2" rx="1.15" ry="2.3" transform="rotate(-35 6.9 11.2)" />
        <ellipse cx="11" cy="13.3" rx="1.15" ry="2.3" transform="rotate(50 11 13.3)" />
        <ellipse cx="9.2" cy="7.6" rx="1.15" ry="2.3" transform="rotate(-35 9.2 7.6)" />
        <ellipse cx="13.4" cy="10" rx="1.15" ry="2.3" transform="rotate(50 13.4 10)" />
        <ellipse cx="12.4" cy="4.6" rx="1.15" ry="2.3" transform="rotate(-35 12.4 4.6)" />
        <ellipse cx="16.4" cy="7.1" rx="1.15" ry="2.3" transform="rotate(50 16.4 7.1)" />
    </svg>
);

export const FieldIcon: IconComponent = ({ className }) => (
    <svg {...base} className={className}>
        <circle cx="12" cy="9" r="3" />
        <path d="M12 3v1M5.6 5.6l.8.8M18.4 5.6l-.8.8M3 10h1M20 10h1" />
        <path d="M2.5 15Q12 11.5 21.5 15" />
        <path d="M2.5 19Q12 15.5 21.5 19" />
        <path d="M6 22.5Q12 20 18 22.5" />
    </svg>
);

export const PinGrainIcon: IconComponent = ({ className }) => (
    <svg {...base} className={className}>
        <path d="M12 21.5C7.5 16.6 5.5 13.3 5.5 10a6.5 6.5 0 0 1 13 0c0 3.3-2 6.6-6.5 11.5Z" />
        <ellipse cx="12" cy="9.8" rx="1.7" ry="3.1" transform="rotate(35 12 9.8)" />
    </svg>
);

export const ScanGrainIcon: IconComponent = ({ className }) => (
    <svg {...base} className={className}>
        <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
        <ellipse cx="12" cy="12" rx="2.2" ry="4.2" transform="rotate(40 12 12)" />
        <path d="M10.4 13.6 13.6 10.4" />
    </svg>
);

export const PlayIcon: IconComponent = ({ className }) => (
    <svg {...base} className={className}>
        <path d="M8 5.5v13l11-6.5Z" />
    </svg>
);

export const HeartIcon = ({ className, filled = false }: IconProps & { filled?: boolean }) => (
    <svg {...base} fill={filled ? "currentColor" : "none"} className={className}>
        <path d="M12 20.5s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.7a4.3 4.3 0 0 1 7.5 2.8c0 5.4-7.5 10-7.5 10Z" />
    </svg>
);

export const StarIcon = ({ className, filled = false }: IconProps & { filled?: boolean }) => (
    <svg {...base} fill={filled ? "currentColor" : "none"} className={className}>
        <path d="m12 3.8 2.4 5 5.4.7-4 3.8 1 5.4L12 16l-4.8 2.7 1-5.4-4-3.8 5.4-.7Z" />
    </svg>
);

export const ArrowIcon: IconComponent = ({ className }) => (
    <svg {...base} className={className}>
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

const STEMS = [
    { x: 30, height: 120, lean: 22 },
    { x: 80, height: 150, lean: 28 },
    { x: 135, height: 105, lean: 18 },
    { x: 190, height: 140, lean: 26 },
    { x: 240, height: 110, lean: 20 },
];

const round = (n: number) => Math.round(n * 100) / 100;

function buildStem({ x, height, lean }: (typeof STEMS)[number]) {
    const p0 = { x, y: 175 };
    const p1 = { x: x + lean * 0.2, y: 175 - height * 0.55 };
    const p2 = { x: x + lean, y: 175 - height };

    const at = (t: number) => ({
        x: (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x,
        y: (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y,
    });
    const angleAt = (t: number) => (Math.atan2(2 * (1 - t) * (p1.y - p0.y) + 2 * t * (p2.y - p1.y), 2 * (1 - t) * (p1.x - p0.x) + 2 * t * (p2.x - p1.x)) * 180) / Math.PI;

    const grains = [0.45, 0.58, 0.7, 0.82, 0.93].flatMap((t) =>
        [-1, 1].map((side) => {
            const p = at(t);
            const dir = angleAt(t) + side * 38;
            const rad = (dir * Math.PI) / 180;
            return { cx: round(p.x + Math.cos(rad) * 5), cy: round(p.y + Math.sin(rad) * 5), rotate: round(dir + 90) };
        }),
    );

    return { path: `M${p0.x} ${p0.y}Q${p1.x} ${p1.y} ${p2.x} ${p2.y}`, grains };
}

export function RicePattern({ className }: IconProps) {
    return (
        <svg viewBox="0 0 270 180" fill="currentColor" aria-hidden="true" className={className}>
            {STEMS.map((stem) => {
                const { path, grains } = buildStem(stem);
                return (
                    <g key={stem.x}>
                        <path d={path} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        {grains.map((g, i) => (
                            <ellipse key={i} cx={g.cx} cy={g.cy} rx="2.6" ry="6" transform={`rotate(${g.rotate} ${g.cx} ${g.cy})`} />
                        ))}
                    </g>
                );
            })}
        </svg>
    );
}
