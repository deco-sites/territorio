import Image from "apps/website/components/Image.tsx";
import { AppContext } from "../../../apps/site.ts";
import { ImageType } from "../types.ts";
import TsTypography from "../typography/TS-Typography.tsx";

type BasicImage = Omit<ImageType, "url" | "width" | "height">;

export interface Props {
  title: string;
  mobileImage: BasicImage;
  dektopImage: BasicImage;
  descriptionPrimary: string;
  descriptionSecondary: string;
  listTitle: string;
  listItems: string[];
}

const TsProposito = ({
  title,
  mobileImage,
  dektopImage,
  descriptionPrimary,
  descriptionSecondary,
  listTitle,
  listItems,
}: Props) => {
  const [regular, bold] = title.split(" ");

  return (
    <div class="flex justify-center ts-responsive">
      <div
        id="proposito"
        class="flex flex-col my-20 sm:my-32 max-w-[75rem] px-[44px] md:px-8 lg:px-0"
      >
        <TsTypography
          color="accent-content"
          weight="200"
          class="absolute text-[29px] leading-none sm:mt-4 sm:text-7xl md:text-8xl max-w-[13.75rem] md:max-w-[28.4375rem]"
        >
          {regular} <TsTypography weight="600">{bold}</TsTypography>
        </TsTypography>
        <Image
          src={mobileImage.src}
          alt={mobileImage.alt}
          width={360}
          height={217}
          class="sm:hidden w-full h-full"
        />
        <Image
          src={dektopImage.src}
          alt={dektopImage.alt}
          width={1306}
          height={663}
          class="hidden sm:block w-full md:w-[81.625rem] h-full"
        />
        <div class="flex flex-col sm:flex-row justify-center gap-[20px] sm:gap-y-6 gap-x-40 mt-10">
          <TsTypography
            color="accent-content"
            class="text-[20px] leading-tight sm:text-4xl sm:leading-normal max-w-[80%] sm:max-w-[22rem]"
          >
            {descriptionPrimary}{" "}
            <TsTypography color="base-100">{descriptionSecondary}</TsTypography>
          </TsTypography>
          <div class="flex flex-col gap-[20px] sm:gap-6 md:max-w-[24rem]">
            <TsTypography
              type="body"
              weight="600"
              color="base-100"
              class="text-[16px] sm:text-2xl md:text-xl leading-[23px] ml-[12px]"
            >
              {listTitle}
            </TsTypography>
            <ul class="flex flex-col gap-[20px] sm:gap-6">
              {listItems.map((item) => (
                <li key={item} class="flex items-center">
                  <div class="bg-accent-content w-[2px] sm:w-[4px] h-[85%] mr-[10px]">
                  </div>
                  <TsTypography
                    type="body"
                    color="base-100"
                    class="text-[14px] sm:text-2xl md:text-xl leading-[19px] sm:leading-[23px] "
                  >
                    {item}
                  </TsTypography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const loader = (props: Props, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};

export default TsProposito;
