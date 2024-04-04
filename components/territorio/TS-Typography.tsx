import {
  ComplementaryColors,
  ThemeColors,
} from "deco-sites/territorio/sections/Theme/Theme.tsx";

type TypographyTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "caption"
  | "p"
  | "label"
  | "span";

type TypographySize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

type TypographyType = "title" | "body";

type TypographyWeight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type TypographyProps = {
  as?: TypographyTag;
  type?: TypographyType;
  size?: TypographySize;
  color?: keyof ThemeColors | keyof ComplementaryColors;
  weight?: TypographyWeight;
  variant?: TypographyTag;
  truncate?: boolean;
  customClass?: string;
  children: string;
};

const VARIANT_CLASSES: Record<TypographyTag, string> = {
  h1: " text-4xl font-bold",
  h2: " text-3xl font-bold",
  h3: " text-2xl font-bold",
  h4: " text-xl font-bold",
  h5: " text-lg font-bold",
  h6: " text-base font-bold",
  caption: " text-xs font-normal",
  label: " text-sm font-bold uppercase tracking-wider",
  p: " text-base font-normal leading-normal",
  span: "",
};

const WEIGHT_CLASS: Record<TypographyWeight, string> = {
  100: " font-thin",
  200: " font-extralight",
  300: " font-light",
  400: " font-normal",
  500: " font-medium",
  600: " font-semibold",
  700: " font-bold",
  800: " font-extrabold",
  900: " font-black",
};

const TsTypography = ({
  as,
  type = "body",
  size = "base",
  color = "primary",
  weight = "400",
  variant,
  truncate,
  customClass = "",
  children,
}: TypographyProps) => {
  let classes = type === "body" ? "font-body" : "font-title";
  classes += VARIANT_CLASSES[variant || "span"];
  classes += !variant ? ` text-${size}` : "";
  classes += !variant ? WEIGHT_CLASS[weight] : "";
  classes += ` text-${color}`;
  classes += truncate ? " truncate" : "";

  const Tag = as || variant || "span";

  return <Tag class={classes + " " + customClass}>{children}</Tag>;
};

export default TsTypography;
