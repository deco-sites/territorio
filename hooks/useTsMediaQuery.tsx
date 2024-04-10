import useTsDimensions from "deco-sites/territorio/hooks/useTsDimensions.tsx";
import defaultTheme from "npm:tailwindcss@3.4.1/defaultTheme.js";

const mediaQueries = defaultTheme?.screens || {};

export type MediaQueryKey = keyof typeof mediaQueries;

export default function useTsMediaQuery(): {
  mediaQueries: typeof mediaQueries;
  currentMediaQuery: MediaQueryKey;
} {
  const { width } = useTsDimensions();

  return {
    mediaQueries,
    currentMediaQuery: (width
      ? (Object.entries(mediaQueries).find(
        ([, queryWidth]) => width <= parseInt(queryWidth.replaceAll(/\D/g, "")),
      )?.[0] as MediaQueryKey)
      : "md") ?? "md",
  };
}
