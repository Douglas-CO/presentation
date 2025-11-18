export const colorMUI = [
  'error',
  'info',
  'inherit',
  'primary',
  'secondary',
  'success',
  'warning'
] as const;

export type ColorMUI = (typeof colorMUI)[number];
