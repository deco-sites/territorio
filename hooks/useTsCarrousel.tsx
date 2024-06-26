import { useComputed, useSignal } from "@preact/signals";
import useTsMediaQuery, {
  MediaQueryKey,
} from "deco-sites/territorio/hooks/useTsMediaQuery.tsx";
import { useCallback, useEffect, useMemo } from "preact/hooks";

type MediaQueries = { [key in MediaQueryKey]: number };

/**
 * Params for useTsCarrousel hook.
 * @template T - Type of items in the carrousel.
 */
type Params<T> = {
  /**
   * The array of items to display in the carrousel.
   */
  items: T[];
  /**
   * The number of visible items in the carrousel or an object with MediaQuery keys
   * and the number of visible items for each key.
   */
  visibleItemsCountParam: number | MediaQueries;
  /**
   * Determines if the carrousel should cycle through items automatically.
   */
  shouldCycle?: boolean;
  /**
   * The delay in milliseconds for auto-changing items in the carrousel. If greater than 0,
   * this overrides `shouldCycle` property to true.
   */
  autoChangeDelay?: number;
  /**
   * A callback function to be called everytime a next or previous action is triggered
   */
  onChangeCallback?: () => void;
};

export function useTsCarrousel<T>({
  items,
  visibleItemsCountParam,
  shouldCycle: shouldCycleParam = false,
  autoChangeDelay = 0,
  onChangeCallback,
}: Params<T>) {
  const hoverItem = useSignal<T | undefined>(undefined);
  const currentIndex = useSignal(0);
  const { currentMediaQuery } = useTsMediaQuery();
  const shouldCycle = shouldCycleParam || autoChangeDelay > 0;

  const visibleItemsCount = useMemo(() => {
    return typeof visibleItemsCountParam === "number"
      ? visibleItemsCountParam
      : visibleItemsCountParam[currentMediaQuery];
  }, [visibleItemsCountParam, currentMediaQuery]);

  const setCurrentIndex = useCallback(
    (index: number) => {
      if (index >= 0 && index < items.length) {
        currentIndex.value = index;
      }
      if (index < 0) {
        currentIndex.value = 0;
      }
      if (index >= items.length) {
        currentIndex.value = items.length - 1;
      }
    },
    [items],
  );

  const lastVisibleIndex = useMemo(() => {
    return currentIndex.value + visibleItemsCount;
  }, [currentIndex.value, visibleItemsCount]);

  const visibleItems = useMemo(() => {
    return items.slice(currentIndex.value, lastVisibleIndex);
  }, [currentIndex.value, items, lastVisibleIndex]);

  const hasNext = useComputed(() => {
    return currentIndex.value + 1 < items.length || shouldCycle;
  });

  const hasPrevious = useComputed(() => {
    return currentIndex.value - 1 >= 0 || shouldCycle;
  });

  const nextItem = useComputed(() => {
    if (hasNext.value) {
      return items[currentIndex.value + 1];
    }
  });

  const previousItem = useComputed(() => {
    if (hasPrevious.value) {
      return items[currentIndex.value - 1];
    }
  });

  const onNext = useCallback(() => {
    onChangeCallback?.();
    setTimeout(() => {
      if (nextItem.value && lastVisibleIndex < items.length) {
        setCurrentIndex(currentIndex.value + 1);
      } else if (shouldCycle) {
        setCurrentIndex(0);
      }
    }, 100);
  }, [currentIndex, nextItem, shouldCycle]);

  const onPrevious = useCallback(() => {
    onChangeCallback?.();
    setTimeout(() => {
      if (previousItem.value) {
        setCurrentIndex(currentIndex.value - 1);
      } else if (shouldCycle) {
        setCurrentIndex(items.length - 1);
      }
    }, 100);
  }, [currentIndex, previousItem, shouldCycle]);

  useEffect(() => {
    if (autoChangeDelay) {
      const interval = setInterval(onNext, autoChangeDelay);
      return () => clearInterval(interval);
    }
  }, [autoChangeDelay, onNext, currentIndex.value]);

  const setHoverItem = (item: T | undefined) => {
    hoverItem.value = item;
  };

  return {
    visibleItems,
    nextItem: nextItem.value,
    previousItem: previousItem.value,
    hoverItem: hoverItem.value,
    currentIndex: currentIndex.value,
    hasNext: hasNext.value,
    hasPrevious: hasPrevious.value,
    onNext,
    onPrevious,
    setHoverItem,
    setCurrentIndex,
  };
}
