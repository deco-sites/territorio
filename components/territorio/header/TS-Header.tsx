import { SiteNavigationElement } from "apps/commerce/types.ts";
import type { SectionProps } from "deco/types.ts";
import { AppContext } from "../../../apps/site.ts";
import Dropdown from "../../../islands/territorio/TS-Dropdown.tsx";
import type { ButtonType, ImageType } from "../types.ts";
import TsNavbar from "./TS-Navbar.tsx";

export interface HeaderProps {
  /** @title Logo */
  logo?: ImageType;

  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: SiteNavigationElement[];

  /** @title Buttons */
  buttons?: ButtonType[];
}

function Header({
  navItems = [],
  logo,
  buttons = [],
}: SectionProps<typeof loader>) {
  return (
    <header class="flex ts-responsive justify-center items-start fixed w-full z-50 pointer-events-none h-[16rem] header-gradient">
      <Dropdown menu={{ items: [...buttons, ...navItems] }}>
        <TsNavbar items={navItems} logo={logo} buttons={buttons} />
      </Dropdown>
    </header>
  );
}

export const loader = (props: HeaderProps, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};

export default Header;
