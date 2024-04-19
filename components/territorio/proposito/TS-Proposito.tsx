import Image from "apps/website/components/Image.tsx";
import { AppContext } from "../../../apps/site.ts";
import { ImageType } from "../types.ts";
import TsTypography from "../typography/TS-Typography.tsx";

type BasicImage = Omit<ImageType, "url" | "width" | "height">;

export interface Props {
  title: string;
  image: BasicImage;
  descriptionPrimary: string;
  descriptionSecondary: string;
  listTitle: string;
  listItems: string[];
}

const TsProposito = ({
  title,
  image,
  descriptionPrimary,
  descriptionSecondary,
  listTitle,
  listItems,
}: Props) => {
  const [regular, bold] = title.split(" ");

  return (
    <div class="flex justify-center">
      <div
        id="proposito"
        class="flex flex-col my-20 sm:my-40 max-w-[1200px] px-[44px] sm:px-8 xl:px-0"
      >
        <TsTypography
          color="accent-content"
          weight="200"
          class="text-3xl -mt-10 sm:mt-0 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl max-w-[220px] md:max-w-[455px] absolute"
        >
          {regular} <TsTypography weight="600">{bold}</TsTypography>
        </TsTypography>
        <Image src={image.src} alt={image.alt} width={1300} height={660} />
        <div class="flex flex-col md:flex-row justify-center gap-y-5 md:gap-x-20 lg:gap-x-30 xl:gap-x-40 mt-10">
          <TsTypography
            color="accent-content"
            class="text-xl md:text-2xl xl:text-4xl md:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px]"
          >
            {descriptionPrimary}{" "}
            <TsTypography color="base-100">{descriptionSecondary}</TsTypography>
          </TsTypography>
          <div class="flex flex-col gap-5 md:max-w-[225px] lg:max-w-[300px] xl:max-w-[375px]">
            <TsTypography
              type="body"
              weight="600"
              color="base-100"
              class="text-base sm:text-lg xl:text-xl"
            >
              {listTitle}
            </TsTypography>
            <ul class="flex flex-col gap-5">
              {listItems.map((item) => (
                <li key={item} class="flex">
                  <div class="bg-accent-content w-1 h-full mr-2"></div>
                  <TsTypography
                    type="body"
                    color="base-100"
                    class="text-base md:text-lg xl:text-xl"
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
