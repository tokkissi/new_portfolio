"use client";

import Image from "next/image";
import { useZustandStore } from "@/zustand/useZustandStore";
import style from "./SkillToggleButton.module.css";
import useDeviceType from "@/app/hooks/useDeviceType";

export default function SkillToggleButton() {
  const { isSkillCardFolded, toggleSkillCardFold } = useZustandStore();

  const toggle = () => {
    toggleSkillCardFold();
  };
  return (
    <div
      className={`${style.container}  ${isSkillCardFolded ? `day` : `night`}`}
      onClick={toggle}
    >
      <Image
        className={`${style.dayImage} ${
          isSkillCardFolded ? "opacity-100" : "opacity-0"
        }`}
        src="/day.svg"
        alt="카드 접기"
        width={100}
        height={100}
      />
      <Image
        className={`${style.nightImage} ${
          isSkillCardFolded ? "opacity-0" : "opacity-100"
        }`}
        src="/night.svg"
        alt="카드 펼치기"
        width={100}
        height={100}
      />
      <div
        className={`${style.circle} ${
          isSkillCardFolded ? "left-1" : "translate-x-[48px]"
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
