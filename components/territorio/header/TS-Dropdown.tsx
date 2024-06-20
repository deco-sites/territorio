import type { ComponentChildren } from "preact";
import Button, { ButtonProps } from "../button/TS-Button.tsx";
import Drawer from "../../../components/ui/Drawer.tsx";
import { useUI } from "../../../sdk/useUI.ts";
import TsLink from "../link/TS-Link.tsx";
import TsMenu from "./TS-Menu.tsx";

export interface Props {
  menu: {
    items: { name?: string; url?: string }[];
  };

  buttons: ButtonType[];

  logo: {
    src?: string;
    alt?: string;
    url?: string;
    width?: number;
    height?: number;
  };
  
  /**
   * @ignore_gen true
   */
  children?: ComponentChildren;
}

function TsDropdown({ menu, buttons, logo, children }: Props) {
  const { displayMenu } = useUI();

  const handleLinkClick = () => {
    displayMenu.value = false;
  };

  return (
    <Drawer
      open={displayMenu.value}
      onClose={() => {
        displayMenu.value = false;
      }}
      aside={displayMenu.value && (
        <TsMenu
          onClose={() => {
            displayMenu.value = false;
          }}
          logo={logo}
        >
          {displayMenu.value && (
            <ul class="flex flex-col gap-y-6 px-5 pb-4">
              {menu?.items.map((item) => (
                <li key={item.name} class="mb-4">
                  <TsLink
                    size="2.2rem"
                    color="base-100"
                    weight="500"
                    type="body"
                    to={item.url}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </TsLink>
                </li>
              ))}
            </ul>
          )}
          {displayMenu.value && (
            <div>
              {buttons?.map((button) => (
                <a key={button.name} href={button.url}>
                  <Button
                    class="flex w-full justify-left bg-accent-content px-6 py-4 pl-[4.5rem] text-[2.5rem]"
                    icon={button.icon as ButtonProps["icon"]}
                    iconClass="w-[4rem] h-[4rem]"
                    divIconClass="gap-x-8"
                  >
                    {button.name}
                  </Button>
                </a>
              ))}
            </div>
          )}
        </TsMenu>
      )}
    >
      {children}
    </Drawer>
  );
}

export default TsDropdown;
