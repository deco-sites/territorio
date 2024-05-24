import Image from "apps/website/components/Image.tsx";
import TsCarouselBarIsland from "../../../islands/territorio/TS-Carousel.tsx";
import TsRichText from "../rich-text/TS-Rich-Text.tsx";
import TsTypography from "../typography/TS-Typography.tsx";
import { TerritoriosCarouselItem } from "./types.ts";

export interface Props {
  items: TerritoriosCarouselItem[];
  delay?: number;
}

const TsTerritoriosCarousel = ({ items, delay = 5000 }: Props) => {
  return (
    <TsCarouselBarIsland
      containerClassName="flex flex-col gap-8 items-center"
      class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-[100vw]"
      autoChangeDelay={delay}
    >
      {Object.entries(items).map(([_, item]) => (
        <div class="text-center min-w-full flex flex-col gap-1">
          <div class="flex flex-col items-center gap-y-5">
            <div class="flex flex-col items-center justify-center max-w-[60%] sm:max-w-[40%]">
              <div class="flex justify-between items-center gap-x-8 mb-5">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={82}
                  height={41}
                  class="w-[10.25rem] h-[5.125rem]"
                />
                <TsTypography
                  weight="300"
                  color="accent-content"
                  class="text-5xl text-left max-w-[60%]"
                >
                  Território{" "}
                  <TsTypography weight="600">{item.title}</TsTypography>
                </TsTypography>
              </div>
              <div class="text-left">
                <TsRichText class="text-base-100 w-full font-body text-2xl">
                  {item.description}
                </TsRichText>
              </div>
            </div>
          </div>
        </div>
      ))}
    </TsCarouselBarIsland>
  );
};

export default TsTerritoriosCarousel;
