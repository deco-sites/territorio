import Image from "apps/website/components/Image.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import { JSX } from "preact";
import { BasicImage } from "../../types.ts";
import TsTypography from "../../typography/TS-Typography.tsx";

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
  image: BasicImage;
  classes: AccordionItemClass[];
}

export interface TsCursoAccordionProps {
  /** @ignore */
  name: string;
  modules: Modules;
  containerClass?: string | JSX.SignalLike<string | undefined>;
}

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
        {items.map(({ title, subtitle, image, classes }, index) => {
          return (
            <li
              key={title}
              class="collapse text-white border rounded-none border-base-100"
            >
              <input
                class="peer"
                type="radio"
                name={name}
                defaultChecked={index === 0}
              />
              <div class="collapse-title flex p-0 peer-checked:h-full peer-[:not(:checked)]:h-[14.25rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={456}
                  height={634}
                  class="object-cover self-start"
                />
                <div class="flex flex-col mt-20 mb-14">
                  <div class="flex flex-col text-[2.625rem] leading-none pl-20">
                    <Image
                      src={decorator.src}
                      alt={decorator.alt}
                      width={40}
                      height={40}
                      class="absolute -ml-10 -mt-10"
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
                      <li
                        key={item.title}
                        class="flex flex-col text-xl text-base-100 pl-20 border-t-[1px] pt-5 first:pt-0 border-base-100 first:border-0"
                      >
                        <Image
                          src={classIcon.src}
                          alt={classIcon.alt}
                          width={22}
                          height={22}
                          class="absolute -ml-8 mt-1"
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
        })}
      </ul>
    )
    : null;
}
