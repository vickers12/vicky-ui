

export const HEADING_SIZES = ["inherit", "xs", "sm", "md", "lg", "xl", "2xl"] as const;
export type HeadingSize = (typeof HEADING_SIZES)[number];

export const HEADING_LEVELS = [1, 2, 3, 4, 5, 6] as const;
export type HeadingLevel = (typeof HEADING_LEVELS)[number];
