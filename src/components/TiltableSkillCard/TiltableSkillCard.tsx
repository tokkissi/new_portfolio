"use client";

import Image from "next/image";
import style from "./TiltableSkillCard.module.css";
import React, { useRef } from "react";
import { useZustandStore } from "@/zustand/useZustandStore";
import { SkillData } from "@/model/types";
import { scrollToElementById } from "@/utils/utils";

type TiltableSkillCardProps = {
  data?: SkillData;
};

export default function TiltableSkillCard({ data }: TiltableSkillCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const darkOverlayRef = useRef<HTMLDivElement>(null);

  const { selectedSkill, setSelectedSkill, toggleSkillCardFold } =
    useZustandStore();

  const skillData = data || selectedSkill;
  const isSpread = data ? true : false;

  // 포인터 이벤트는 마우스 이벤트의 기능을 모두 가지고 있음. 또한 마우스 뿐 아니라 모바일과 터치스크린 등의 입력에도 동작함. 그러므로 되도록 모바일에도 지원이 가능한 포인터 이벤트를 사용할 것
  const handleMouseMove = (e: React.PointerEvent) => {
    // 카드에 마우스 오버로 이동 시, 마우스의 위치에 영향을 받아 움직이는 선형 그라데이션 광택 효과를 구현
    if (containerRef.current && overlayRef.current && darkOverlayRef.current) {
      const { offsetX, offsetY } = e.nativeEvent;
      const rotateY = (5 / 36) * offsetX - 20;
      const rotateX = (5 / 48) * offsetY - 20;

      // 원근감과을 추가하고, 마우스 위치에 영향을 받아 회전하도록 함
      containerRef.current.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      if (!isSpread) {
        // 오버레이에 그려진 선형 그라데이션 광택의 위치를 마우스 위치에 영향을 받아 이동시키도록 함
        overlayRef.current.style.backgroundPosition = `${
          offsetX / 5 + offsetY / 5
        }%`;
      }

      if (isSpread) {
        // radial-gradient의 중심 위치 계산
        const backgroundPosX =
          (offsetX / containerRef.current.offsetWidth) * 100;
        const backgroundPosY =
          (offsetY / containerRef.current.offsetHeight) * 100;

        // 다크오버레이 위에서 퍼센트로 계산된 마우스 위치를 (x%, y% 는 위치) 중심으로 원모양의 큰 크기(farthest-side 설정값)의 원형 그라데이션을 오버레이 상에 그리고, 그라데이션 색상을 지정함. [색상 해당색상의 %위치]로 지정하여 디테일하게 위치별 색상 그라데이션이 가능함
        darkOverlayRef.current.style.background = `radial-gradient(circle farthest-side at ${backgroundPosX}% ${backgroundPosY}%, transparent 0%, rgba(170, 170, 170, 1) 80%, rgba(82, 82, 82, 1) 100%)`;
      }

      // mouseOut 으로 투명해진 오버레이를 다시 보이도록 함
      // filter속성의 opacity임. 기본 opacity가 아님. 자식 속성까지 다 영향을 주는게 기본 opacity고, filter의 opacity는 자식을 제외한 해당 요소의 투명도에만 영향을 줌
      overlayRef.current.style.filter = isSpread
        ? "opacity(0)"
        : "opacity(0.8)";
    }
  };

  const handleMouseOut = (e: React.MouseEvent) => {
    // 마우스가 카드에서 나가면 오버레이에 적용한 광택을 보이지 않게 하고, 다크오버레이의 그라데이션도 새로 초기화하고, 카드 회전을 초기화함
    if (containerRef.current && overlayRef.current && darkOverlayRef.current) {
      overlayRef.current.style.filter = "opacity(0)";
      darkOverlayRef.current.style.background =
        "linear-gradient(150deg, rgba(55, 55, 55, 1) 0%, rgba(82, 82, 82, 1) 100%)";
      containerRef.current.style.transform =
        "perspective(350px) rotateX(0deg) rotateY(0deg)";
    }
  };

  const handleClickCard = () => {
    if (!isSpread) {
      return;
    }
    setSelectedSkill(skillData);
    toggleSkillCardFold();
    scrollToElementById("skills");
  };

  return (
    <div
      ref={containerRef}
      className={`${style.container} ${isSpread ? "hover:cursor-pointer" : ""}`}
      onPointerMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      onClick={handleClickCard}
    >
      <div
        ref={overlayRef}
        className={style.overlay}
        style={
          isSpread
            ? {
                filter: "opacity(0)",
              }
            : { filter: "opacity(0.8)" }
        }
      ></div>

      <div
        ref={darkOverlayRef}
        className={`${style.darkOverlay} ${
          isSpread ? "opacity-90" : "opacity-0"
        }`}
      ></div>

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
            background: `${
              isSpread
                ? "linear-gradient(to right, #2CD3E1, #A459D1, #F266AB, #FFB84C)"
                : "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
            }`,
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
