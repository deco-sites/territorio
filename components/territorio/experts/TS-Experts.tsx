import Image from "apps/website/components/Image.tsx";
import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx";
import TsRichText from "../rich-text/TS-Rich-Text.tsx";
import { useState } from "preact/hooks";
import { AppContext } from "../../../apps/site.ts";
import Icon from "../../../components/ui/Icon.tsx";
import TsExpertCarousel from "./TS-Expert-Carousel.tsx";
import type { BasicImage, Expert } from "./types.ts";

export interface ExpertProps {
  titlePrimary: string;
  titleSecondary: string;
  leftDecorator: BasicImage;
  rightDecorator: BasicImage;
  experts: Expert[];
}

const TsExperts = ({
  titlePrimary,
  titleSecondary,
  leftDecorator,
  rightDecorator,
  experts,
}: ExpertProps) => {
  const [expertId, setExpertId] = useState(0);
  const { image, description, fullName, social } = experts[expertId];
  const [firstName, lastName] = fullName.split(" ");

  return (
    <div
      id="experts"
      class="flex flex-col items-center my-10 md:my-32 px-8 overflow-x-hidden"
    >
      <div class="flex gap-x-3 justify-center items-center">
        <Image
          src={leftDecorator.src}
          alt={leftDecorator.alt}
          width={80}
          height={80}
          class="md:hidden w-[50px] sm:w-[80px]"
        />
        <TsTypography
          color="base-300"
          weight="200"
          class="text-3xl sm:text-5xl md:text-8xl max-w-[112px] md:max-w-[360px]"
        >
          {titlePrimary}{" "}
          <TsTypography weight="600">{titleSecondary}</TsTypography>
        </TsTypography>
      </div>
      <div class="flex sm:w-full xl:w-auto gap-x-8 my-8 md:my-14">
        <div class="flex bg-base-300 w-full xl:w-[970px] h-[250px] md:h-[400px] md:ml-24 rounded-b-lg rounded-l-lg">
          <Image
            src={leftDecorator.src}
            alt={leftDecorator.alt}
            width={80}
            height={80}
            class="hidden lg:inline-block absolute w-[161px] ml-[-100px] mt-[-160px]"
          />
          <Image
            src={image.src}
            alt={image.alt}
            width={353}
            height={502}
            class="self-end h-fit ml-[-90px] max-w-[240px] sm:max-w-[263px] lg:max-w-[423px] max-h-[285px] sm:max-h-[312px] lg:max-h-[502px]"
          />
          <div class="flex flex-col md:flex-row justify-between w-full mt-4 md:mt-12 mx-2 md:mx-8">
            <div class="flex flex-col gap-y-3 md:gap-y-7">
              <TsTypography
                class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-[100px] sm:w-auto"
                weight="400"
              >
                {firstName} <TsTypography weight="600">{lastName}</TsTypography>
              </TsTypography>
              <div
                id="scroll"
                class="flex flex-col gap-y-3 overflow-y-auto max-h-[120px] md:max-h-[240px] pr-4 xl:pr-8"
              >
                {description.map(({ text }) => (
                  <TsRichText
                    key={text}
                    class="font-body md:max-w-[440px] text-xs sm:text-sm md:text-lg xl:text-xl break-normal"
                  >
                    {text}
                  </TsRichText>
                ))}
              </div>
            </div>
            <ul class="flex md:flex-col gap-4 md:ml-2 my-3 md:my-0">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label} Logo`}
                  >
                    <Icon
                      class="text-black w-[18px] h-[18px] sm:w-[27px] sm:h-[27px] md:w-[36px] md:h-[36px]"
                      id={item.label}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Image
          src={rightDecorator.src}
          alt={rightDecorator.alt}
          width={68}
          height={68}
          class="hidden lg:block h-[68px]"
        />
      </div>
      <TsExpertCarousel experts={experts} updateExpertId={setExpertId} />
    </div>
  );
};

export const loader = (props: ExpertProps, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};

export default TsExperts;
