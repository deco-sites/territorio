import Button from "deco-sites/territorio/components/territorio/button/TS-Button.tsx";
import HamburgerIcon from "deco-sites/territorio/static/image/hamburger.tsx";
import type { ComponentChildren } from "preact";
import { Suspense } from "preact/compat";

type Props = {
  onClose?: () => void;
  children: ComponentChildren;
};

const TsMenu = ({ onClose, children }: Props) => (
  <div class="bg-accent-content rounded-2xl absolute top-[27px] w-[100vw] h-fit pt-8 pr-8">
    <div class="flex justify-end mb-2">
      {onClose && (
        <Button
          aria-label="menu-toggle"
          class="btn btn-ghost"
          onClick={onClose}
        >
          <HamburgerIcon />
        </Button>
      )}
    </div>
    <Suspense
      fallback={
        <div class="w-screen flex items-center justify-center">
          <span class="loading loading-ring" />
        </div>
      }
    >
      {children}
    </Suspense>
  </div>
);

export default TsMenu;
