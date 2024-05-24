import Image from "apps/website/components/Image.tsx";
import { AppContext } from "../../../apps/site.ts";
import TsRichText from "../rich-text/TS-Rich-Text.tsx";
import TsTypography from "../typography/TS-Typography.tsx";
import TsTerritoriosCarousel from "./TS-TerritoriosCarousel.tsx";
import { BasicImage, TerritoriosCarouselItem } from "./types.ts";

export interface Props {
  image: BasicImage;
  titlePrimary: string;
  titleSecondary: string;
  descriptionPrimary: string;
  descriptionSecondary: string;
  carouselItems: TerritoriosCarouselItem[];
}

function TsTerritorios({
  image,
  titlePrimary,
  titleSecondary,
  descriptionPrimary,
  descriptionSecondary,
  carouselItems,
}: Props) {
  return (
    <div
      id="territorios"
      class="flex justify-center ts-responsive w-full mt-10 mb-28 md:mb-20 overflow-x-hidden"
    >
      {/* Mobile */}
      <div class="md:hidden flex flex-col items-center w-full px-8 sm:px-32">
        <div class="flex justify-between items-end mb-12">
          <TsTypography
            color="accent-content"
            class="text-6xl leading-[4rem] w-full max-w-[20rem]"
          >
            {titlePrimary}{" "}
            <TsTypography color="base-100">{titleSecondary}</TsTypography>
          </TsTypography>
          <div class="w-full">
            <Image src={image.src} alt={image.alt} width={380} height={522} />
          </div>
        </div>
        <TsTypography
          type="body"
          color="base-100"
          class="text-2xl w-full mb-12"
        >
          {descriptionPrimary}{" "}
          <TsTypography weight="600">{descriptionSecondary}</TsTypography>
        </TsTypography>
        <TsTerritoriosCarousel items={carouselItems} />
      </div>
      {/* Desktop */}
      <div class="hidden md:flex flex-col max-w-[75rem] w-full justify-center px-8 xl:px-0">
        <div class="flex justify-between items-end">
          <div class="flex flex-col">
            <TsTypography color="accent-content" class="text-8xl mb-[4.375rem]">
              {titlePrimary}{" "}
              <TsTypography color="base-100">{titleSecondary}</TsTypography>
            </TsTypography>
            <TsTypography
              type="body"
              color="base-100"
              class="text-2xl max-w-[29rem]"
            >
              {descriptionPrimary}{" "}
              <TsTypography weight="600">{descriptionSecondary}</TsTypography>
            </TsTypography>
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={825}
            class="w-[37.5rem] h-[51.5625rem]"
          />
        </div>
        <div class="flex justify-between w-full mt-16">
          {carouselItems.map((item) => (
            <div key={item.title} class="max-w-[18.75rem]">
              <div class="flex justify-between items-center mb-3 gap-x-7">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={100}
                  height={64}
                  class="w-[6.25rem] h-[4rem]"
                />
                <TsTypography
                  weight="300"
                  color="accent-content"
                  class="text-[2rem] leading-none max-w-40"
                >
                  Território{" "}
                  <TsTypography weight="600">{item.title}</TsTypography>
                </TsTypography>
              </div>
              <TsRichText class="text-base-100 font-body text-base">
                {item.description}
              </TsRichText>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const loader = (props: Props, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};

export default TsTerritorios;
