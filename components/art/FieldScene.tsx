import { useId } from "react";

const TONES = {
    mist: { skyTop: "#d7e8d0", skyBottom: "#f6f9ee", sun: "#f3d35c", far: "#a9c9b3", mid: "#6aa384", near: "#2f7d55", row: "#1f5c3d" },
    dawn: { skyTop: "#fde2a8", skyBottom: "#fbf1da", sun: "#e9a817", far: "#b7cf9c", mid: "#7fb069", near: "#3f8a4f", row: "#2b6a3a" },
    terrace: { skyTop: "#cfe3ee", skyBottom: "#f1f6ee", sun: "#f8e27a", far: "#8fb3a6", mid: "#5d9a76", near: "#3b7f4e", row: "#27603a" },
    gold: { skyTop: "#f9d99a", skyBottom: "#fdf1d6", sun: "#e8890c", far: "#d6bb73", mid: "#c9a13b", near: "#b88a1f", row: "#8f650f" },
} as const;

export type FieldTone = keyof typeof TONES;

export default function FieldScene({ tone = "mist", sunX = 300, className }: { tone?: FieldTone; sunX?: number; className?: string }) {
    const c = TONES[tone];
    const skyId = `sky-${useId().replace(/:/g, "")}`;

    return (
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true" className={className}>
            <defs>
                <linearGradient id={skyId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor={c.skyTop} />
                    <stop offset="1" stopColor={c.skyBottom} />
                </linearGradient>
            </defs>

            <rect width="400" height="300" fill={`url(#${skyId})`} />
            <circle cx={sunX} cy="78" r="30" fill={c.sun} opacity="0.9" />
            <circle cx={sunX} cy="78" r="46" fill={c.sun} opacity="0.18" />

            <path d="M0 170C60 128 120 150 180 134S300 118 400 150V300H0Z" fill={c.far} />
            <path d="M0 202C80 170 150 192 230 176S340 170 400 192V300H0Z" fill={c.mid} />
            <path d="M0 236C90 214 170 233 250 220S350 214 400 228V300H0Z" fill={c.near} />

            <g fill="none" stroke={c.row} strokeWidth="2" strokeLinecap="round" opacity="0.4">
                <path d="M-10 252C90 238 190 254 270 242S370 238 410 246" />
                <path d="M-10 266C100 250 200 270 280 256S380 252 410 262" />
                <path d="M-10 282C110 264 210 288 290 272S385 268 410 278" />
            </g>
        </svg>
    );
}
