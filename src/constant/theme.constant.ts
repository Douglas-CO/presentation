export const ThemeMode = [
  "minimal",
  "luxury",
  "nature",
  "monochrome",
  "warm",
] as const;

export type ThemeMode = (typeof ThemeMode)[number];
