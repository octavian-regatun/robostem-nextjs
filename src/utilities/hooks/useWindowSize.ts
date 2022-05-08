import { useState, useEffect } from "react";

interface WindowsSize {
  width?: number;
  height?: number;
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowsSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = function () {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}
