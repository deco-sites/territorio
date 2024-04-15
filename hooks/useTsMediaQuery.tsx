import useTsDimensions from 'deco-sites/territorio/hooks/useTsDimensions.tsx';
import defaultTheme from 'npm:tailwindcss@3.4.1/defaultTheme.js';

const mediaQueries = defaultTheme?.screens || {};

export type MediaQueryKey = keyof typeof mediaQueries;

export default function useTsMediaQuery(): {
  mediaQueries: typeof mediaQueries;
  currentMediaQuery: MediaQueryKey;
} {
  const { width } = useTsDimensions();

  return {
    mediaQueries,
    currentMediaQuery:
      (() => {
        if (width < 640) return 'sm';
        if (width >= 640 && width < 768) return 'md';
        if (width >= 768 && width < 1024) return 'lg';
        if (width >= 1024 && width < 1280) return 'xl';
        if (width >= 1280) return '2xl';
      })() || 'xl',
  };
}
