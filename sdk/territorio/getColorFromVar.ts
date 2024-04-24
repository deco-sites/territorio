import {
  ComplementaryColors,
  ThemeColors,
} from "../../sections/Theme/Theme.tsx"

export type Color =
  | keyof ThemeColors
  | keyof ComplementaryColors
  | "accent"
  | "accent-content"

export const ColorMapping: Record<Color, string> = {
  "accent-content": "var(--ac)",
  "base-100": "var(--b1)",
  "base-200": "var(--b2)",
  "base-300": "var(--b3)",
  "base-content": "var(--bc)",
  "error-content": "var(--ec)",
  "info-content": "var(--ic)",
  "neutral-content": "var(--nc)",
  "primary-content": "var(--pc)",
  "secondary-content": "var(--sc)",
  "success-content": "var(--suc)",
  "tertiary-content": "var(--tc)",
  "warning-content": "var(--ac)",
  accent: "var(--a)",
  error: "var(--e)",
  info: "var(--i)",
  neutral: "var(--n)",
  primary: "var(--p)",
  secondary: "var(--s)",
  success: "var(--su)",
  tertiary: "var(--t)",
  warning: "var(--w)",
}

/**
 * A function that retrieves the color mapping for a given color.
 *
 * @param {Color} color - The color for which to retrieve the color mapping.
 * @return {any} The color mapping for the specified color.
 */
export function getColorVar(color: Color) {
  return ColorMapping[color]
}

/**
 * Returns a CSS color value in the Oklch color space with the specified color and opacity.
 *
 * @param {Color} color - The color to be used.
 * @param {number | string} [opacity=1] - The opacity of the color. Defaults to 1. Can also be a CSS var.
 * @return {string} - The CSS color value in the Oklch color space.
 */
export function getColorFromVar(color: Color, opacity: number | string = 1) {
  return `oklch(${getColorVar(color)} / ${opacity})`
}
