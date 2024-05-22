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
  iconPosition?: "top" | "bottom";
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
  iconPosition = "top",
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
              <div className="relative collapse-title group">
                <TsTypography variant="h4" class="hidden md:block" type="body">
                  {title}
                </TsTypography>
                <TsTypography variant="p" class="text-lg md:hidden" type="body">
                  {title}
                </TsTypography>
                <div
                  className={clx(
                    "absolute right-4 md:right-8 peer-checked:group-[]:block peer-[:not(:checked)]:group-[]:hidden",
                    iconPosition === "bottom"
                      ? "bottom-0 md:bottom-4"
                      : "top-0 md:top-4",
                  )}
                >
                  <Icon
                    id={icon.collapse}
                    class="invisible md:visible"
                    size={18}
                  />
                  <Icon id={icon.collapse} class="md:invisible" size={9} />
                </div>
                <div
                  className={clx(
                    "absolute right-4 md:right-8 peer-checked:group-[]:hidden peer-[:not(:checked)]:group-[]:block",
                    iconPosition === "bottom"
                      ? "bottom-0 md:bottom-4"
                      : "top-0 md:top-4",
                  )}
                >
                  <Icon
                    id={icon.expand}
                    class="invisible md:visible"
                    size={20}
                  />
                  <Icon id={icon.expand} class="md:invisible" size={10} />
                </div>
              </div>
              <div className="collapse-content">
                <TsTypography
                  class="text-lg sm:text-sm md:text-lg"
                  weight="400"
                  type="body"
                >
                  {subtitle}
                </TsTypography>
              </div>
            </div>
          );
        },
      )}
    </>
  );
}
