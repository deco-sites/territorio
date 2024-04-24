import { useSignal } from "@preact/signals";
import { invoke } from "deco-sites/territorio/runtime.ts";
import { JSX } from "preact";
import TsButton from "../button/TS-Button.tsx";
import TsLink from "../link/TS-Link.tsx";
import TsTypography from "../typography/TS-Typography.tsx";

export interface Props {
  title?: string;
  description?: string;
  /** @description Placeholder for email input */
  placeholder?: string;
  buttonText?: string;
  privacyPolicyPreviousText?: string;
  /** @format url */
  privacyPolicyUrl?: string;
  privacyPolicyLinkText?: string;
}

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function TsNewsletter({
  title = "Assine nossa Newsletter",
  description =
    "Conheça as novidades em territórios, experts, formações e conteúdos qualificados para a sua evolução profissional e pessoal.",
  placeholder = "Digite seu e-mail",
  buttonText = "Inscrever",
  privacyPolicyUrl = "",
  privacyPolicyPreviousText = "Ao se inscrever, você está aceitando nossa",
  privacyPolicyLinkText = "Política de Privacidade",
}: Props) {
  const loading = useSignal(false);
  const feedbackMsg = useSignal<string | null>(null);
  const isError = useSignal(false);
  const submitted = useSignal(false);

  const validateEmail = (email: string) => {
    feedbackMsg.value = null;
    isError.value = false;

    if (!submitted.value) return;

    const valid = EMAIL_REGEX.test(email);

    if (!valid) {
      isError.value = true;
      feedbackMsg.value = "E-mail inválido";
    }

    return valid;
  };

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    submitted.value = true;

    try {
      loading.value = true;

      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;

      const valid = validateEmail(email);
      if (!valid) {
        loading.value = false;
        return;
      }

      await invoke["deco-sites/territorio"].actions.RdStation({ email });

      feedbackMsg.value = "E-mail cadastrado com sucesso";
    } catch {
      feedbackMsg.value = "Ocorreu um erro ao se cadastrar. Tente novamente";
    } finally {
      submitted.value = false;
      loading.value = false;
    }
  };

  return (
    <div class="w-full px-8">
      <div class="ts-section my-10 p-8 rounded-xl border border-[#BA7DFE]">
        <div class="flex flex-col gap-8">
          <TsTypography class="text-4xl">{title}</TsTypography>
          <TsTypography type="body" class="text-xl">
            {description}
          </TsTypography>
        </div>

        <form class="w-full flex gap-4 mt-7" onSubmit={handleSubmit}>
          <input
            class="rounded-xl py-2 px-8 border border-[#BA7DFE] text-2xl w-full !leading-normal placeholder:font-body placeholder:text-[#23282D] text-[#23282D]"
            name="email"
            placeholder={placeholder}
            onChange={(e) => {
              validateEmail(e.currentTarget.value);
            }}
          />
          <TsButton
            variant="primary"
            class="py-2 rounded-xl px-8 text-2xl !leading-normal"
            type="submit"
            loading={loading.value}
          >
            {buttonText}
          </TsButton>
        </form>
        {feedbackMsg.value && (
          <TsTypography
            as="p"
            data-error={isError.value}
            class="mt-2 data-[error=false]:text-green-700 data-[error=true]:text-red-600 text-center"
          >
            {feedbackMsg.value}
          </TsTypography>
        )}

        <TsTypography as="p" class="mt-9 text-center text-lg">
          {privacyPolicyPreviousText}{" "}
          <TsLink to={privacyPolicyUrl} class="underline">
            {privacyPolicyLinkText}
          </TsLink>
          .
        </TsTypography>
      </div>
    </div>
  );
}