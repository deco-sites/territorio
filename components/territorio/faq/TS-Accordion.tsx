import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx";
import Icon, {
  AvailableIcons,
} from "deco-sites/territorio/components/ui/Icon.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import { JSX } from "preact";

export interface Props {
  children: AccordionChild | AccordionChild[];
  /** @ignore */
  name: string;
  radio?: boolean;
  defaultCheckedFirst?: boolean;
  icon?: {
    expand: AvailableIcons;
    collapse: AvailableIcons;
  };
}

/** @title {{{title}}} */
interface AccordionChild {
  title: string | JSX.Element;
  /** @format textarea */
  subtitle: string | JSX.Element;
  class?: string;
  withBorder?: boolean;
}

export default function TSAccordion({
  children: childrenProp,
  name,
  radio = true,
  defaultCheckedFirst = true,
  icon = {
    expand: "CustomArrowDown",
    collapse: "CustomArrowUp",
  },
}: Props) {
  const children = Array.isArray(childrenProp) ? childrenProp : [childrenProp];

  return (
    <>
      {children.map(
        ({ title, subtitle, class: className, withBorder = true }, index) => {
          return (
            <div
              className={clx(
                "collapse text-white rounded-none relative",
                withBorder && "border-t border-accent-content",
                className,
              )}
            >
              <input
                className="peer"
                type={radio ? "radio" : "checkbox"}
                name={name}
                defaultChecked={defaultCheckedFirst && index === 0}
              />
              <div className="flex justify-between relative collapse-title group py-7 px-0">
                <TsTypography
                  class="text-[14px] sm:text-2xl font-bold w-[85%]"
                  type="body"
                >
                  {title}
                </TsTypography>
                <div
                  className={clx(
                    "peer-checked:group-[]:block peer-[:not(:checked)]:group-[]:hidden mt-1",
                  )}
                >
                  <Icon
                    id={icon.expand}
                    class="hidden md:inline-block"
                    size={18}
                  />
                  <Icon id={icon.expand} class="md:hidden" size={14} />
                </div>
                <div
                  className={clx(
                    "peer-checked:group-[]:hidden peer-[:not(:checked)]:group-[]:block mt-1",
                  )}
                >
                  <Icon
                    id={icon.collapse}
                    class="hidden md:inline-block"
                    size={16}
                  />
                  <Icon id={icon.collapse} class="md:hidden" size={12} />
                </div>
              </div>
              <div className="collapse-content pl-0">
                <div class="pb-6 w-[90%]">
                  <TsTypography class="text-2xl" weight="400" type="body">
                    {subtitle}
                  </TsTypography>
                </div>
              </div>
            </div>
          );
        },
      )}
    </>
  );
}
