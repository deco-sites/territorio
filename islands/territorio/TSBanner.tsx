import { useTsCarrousel } from "../../hooks/useTsCarrousel.tsx";

export default function Island() {
  const { visibleItems, onNext, onPrevious } = useTsCarrousel({
    items: [
      { title: "image1" },
      { title: "image2" },
      { title: "image3" },
      { title: "image4" },
      { title: "image5" },
    ],
    visibleItemsCountParam: 1,
    autoChangeDelay: 6000,
  });

  return (
    <div class="w-full h-8 flex items-center justify-between">
      <button onClick={() => onPrevious()}>prev</button>
      {visibleItems.map((item) => <p>{item.title}</p>)}
      <button onClick={() => onNext()}>next</button>
    </div>
  );
}
