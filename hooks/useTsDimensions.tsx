import { signal } from "@preact/signals";
import { useEffect } from "preact/compat";

function getWindowDimensions() {
  if (!window) {
    return {
      width: 0,
      height: 0,
    };
  }
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const windowDimensions = signal(getWindowDimensions());

export default function useTsDimensions() {
  useEffect(() => {
    function handleResize() {
      windowDimensions.value = getWindowDimensions();
    }
    if (window) {
      globalThis.addEventListener("resize", handleResize);
      return () => globalThis.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions.value;
}
