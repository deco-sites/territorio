import { ComponentChildren, toChildArray, VNode } from "preact";

import { useSignal } from "@preact/signals";
import useTsDimensions from "deco-sites/territorio/hooks/useTsDimensions.tsx";
import { useRef } from "preact/hooks";
import { debounce } from "std/async/debounce.ts";
import type { Props as TsCarouselBarProps } from "./TS-Carousel-Bar.tsx";
import TsCarouselBar from "./TS-Carousel-Bar.tsx";

type PickProps = Pick<TsCarouselBarProps, "activeColor">;

export interface Props extends PickProps {
  children: ComponentChildren;
  class?: string;
  containerClassName?: string;
}

const TsCarouselBarIsland = ({
  activeColor,
  children,
  class: className,
  containerClassName,
}: Props) => {
  const items = toChildArray((children as VNode)?.props?.children ?? []);
  const currentIndex = useSignal(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { width } = useTsDimensions();

  const setIndexFromScroll = debounce((scrollLeft: number) => {
    currentIndex.value = Math.round(scrollLeft / width);
  }, 100);

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
    </div>
  );
};

export default TsCarouselBarIsland;
