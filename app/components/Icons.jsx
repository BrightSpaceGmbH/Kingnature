'use client';

// Health category icons as React components
export const HealthIcons = {
    erkaeltung: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M32 8v48M8 32h48M16 16l32 32M48 16L16 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.3" />
        </svg>
    ),
    gelenke: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <ellipse cx="32" cy="20" rx="12" ry="8" fill="none" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="32" cy="44" rx="12" ry="8" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M24 26c-4 4-4 12 0 16M40 26c4 4 4 12 0 16" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="32" cy="32" r="4" fill="currentColor" />
        </svg>
    ),
    haut: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d="M32 8c-12 0-20 10-20 24s8 24 20 24 20-10 20-24S44 8 32 8z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M22 28c0 0 4-4 10-4s10 4 10 4" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="24" cy="24" r="2" fill="currentColor" />
            <circle cx="40" cy="24" r="2" fill="currentColor" />
            <path d="M28 40c2 2 6 2 8 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
    ),
    herz: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d="M32 52C20 44 12 36 12 26c0-8 6-14 14-14 4 0 8 2 10 6 2-4 6-6 10-6 8 0 14 6 14 14 0 10-8 18-20 26z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M20 32h6l4-8 6 16 4-8h6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    immun: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d="M32 6L12 16v16c0 14 8 22 20 26 12-4 20-12 20-26V16L32 6z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M26 32l6 6 10-12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    leistung: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d="M36 8L16 36h16l-4 20 20-28H32l4-20z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M28 28l8 8" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        </svg>
    ),
    muedigkeit: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <rect x="16" y="24" width="32" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="20" y="28" width="8" height="12" rx="2" fill="currentColor" opacity="0.3" />
            <rect x="30" y="28" width="8" height="12" rx="2" fill="currentColor" opacity="0.5" />
            <rect x="40" y="28" width="8" height="12" rx="2" fill="currentColor" opacity="0.8" />
            <path d="M50 20l4-4M54 24h4M50 28l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    stress: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <ellipse cx="32" cy="32" rx="20" ry="16" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M18 28c2-4 6-6 10-6M36 22c4 0 8 2 10 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M16 40s8 8 16 0 16 0 16 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
    ),
    longevity: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d="M32 8c-8 0-14 6-14 14v20c0 8 6 14 14 14s14-6 14-14V22c0-8-6-14-14-14z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M24 22h16v10c0 4-4 8-8 8s-8-4-8-8V22z" fill="currentColor" opacity="0.2" />
            <line x1="32" y1="22" x2="32" y2="8" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="32" r="3" fill="currentColor" />
        </svg>
    ),
    schmerzen: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.3" />
            <circle cx="32" cy="32" r="3" fill="currentColor" />
            <path d="M32 8v8M32 48v8M8 32h8M48 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    gewicht: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d="M12 48h40l-6-28H18L12 48z" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M28 14l4 4 8-8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    verdauung: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d="M28 12c-8 0-12 4-12 10s4 8 8 10c4 2 8 4 8 10s-4 10-12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M36 12c8 0 12 4 12 10s-4 8-8 10c-4 2-8 4-8 10s4 10 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="24" cy="32" r="3" fill="currentColor" opacity="0.5" />
            <circle cx="40" cy="32" r="3" fill="currentColor" opacity="0.5" />
        </svg>
    ),
};

// Gender icons
export const GenderIcons = {
    male: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="28" cy="36" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M40 24L52 12M52 12v14M52 12H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    female: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="32" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M32 40v16M24 50h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    diverse: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M32 16V8M32 56v-8M16 32H8M56 32h-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M44 44l6 6M14 14l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
};

// Yes/No icons
export const YesNoIcons = {
    yes: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M24 32l6 6 12-12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    no: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M22 22l20 20M42 22L22 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    ),
};

// Exercise icons
export const ExerciseIcons = {
    frequent: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d="M16 32h8l4-12 8 24 4-12h8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="32" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M24 52h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    moderate: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="32" cy="14" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M24 28h16M20 40l8-12 8 12M32 28v24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    rarely: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <ellipse cx="32" cy="44" rx="16" ry="8" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M32 28v8" stroke="currentColor" strokeWidth="2" />
        </svg>
    ),
};

// Nutrition icons
export const NutritionIcons = {
    balanced: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M22 32h20M32 22v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="27" cy="27" r="4" fill="currentColor" opacity="0.3" />
            <circle cx="37" cy="37" r="4" fill="currentColor" opacity="0.3" />
        </svg>
    ),
    vegetarian: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d="M32 52V28" stroke="currentColor" strokeWidth="2" />
            <path d="M32 28c-8-8-8-20 0-20s8 12 0 20z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M20 40c0-8 6-12 12-12M44 40c0-8-6-12-12-12" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
    ),
    vegan: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d="M32 8c12 0 20 16 20 28s-8 20-20 20S12 48 12 36 20 8 32 8z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M32 18v28M24 26c4 4 8 8 8 20M40 26c-4 4-8 8-8 20" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
    ),
    lowCarb: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <rect x="16" y="24" width="32" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M24 36h16M24 42h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M28 16l4 8 4-8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    unbalanced: () => (
        <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M24 26l4 4-4 4M36 26l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 44c4-4 12-4 16 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
    ),
};
