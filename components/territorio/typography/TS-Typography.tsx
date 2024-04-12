import { clx } from 'deco-sites/territorio/sdk/clx.ts';
import {
  ComplementaryColors,
  ThemeColors,
} from 'deco-sites/territorio/sections/Theme/Theme.tsx';
import type { ComponentChildren, JSX } from 'preact';

type TypographyTag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'caption'
  | 'p'
  | 'label'
  | 'span';

type TypographyType = 'title' | 'body';

type TypographyWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type TypographyProps = {
  as?: TypographyTag;
  type?: TypographyType;
  size?: string;
  color?: keyof ThemeColors | keyof ComplementaryColors;
  weight?: TypographyWeight;
  variant?: TypographyTag;
  truncate?: boolean;
  class?: string | JSX.SignalLike<string | undefined>;
  shadow?: boolean;
  children: ComponentChildren;
};

const VARIANT_CLASSES: Record<TypographyTag, string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-xl font-bold',
  h5: 'text-lg font-bold',
  h6: 'text-base font-bold',
  caption: 'text-xs font-normal',
  label: 'text-sm font-bold uppercase tracking-wider',
  p: 'text-base font-normal leading-normal',
  span: '',
};

const WEIGHT_CLASS: Record<TypographyWeight, string> = {
  100: 'font-thin',
  200: 'font-extralight',
  300: 'font-light',
  400: 'font-normal',
  500: 'font-medium',
  600: 'font-semibold',
  700: 'font-bold',
  800: 'font-extrabold',
  900: 'font-black',
};

const TsTypography = ({
  as,
  type,
  size,
  color,
  weight,
  variant,
  truncate,
  shadow,
  class: _class = '',
  children,
}: TypographyProps) => {
  const mergeClasses = () => {
    const typeClass = type === 'body' ? 'font-body' : 'font-title';
    const variantClass = VARIANT_CLASSES[variant || 'span'];
    const weightClass = !variant && weight ? WEIGHT_CLASS[weight] : '';
    const colorClass = color ? ` text-${color}` : '';
    const shadowClass = shadow ? ' drop-shadow-title' : '';
    const truncateClass = truncate ? ' truncate' : '';

    return clx(
      typeClass,
      variantClass,
      weightClass,
      colorClass,
      shadowClass,
      truncateClass,
      _class as string
    );
  };

  const Tag = as || variant || 'span';

  return (
    <Tag class={mergeClasses()} style={{ fontSize: size }}>
      {children}
    </Tag>
  );
};

export default TsTypography;
