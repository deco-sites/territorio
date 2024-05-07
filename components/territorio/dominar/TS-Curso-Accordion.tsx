import Image from "apps/website/components/Image.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import { JSX } from "preact";
import Icon from "../../../components/ui/Icon.tsx";
import { BasicImage } from "../types.ts";
import TsTypography from "../typography/TS-Typography.tsx";

export interface Modules {
  decorator: BasicImage;
  classIcon: BasicImage;
  items: CursoAccordionItem[];
}

/** @titleBy title */
interface AccordionItemClass {
  title: string;
  subtitle: string;
}

/** @titleBy title */
export interface CursoAccordionItem {
  title: string;
  /** @format textarea */
  subtitle: string;
  mobileImage: BasicImage;
  desktopImage: BasicImage;
  classes: AccordionItemClass[];
}

export interface TsCursoAccordionProps {
  /** @ignore */
  name: string;
  modules: Modules;
  containerClass?: string | JSX.SignalLike<string | undefined>;
}

interface Variant extends CursoAccordionItem {
  name: TsCursoAccordionProps["name"];
  decorator: TsCursoAccordionProps["modules"]["decorator"];
  classIcon: TsCursoAccordionProps["modules"]["classIcon"];
}

const Desktop = ({
  title,
  subtitle,
  desktopImage,
  classes,
  name,
  classIcon,
  decorator,
}: Variant) => {
  return (
    <li class="hidden sm:collapse text-white border rounded-none border-base-100">
      <input class="peer" type="checkbox" name={name} />
      <div class="collapse-title flex p-0 peer-checked:h-full peer-[:not(:checked)]:h-[14.25rem]">
        <Image
          src={desktopImage.src}
          alt={desktopImage.alt}
          width={456}
          height={634}
          class="object-cover self-start w-[32rem] md:w-[28.5rem]"
        />
        <div class="flex flex-col mt-20">
          <div class="flex flex-col text-[2.625rem] leading-none sm:pl-16 md:pl-20">
            <Image
              src={decorator.src}
              alt={decorator.alt}
              width={40}
              height={40}
              class="absolute -ml-10 -mt-10 w-[2.5rem]"
            />
            <TsTypography type="body" weight="100">
              {title}
            </TsTypography>
            <TsTypography type="body" weight="600">
              {subtitle}
            </TsTypography>
          </div>
          <ul class="flex flex-col gap-y-5 mt-[3.75rem]">
            {classes.map((item) => (
              <li class="flex flex-col text-xl text-base-100 sm:pl-16 md:pl-20 border-t-[1px] pt-5 first:pt-0 border-base-100 first:border-0">
                <Image
                  src={classIcon.src}
                  alt={classIcon.alt}
                  width={22}
                  height={22}
                  class="absolute -ml-8 mt-1 w-[1.375rem]"
                />
                <TsTypography weight="600">{item.title}</TsTypography>
                <TsTypography>{item.subtitle}</TsTypography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

const Mobile = ({
  title,
  subtitle,
  mobileImage,
  classes,
  name,
  classIcon,
  decorator,
}: Variant) => {
  return (
    <li class="collapse sm:hidden text-white rounded-[10px] bg-[#23282D] min-w-[32rem]">
      <input class="peer" type="checkbox" name={name} />
      <div class="collapse-title flex pr-5">
        <Image
          src={mobileImage.src}
          alt={mobileImage.alt}
          width={105}
          height={105}
          class="min-w-[11.625rem] min-h-[11.625rem] max-w-[11.625rem] max-h-[11.625rem]"
        />
        <div class="flex flex-col ml-4 gap-y-5">
          <div class="flex items-center gap-x-2">
            <Image
              src={decorator.src}
              alt={decorator.alt}
              width={19}
              height={19}
              class=""
            />
            <TsTypography type="body" weight="100" class="text-4xl">
              {title}
            </TsTypography>
          </div>
          <TsTypography type="body" weight="600" class="text-4xl">
            {subtitle}
          </TsTypography>
        </div>
      </div>
      <ul class="flex flex-col gap-y-5 peer-checked:mt-2 collapse-content">
        {classes.map((item) => (
          <li class="flex text-xl text-base-100 sm:pl-16 md:pl-20 border-t-[1px] pt-5 first:pt-0 border-base-100 first:border-0">
            <Image
              src={classIcon.src}
              alt={classIcon.alt}
              width={22}
              height={22}
              class="mt-1 w-[1.375rem] h-[1.375rem]"
            />
            <div class="flex flex-col ml-2 text-2xl">
              <TsTypography weight="600">{item.title}</TsTypography>
              <TsTypography>{item.subtitle}</TsTypography>
            </div>
          </li>
        ))}
      </ul>
      <span class="absolute right-3 bottom-3 peer-checked:hidden">
        <Icon size={16} id="More" strokeWidth={1} />
      </span>
      <span class="absolute right-3 bottom-3 peer-[:not(:checked)]:hidden">
        <Icon size={16} id="Less" strokeWidth={1} />
      </span>
    </li>
  );
};

export default function TsCursoAccordion({
  modules: { items, decorator, classIcon },
  name,
  containerClass,
}: TsCursoAccordionProps) {
  return items.length > 0
    ? (
      <ul
        class={clx(
          "flex flex-col gap-y-7 transition-all",
          containerClass as string,
        )}
      >
        {items.map((item) => {
          return (
            <>
              <Mobile
                {...item}
                name={name}
                decorator={decorator}
                classIcon={classIcon}
              />
              <Desktop
                {...item}
                name={name}
                decorator={decorator}
                classIcon={classIcon}
              />
            </>
          );
        })}
      </ul>
    )
    : null;
}
