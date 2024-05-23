import { useEffect, useState } from "preact/compat";
import useTsDimensions from "deco-sites/territorio/hooks/useTsDimensions.tsx";

export default function useTsIsMobile() {
  const { width } = useTsDimensions();
  const [isMobile, setIsMobile] = useState(width < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(width < 640);
    };

    if (window) {
      globalThis.addEventListener("resize", handleResize);
      return () => globalThis.removeEventListener("resize", handleResize);
    }
  }, []);

  return isMobile;
}
