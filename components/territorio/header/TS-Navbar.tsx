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
      <div class="flex justify-between items-center gap-4 w-full max-w-[75rem] pt-10 px-8 sm:px-32 md:px-8 lg:px-0 pointer-events-auto">
        {logo && (
          <a class="block" href={logo.url} aria-label={LOGO_ARIA_LABEL}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 200}
              height={logo.height || 48}
              class="w-[12.5rem] h-[3rem]"
            />
          </a>
        )}
        {/* Mobile header items */}
        <MenuButton />
        {/* Desktop header items */}
        <ul class="hidden md:flex justify-center items-center gap-10">
          {items.map((item) => <NavItem key={item.url} item={item} />)}
          {buttons?.map((button) => (
            <a key={button.name} href={button.url}>
              <Button
                class="bg-accent-content px-6 py-2 text-[1.25rem]"
                icon={button.icon as ButtonProps["icon"]}
                iconClass="w-[2rem] h-[2rem]"
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
