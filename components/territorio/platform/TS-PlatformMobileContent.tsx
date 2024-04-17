import Image from "apps/website/components/Image.tsx";
import TsCarouselBarIsland from "../../../islands/territorio/TS-Carousel-Bar-Island.tsx";
import TsPlatformCardContent from "./TS-PlatformCardContent.tsx";
import type { ContentProps } from "./types.ts";

export default function TsPlatformMobileContent({
  content,
  image,
}: ContentProps) {
  return (
    <div class="md:hidden">
      <div class="relative w-[80%] mx-auto overflow-hidden pb-8 px-8 mb-10">
        <svg
          class="absolute top-0 left-0"
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
        >
          <g clip-path="url(#clip0_92_96)">
            <path
              d="M27 9.9149L27 -3.21972e-07L0 0L3.21972e-07 27L9.9149 27C9.9149 17.5774 17.5831 9.9149 27 9.9149Z"
              fill="#28FF64"
            />
          </g>
          <defs>
            <clipPath id="clip0_92_96">
              <rect
                width="27"
                height="27"
                fill="white"
                transform="matrix(1.19249e-08 1 1 -1.19249e-08 0 0)"
              />
            </clipPath>
          </defs>
        </svg>
        <Image src={image} width={754} height={570} class="w-full" />

        <svg
          class="absolute bottom-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="27"
          viewBox="0 0 26 27"
          fill="none"
        >
          <g clip-path="url(#clip0_92_98)">
            <path
              d="M16.4523 -8.62409e-07L26 0L26 27L0 27L8.39064e-07 17.0851C9.07357 17.0851 16.4523 9.41689 16.4523 -8.62409e-07Z"
              fill="#28FF64"
            />
          </g>
          <defs>
            <clipPath id="clip0_92_98">
              <rect
                width="27"
                height="26"
                fill="white"
                transform="translate(26) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <TsCarouselBarIsland
        class="flex max-w-full gap-[10vw] overflow-x-auto px-8 snap-x snap-mandatory scrollbar-hide"
        containerClassName="flex flex-col gap-8 items-center"
        activeColor="#28FF64"
        autoChangeDelay={5000}
      >
        {Object.entries(content).map(([key, value]) => (
          <TsPlatformCardContent
            content={value}
            class="min-w-[90vw] px-8 snap-center"
          />
        ))}
      </TsCarouselBarIsland>
    </div>
  );
}
