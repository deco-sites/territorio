import Image from "apps/website/components/Image.tsx";
import TsPlatformCardContent from "./TS-PlatformCardContent.tsx";
import type { ContentProps } from "./types.ts";

export default function TsPlatformDesktopContent({
  content,
  image,
}: ContentProps) {
  return (
    <div class="my-12 hidden px-8 md:flex flex-col gap-10 relative">
      <div class="flex justify-between">
        <TsPlatformCardContent content={content.section1} />
        <TsPlatformCardContent content={content.section2} />
      </div>
      <div class="flex justify-end">
        <div class="w-1/4 h-32"></div>
      </div>
      <div class="flex justify-end">
        <TsPlatformCardContent
          class="pl-6 lg:pl-0 lg:w-1/5"
          content={content.section3}
        />
      </div>
      <div class="flex justify-evenly">
        <TsPlatformCardContent content={content.section4} />
        <TsPlatformCardContent content={content.section5} />
      </div>
      <div class="absolute flex max-w-[950px] w-[80vw] top-[18%] left-[9%] lg:top-[13%] lg:left-[12%] pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="73"
          viewBox="0 0 73 73"
          fill="none"
          class="self-end mr-6"
        >
          <g clip-path="url(#clip0_1_586)">
            <path
              d="M73 26.807L73 -8.70516e-07L0 0L8.70516e-07 73L26.807 73C26.807 47.5242 47.5395 26.807 73 26.807Z"
              fill="#28FF64"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_586">
              <rect
                width="73"
                height="73"
                fill="white"
                transform="matrix(1.19249e-08 1 1 -1.19249e-08 0 0)"
              />
            </clipPath>
          </defs>
        </svg>
        <Image src={image} width={754} height={570} class="w-2/3" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="76"
          height="76"
          viewBox="0 0 76 76"
          fill="none"
          class="mt-[15%]"
        >
          <g clip-path="url(#clip0_1_584)">
            <path
              d="M-6.22551e-05 27.9086L-6.10352e-05 -3.32207e-06L75.9999 0L75.9999 76L48.0913 76C48.0913 49.4773 26.5067 27.9086 -6.22551e-05 27.9086Z"
              fill="#28FF64"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_584">
              <rect
                width="76"
                height="76"
                fill="white"
                transform="translate(75.9999) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
