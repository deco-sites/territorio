import { ComponentChildren, toChildArray, VNode } from "preact";
import TsCarouselBarIsland from "../../../islands/territorio/TS-Carousel.tsx";

export interface Props {
  children: ComponentChildren;
}

const TsTestimonialsCarouselMobile = ({ children }: Props) => {
  const items = toChildArray((children as VNode) ?? []);

  return (
    <TsCarouselBarIsland
      class="flex max-w-full gap-[10vw] overflow-x-auto px-8 snap-x snap-mandatory scrollbar-hide"
      containerClassName="flex flex-col gap-8 items-center"
      activeColor="#FFD200"
      autoChangeDelay={5000}
    >
      {items.map((item, index) => (
        <div class={`min-w-full snap-center`}>{item}</div>
      ))}
    </TsCarouselBarIsland>
  );
};

export default TsTestimonialsCarouselMobile;
