import type { ComponentChildren } from "preact";
import Drawer from "../../../components/ui/Drawer.tsx";
import { useUI } from "../../../sdk/useUI.ts";
import TsLink from "../link/TS-Link.tsx";
import TsMenu from "./TS-Menu.tsx";

export interface Props {
  menu: {
    items: { name?: string; url?: string }[];
  };
  /**
   * @ignore_gen true
   */
  children?: ComponentChildren;
}

function TsDropdown({ menu, children }: Props) {
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
        >
          {displayMenu.value && (
            <ul class="flex flex-col gap-y-6 px-5 pb-4">
              {menu?.items.map((item) => (
                <li key={item.name}>
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
        </TsMenu>
      )}
    >
      {children}
    </Drawer>
  );
}

export default TsDropdown;
