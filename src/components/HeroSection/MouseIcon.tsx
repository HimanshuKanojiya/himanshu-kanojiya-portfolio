"use client";

import { FC, useEffect, useRef } from "react";

import { MouseIconContainer } from "./styles/HeroSectionContainer";

export const MouseIcon: FC = () => {
  const mouseRef = useRef<SVGPathElement | null>(null);

  const mouseLineScroller = () => {
    if (!mouseRef.current) return;

    if (window.scrollY > 2) {
      mouseRef.current.style.transition = "transform 250ms ease-in";
      mouseRef.current.style.transform = "translateY(4px)";
      return;
    }

    mouseRef.current.style.transform = "translateY(0)";
  };

  useEffect(() => {
    window.addEventListener("scroll", mouseLineScroller);

    return () => {
      window.removeEventListener("scroll", mouseLineScroller);
    };
  }, []);

  return (
    <MouseIconContainer>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 15C10 12.3478 11.0536 9.8043 12.9289 7.92893C14.8043 6.05357 17.3478 5 20 5C22.6522 5 25.1957 6.05357 27.0711 7.92893C28.9464 9.8043 30 12.3478 30 15V25C30 27.6522 28.9464 30.1957 27.0711 32.0711C25.1957 33.9464 22.6522 35 20 35C17.3478 35 14.8043 33.9464 12.9289 32.0711C11.0536 30.1957 10 27.6522 10 25V15Z"
          stroke="#E5E5FF"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M20 11.6666V18.3333"
          stroke="#2ff2f0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mouse-line"
          ref={mouseRef}
        />
      </svg>
      <p>Scroll down</p>
    </MouseIconContainer>
  );
};
