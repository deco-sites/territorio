import { ComponentChildren, JSX, toChildArray, VNode } from "preact";
import { ForwardedRef, forwardRef, Ref } from "preact/compat";

import { useSignal } from "@preact/signals";
import useTsDimensions from "deco-sites/territorio/hooks/useTsDimensions.tsx";
import { useEffect, useRef } from "preact/hooks";
import { debounce } from "std/async/debounce.ts";
import type { Props as TsCarouselBarProps } from "./TS-Carousel-Bar.tsx";
import TsCarouselBar from "./TS-Carousel-Bar.tsx";

type PickProps = Pick<TsCarouselBarProps, "activeColor">;

export interface Props extends PickProps {
  children: ComponentChildren;
  class?: string | JSX.SignalLike<string | undefined>;
  containerClassName?: string | JSX.SignalLike<string | undefined>;
  autoChangeDelay?: number;
  showBar?: boolean;
}

const TsCarouselIsland = forwardRef(
  (
    {
      activeColor,
      children,
      class: className,
      containerClassName,
      autoChangeDelay = 0,
      showBar = true,
    }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const items = toChildArray((children as VNode)?.props?.children ?? []);
    const currentIndex = useSignal(0);
    const carouselRef = (ref as Ref<HTMLDivElement>) ||
      useRef<HTMLDivElement>(null);
    const { width } = useTsDimensions();

    const setIndexFromScroll = debounce((scrollLeft: number) => {
      currentIndex.value = Math.round(scrollLeft / width);
    }, 100);

    useEffect(() => {
      if (autoChangeDelay) {
        const interval = setInterval(() => {
          const index = (currentIndex.value + 1) % items.length;
          currentIndex.value = index;
          carouselRef.current?.scrollTo({
            left: width * index,
            behavior: "smooth",
          });
        }, autoChangeDelay);
        return () => clearInterval(interval);
      }
    }, [autoChangeDelay, currentIndex.value]);

    return (
      <div class={containerClassName}>
        <div
          class={className}
          ref={carouselRef}
          onScroll={(e) => {
            setIndexFromScroll(e.currentTarget.scrollLeft);
          }}
        >
          {items}
        </div>
        {showBar && (
          <TsCarouselBar
            items={items}
            activeColor={activeColor}
            currentId={currentIndex.value}
            onItemClick={(index) => {
              currentIndex.value = index;
              carouselRef.current?.scrollTo({
                left: width * index,
                behavior: "smooth",
              });
            }}
          />
        )}
      </div>
    );
  },
);

export default TsCarouselIsland;
