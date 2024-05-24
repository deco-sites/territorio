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
    <div class="flex justify-center ts-responsive">
      <div
        id="proposito"
        class="flex flex-col my-20 sm:my-32 max-w-[75rem] px-8 sm:px-32 md:px-8 xl:px-0"
      >
        <TsTypography
          color="accent-content"
          weight="200"
          class="-mt-10 sm:mt-0 text-5xl sm:text-7xl md:text-8xl max-w-[13.75rem] md:max-w-[28.4375rem] absolute"
        >
          {regular} <TsTypography weight="600">{bold}</TsTypography>
        </TsTypography>
        <Image
          src={image.src}
          alt={image.alt}
          width={1386}
          height={663}
          class="md:w-[86.625rem] md:h-[41.4375rem]"
        />
        <div class="flex flex-col sm:flex-row justify-center gap-y-5 gap-x-40 mt-10">
          <TsTypography
            color="accent-content"
            class="text-4xl max-w-[80%] sm:max-w-[22rem]"
          >
            {descriptionPrimary}{" "}
            <TsTypography color="base-100">{descriptionSecondary}</TsTypography>
          </TsTypography>
          <div class="flex flex-col gap-5 md:max-w-[24rem]">
            <TsTypography
              type="body"
              weight="600"
              color="base-100"
              class="text-2xl md:text-xl"
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
                    class="text-2xl md:text-xl"
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
