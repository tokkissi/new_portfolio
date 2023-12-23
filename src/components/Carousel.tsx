"use client";

import React from "react";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  return (
    <div
      className="relative w-full h-[17rem] overflow-hidden mt-2 mb-4 select-none"
      style={{
        perspective: `600px`,
        transformStyle: `preserve-3d`,
      }}
    >
      {active > 0 && (
        <button
          className="absolute top-1/2 -translate-y-1/2 z-30 cursor-pointer select-none"
          style={{
            transform: `translateX(130%) translatey(-80%)`,
          }}
          onClick={() => setActive((i) => i - 1)}
        >
          <IoIosArrowBack className="hover:text-yellow-200 text-6xl" />
        </button>
      )}
      {React.Children.map(children, (child, i) => {
        const isActive = i === active;
        return (
          <div
            className="absolute w-full h-full transition-all duration-300 ease-out select-none"
            style={{
              transform: `rotateY(${(active - i) * 30}deg) scaleY(${
                1 + Math.abs(active - i) * -0.2
              }) translateZ(${Math.abs(active - i) * -30}rem) translateX(${
                Math.sign(active - i) * -3
              }rem)`,
              filter: `blur(${Math.abs(active - i)}rem)`,
              zIndex: isActive ? 25 : 20 - Math.abs(active - i),
            }}
          >
            {child}
          </div>
        );
      })}
      {active < count - 1 && (
        <button
          className="absolute top-1/2 -translate-y-1/2 right-0 z-30 cursor-pointer select-none"
          style={{
            transform: `translateX(-130%) translatey(-80%)`,
          }}
          onClick={() => setActive((i) => i + 1)}
        >
          <IoIosArrowForward className="hover:text-yellow-200 text-6xl" />
        </button>
      )}
    </div>
  );
}
