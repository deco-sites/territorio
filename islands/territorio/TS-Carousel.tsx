import { ForwardedRef, forwardRef } from "preact/compat";
import type { Props } from "../../components/territorio/carousel/TS-Carousel-Island.tsx";
import Component from "../../components/territorio/carousel/TS-Carousel-Island.tsx";

const Island = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return <Component ref={ref} {...props} />;
});

export default Island;
