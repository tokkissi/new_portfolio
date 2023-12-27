"use client";

import Image from "next/image";
import style from "./TiltableSkillCard.module.css";
import React, { useRef } from "react";
import { useZustandStore } from "@/zustand/useZustandStore";
import { SkillData } from "@/model/types";

type TiltableSkillCardProps = {
  data?: SkillData;
};

export default function TiltableSkillCard({ data }: TiltableSkillCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const { selectedSkill } = useZustandStore();

  const skillData = data || selectedSkill;

  const handleMouseMove = (e: React.PointerEvent) => {
    // 카드에 마우스 오버로 이동 시, 마우스의 위치에 영향을 받아 움직이는 선형 그라데이션 광택 효과를 구현
    if (containerRef.current && overlayRef.current) {
      const { offsetX, offsetY } = e.nativeEvent;
      const rotateY = (5 / 36) * offsetX - 20;
      const rotateX = (5 / 48) * offsetY - 20;

      containerRef.current.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      overlayRef.current.style.backgroundPosition = `${
        offsetX / 5 + offsetY / 5
      }%`;

      overlayRef.current.style.filter = "opacity(0.8)";
    }
  };

  const handleMouseOut = (e: React.MouseEvent) => {
    // 마우스가 카드에서 나가면 오버레이에 적용한 광택을 보이지 않게 하고, 카드 회전을 초기화함
    if (containerRef.current && overlayRef.current) {
      overlayRef.current.style.filter = "opacity(0)";
      containerRef.current.style.transform =
        "perspective(350px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${style.container}`}
      onPointerMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      {/* 광택 효과를 주기 위한 레이아웃 */}
      <div ref={overlayRef} className={style.overlay}></div>

      {/* 카드 내부 이미지 및 텍스트 컨테이너 */}
      <div
        className="w-64 h-96 flex flex-col items-center rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, rgba(100,100,100,1) 0%, rgba(160,160,160,1) 15%,rgba(254,254,254,1) 60%, rgba(254,254,254,1) 100%",
        }}
      >
        {/* 카드 상단의 기술 스킬 분류. 기술에 맞는 분류에 색을 진하게 함 */}
        <div className="absolute pt-1 px-2 w-full font-bold text-sm flex justify-between">
          <span
            className={`${
              skillData.category === "framework"
                ? "text-black/90"
                : "text-black/20"
            }`}
          >
            Framwork
          </span>
          <span
            className={`${
              skillData.category === "etc" ? "text-black/90" : "text-black/20"
            }`}
          >
            Lib/ETC
          </span>
          <span
            className={`${
              skillData.category === "lang" ? "text-black/90" : "text-black/20"
            }`}
          >
            Language
          </span>
        </div>

        {/* 카드 내부의 기술 이미지 */}
        <div
          className="p-2 mt-16 rounded-full"
          style={{
            background:
              "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
          }}
        >
          <Image
            className="rounded-full border-8 border-double"
            src={skillData.image}
            alt={skillData.skillName}
            width={120}
            height={120}
          />
        </div>

        {/* 카드 내부의 기술 상세 텍스트 */}
        <div className="px-4 flex flex-col justify-center items-center mt-6">
          <p className="text-2xl font-bold whitespace-nowrap text-black">
            {skillData.skillName}
          </p>

          {/* 제목과 상세내용 사이의 구분선 */}
          <div className="relative w-44 h-1 border-b-2 border-gray-300 mt-6 mb-4">
            <div className="absolute left-0 top-0 rounded-full  bg-gray-300 w-[0.35rem] h-[0.35rem]"></div>
            <div className="absolute right-0 top-0 rounded-full  bg-gray-300 w-[0.35rem] h-[0.35rem]"></div>
          </div>

          <p className="text-sm text-black/90">{skillData.description}</p>
        </div>
      </div>
    </div>
  );
}
