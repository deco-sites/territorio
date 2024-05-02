import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx";
import Icon from "deco-sites/territorio/components/ui/Icon.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import { JSX } from "preact";

/** @titleBy title */
interface CursoAccordionItem {
  title: string;
  /** @format textarea */
  description: string;
}

export interface TsCursoAccordionProps {
  items: CursoAccordionItem[];
  /** @ignore */
  name: string;
  containerClass?: string | JSX.SignalLike<string | undefined>;
}

export default function TsCursoAccordion({
  items,
  name,
  containerClass,
}: TsCursoAccordionProps) {
  return items.length > 0
    ? (
      <div class={clx("", containerClass as string)}>
        {items.map(({ title, description }, index) => {
          return (
            <div className="collapse text-white border-t border-accent-content rounded-none relative">
              <input
                className="peer"
                type="radio"
                name={name}
                defaultChecked={index === 0}
              />
              <div className="collapse-title">
                <TsTypography variant="h4" class="hidden md:block" type="body">
                  {title}
                </TsTypography>
                <TsTypography variant="p" class="text-sm md:hidden" type="body">
                  {title}
                </TsTypography>
              </div>
              <div className="absolute top-0 md:top-4 right-4 md:right-8 peer-checked:block peer-[:not(:checked)]:hidden">
                <Icon
                  id="CustomArrowUp"
                  class="invisible md:visible"
                  size={18}
                />
                <Icon id="CustomArrowUp" class="md:invisible" size={9} />
              </div>
              <div className="absolute top-0 md:top-4 right-4 md:right-8 peer-checked:hidden peer-[:not(:checked)]:block">
                <Icon
                  id="CustomArrowDown"
                  class="invisible md:visible"
                  size={20}
                />
                <Icon id="CustomArrowDown" class="md:invisible" size={10} />
              </div>
              <div className="collapse-content">
                <TsTypography
                  class="text-sm md:text-lg"
                  weight="400"
                  type="body"
                >
                  {description}
                </TsTypography>
              </div>
            </div>
          );
        })}
      </div>
    )
    : null;
}
