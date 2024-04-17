import { useSignal, useSignalEffect } from "@preact/signals";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import { ComponentChildren, toChildArray, VNode } from "preact";
import { useTsCarrousel } from "../../../hooks/useTsCarrousel.tsx";
import TsCarouselBar from "../carousel/TS-Carousel-Bar.tsx";

export interface Props {
  children: ComponentChildren;
}

const TsTestimonialsCarouselDesk = ({ children }: Props) => {
  const items = toChildArray((children as VNode)?.props?.children ?? []);

  const {
    visibleItems,
    currentIndex,
    setCurrentIndex,
    onNext,
    onPrevious,
    hasNext,
    hasPrevious,
  } = useTsCarrousel({
    items,
    visibleItemsCountParam: 1,
    shouldCycle: true,
  });

  const changedPosition = useSignal(0);
  const shouldShow = useSignal(true);

  useSignalEffect(() => {
    if (changedPosition.value !== 0) {
      shouldShow.value = false;
      setTimeout(() => {
        changedPosition.value = 0;
        setTimeout(() => {
          shouldShow.value = true;
        }, 100);
      }, 100);
    }
  });

  return (
    <div class="flex flex-col items-center gap-8 py-16">
      <div class={clx("flex gap-8 ")}>
        <button
          onClick={() => {
            changedPosition.value = -1;
            setTimeout(() => {
              onPrevious();
            }, 100);
          }}
          disabled={!hasPrevious}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="107"
            viewBox="0 0 33 107"
            fill="none"
          >
            <path d="M31.975 1L1 53.7598L31.975 106.52" stroke="#FFD200" />
          </svg>
        </button>
        <div
          class={clx(
            "transition-all ease-in-out duration-200 transform opacity-0",
            changedPosition.value === -1 && "translate-x-10",
            changedPosition.value === 1 && "-translate-x-10",
            changedPosition.value === 0 && "translate-x-0",
            shouldShow.value && "opacity-100",
          )}
        >
          {visibleItems}
        </div>
        <button
          onClick={() => {
            changedPosition.value = 1;
            setTimeout(() => {
              onNext();
            }, 100);
          }}
          disabled={!hasNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="107"
            viewBox="0 0 33 107"
            fill="none"
          >
            <path
              d="M0.852051 1L31.8221 53.7598L0.852051 106.52"
              stroke="#FFD200"
            />
          </svg>
        </button>
      </div>
      <TsCarouselBar
        items={items}
        currentId={currentIndex}
        onItemClick={setCurrentIndex}
        activeColor="#FFD200"
      />
    </div>
  );
};

export default TsTestimonialsCarouselDesk;
