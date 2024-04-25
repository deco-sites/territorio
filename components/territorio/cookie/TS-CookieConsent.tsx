import { useId } from "../../../sdk/useId.ts";

const script = (id: string) => {
  const callback = () => {
    const KEY = "store-cookie-consent";
    const ACCEPTED = "accepted";
    const HIDDEN = "translate-y-[200%]";

    const consent = localStorage.getItem(KEY);
    const elem = document.getElementById(id);

    if (consent !== ACCEPTED && elem) {
      const accept = elem.querySelector("[data-button-cc-accept]");
      accept &&
        accept.addEventListener("click", () => {
          localStorage.setItem(KEY, ACCEPTED);
          elem.classList.add(HIDDEN);
        });
      const close = elem.querySelector("[data-button-cc-close]");
      close &&
        close.addEventListener("click", () => elem.classList.add(HIDDEN));
      elem.classList.remove(HIDDEN);
    }
  };

  addEventListener("scroll", callback, { once: true });
};

export interface Props {
  title?: string;
  /** @format html */
  text?: string;
  buttons?: {
    allowTextButton: string;
  };
  layout?: {
    position?: "Expanded" | "Left" | "Center" | "Right";
    content?: "Tiled" | "Piled up";
  };
}

const DEFAULT_PROPS = {
  title: null,
  text:
    'Utilizamos cookies para garantir que você tenha uma melhor experiência em nosso site. <br>Ao continuar navegando você concorda com a nossa <a class="underline transition-all duration-300" href="../../../politica-de-privacidade" target="_blank" rel="noopener noreferrer">pol&iacute;tica de privacidade</a> e com nossos <a class="underline transition-all duration-300" href="../../../termos-de-uso" target="_blank" rel="noopener noreferrer">termos de uso</a>.',
  buttons: {
    allowTextButton: "Aceitar",
  },
  layout: {
    position: "Expanded",
    content: "Tiled",
  },
};

function CookieConsent(props: Props) {
  const id = useId();
  const { title, text, buttons, layout } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <>
      <div
        id={id}
        class={`
          transform-gpu translate-y-[200%] transition fixed bottom-0 lg:bottom-2 w-screen z-50 lg:flex
          ${layout?.position === "Left" ? "lg:justify-start" : ""}
          ${layout?.position === "Center" ? "lg:justify-center" : ""}
          ${layout?.position === "Right" ? "lg:justify-end" : ""}
        `}
      >
        <div
          class={`
          p-4 mx-4 my-2 flex flex-col gap-4 shadow bg-base-100 rounded border border-base-200 
          ${
            !layout?.position || layout?.position === "Expanded"
              ? "lg:container lg:mx-auto lg:max-w-[80%]"
              : `
            ${layout?.content === "Piled up" ? "lg:w-[480px]" : ""}
            ${
                !layout?.content || layout?.content === "Tiled"
                  ? "lg:w-[520px]"
                  : ""
              }
          `
          }
          ${
            !layout?.content || layout?.content === "Tiled"
              ? "lg:flex-row lg:items-center"
              : ""
          }
          
        `}
        >
          <div
            class={`flex-auto flex flex-col gap-4 ${
              !layout?.content || layout?.content === "Tiled" ? "lg:gap-2" : ""
            }`}
          >
            {title && <h3 class="text-xl">{title}</h3>}
            <div
              class="text-sm font-body"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>

          <div
            class={`flex flex-col gap-2 ${
              !layout?.position || layout?.position === "Expanded"
                ? "lg:flex-row"
                : ""
            }`}
          >
            <button
              class="btn bg-accent-content text-white border-0 cursor-pointer lg:w-48"
              data-button-cc-accept
            >
              {buttons.allowTextButton}
            </button>
          </div>
        </div>
      </div>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${script})("${id}");` }}
      />
    </>
  );
}

export default CookieConsent;
