import Button from "deco-sites/territorio/components/territorio/button/TS-Button.tsx";
import Icon from "../../../components/ui/Icon.tsx";
import type { ComponentChildren } from "preact";
import { Suspense } from "preact/compat";

type Props = {
  onClose?: () => void;
  children: ComponentChildren;
};

/* const LOGO_ARIA_LABEL = "Logo Território Saber"; */

const TsMenu = ({ onClose, children }: Props) => (
  <div class="bg-base-200 absolute w-screen h-screen pt-12 pr-[4rem] pl-16">
    <div class="flex mb-16">
      <div class="ml-[0.9rem] justify-left w-full">
        {
          /*   {logo && (
          <a class="block" href={logo.url} aria-label={LOGO_ARIA_LABEL}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 200}
              height={logo.height || 48}
              class="w-[12.5rem] h-[3rem]"
            />
          </a>
        )} */
        }
      </div>
      <div class="justify-end">
        {onClose && (
          <Button
            aria-label="menu-toggle"
            class="btn btn-ghost bg-base-200"
            onClick={onClose}
          >
            <Icon
              class="pl-[0.4rem] pb-4"
              style="color: white"
              size={36}
              id={"Close"}
            />
          </Button>
        )}
      </div>
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
