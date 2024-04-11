import type { SiteNavigationElementLeaf } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { MenuButton } from "../../../islands/territorio/TS-HeaderButton.tsx";
import Button, { ButtonProps } from "../button/TS-Button.tsx";
import type { ButtonType, ImageType } from "../types.ts";
import NavItem from "./TS-NavItem.tsx";

export type NavbarProps = {
  logo?: ImageType;
  items: SiteNavigationElementLeaf[];
  buttons?: ButtonType[];
};

const LOGO_ARIA_LABEL = "Logo Território Saber";

// Make it sure to render it on the server only. DO NOT render it on an island
function TsNavbar({ items, logo, buttons }: NavbarProps) {
  return (
    <div class="flex justify-center">
      {/* Mobile header */}
      <div class="md:hidden flex justify-between items-center w-full sm:pt-4 px-11 gap-4 pointer-events-auto">
        {logo && (
          <a class="block" href={logo.url || "/"} aria-label={LOGO_ARIA_LABEL}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 104}
              height={logo.height || 26}
            />
          </a>
        )}
        <MenuButton />
      </div>
      {/* Desktop header */}
      <div class="hidden md:flex justify-between items-center w-full max-w-[1200px] md:pt-6 xl:pt-10 px-8 xl:px-0 pointer-events-auto">
        {logo && (
          <a class="block" href={logo.url || "/"} aria-label={LOGO_ARIA_LABEL}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 200}
              height={logo.height || 48}
            />
          </a>
        )}
        <ul class="flex justify-center items-center gap-4 xl:gap-10">
          {items.map((item) => <NavItem key={item.url} item={item} />)}
          {buttons?.map((button) => (
            <a key={button.name} href={button.url}>
              <Button
                class="bg-accent-content px-4 xl:px-6 py-1 xl:py-2 text-[16px] xl:text-[20px]"
                icon={button.icon as ButtonProps["icon"]}
              >
                {button.name}
              </Button>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TsNavbar;
