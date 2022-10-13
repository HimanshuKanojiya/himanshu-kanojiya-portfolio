import { useState, useLayoutEffect } from "react";

export const useMediaQuery = (mediaQuery: string) => {
  const [match, setMatches] = useState<boolean>(false);

  useLayoutEffect(() => {
    const mediaQueryHandler = () => {
      const media = window.matchMedia(mediaQuery);
      if (media.matches !== match) return setMatches(media.matches);
    };

    window.addEventListener("resize", mediaQueryHandler);
    mediaQueryHandler();

    return () => window.removeEventListener("resize", mediaQueryHandler);
  }, [match, mediaQuery]);

  return match;
};
