import { useUI } from "deco-sites/territorio/sdk/useUI.ts";
import HamburgerIcon from "deco-sites/territorio/static/image/hamburger.tsx";
import Button from "../../../components/ui/Button.tsx";

export default function TsMenuButton() {
  const { displayMenu } = useUI();
  return (
    <Button
      class="md:hidden btn btn-circle md:btn-sm btn-lg btn-ghost p-0"
      aria-label="open menu"
      onClick={() => {
        displayMenu.value = !displayMenu.value;
      }}
    >
      <HamburgerIcon />
    </Button>
  );
}
