"use client";

import { useState } from "react";
import Image from "next/image";
import { useZustandStore } from "@/zustand/useZustandStore";

export default function SkillToggleButton() {
  const { isSkillCardFolded, toggleSkillCardFold } = useZustandStore();

  const toggle = () => {
    toggleSkillCardFold();
  };
  return (
    <div
      className={`${
        isSkillCardFolded ? `day` : `night`
      } relative w-36 h-16 rounded-full cursor-pointer`}
      style={{
        boxShadow: "inset 0 2px 4px 0 #45474B",
      }}
      onClick={toggle}
    >
      <Image
        className={`${
          isSkillCardFolded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 absolute -z-10`}
        src="/day.svg"
        alt="카드 접기"
        width={150}
        height={150}
      />
      <Image
        className={`${
          isSkillCardFolded ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500 absolute -z-10`}
        src="/night.svg"
        alt="카드 펼치기"
        width={150}
        height={150}
      />
      <div
        className={`absolute w-14 h-14 rounded-full top-[5px] transition-all duration-500 ${
          isSkillCardFolded ? "left-1" : "translate-x-[84px]"
        } bg-gradient-to-br ${
          isSkillCardFolded
            ? "from-yellow-300 to-white"
            : "from-white to-gray-400"
        }`}
        style={{
          boxShadow: `${
            isSkillCardFolded ? "1px 2px 4px #45474B" : "-1px 2px 4px black"
          }`,
        }}
      ></div>
    </div>
  );
}
