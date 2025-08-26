
export const TEXT_SIZES = ["inherit", "xs", "sm", "md", "lg", "xl", "2xl"] as const;
export type TextSize = (typeof TEXT_SIZES)[number];

export const TEXT_WEIGHTS = ["inherit", "normal", "medium", "semibold", "bold"] as const;
export type TextWeight = (typeof TEXT_WEIGHTS)[number];
