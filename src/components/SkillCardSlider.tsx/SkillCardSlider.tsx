"use client";

import Image from "next/image";
import { useRef } from "react";
import { skillDataList } from "../Skills/skillsData";
import { useZustandStore } from "@/zustand/useZustandStore";
import { SkillData } from "@/model/types";

type SkillCardSliderProps = {
  reverse?: boolean;
};

export default function SkillCardSlider({
  reverse = false,
}: SkillCardSliderProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const loadedImageCount = useRef(0);

  const { setSelectedSkill } = useZustandStore();

  const handleMouseEnter = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "running";
    }
  };

  // useEffect로 슬라이더를 재생하면 이미지 로드가 모두 되지 않은 상태에서 이미지의 총 가로 너비를 계산하므로 너비 계산에 오차가 생겨 순환이 끊김
  // 그러므로 이미지가 로드되면 카운트 하고, 총 이미지 수만큼 모두 로드 되었을때 동적으로 총 너비를 계산해야 함
  const handleImageLoad = () => {
    loadedImageCount.current += 1;

    if (carouselRef.current) {
      // Array.from(carouselRef.current.children)는 이 컨테이너 내의 모든 자식 요소들(이미지들)을 배열로 변환함
      // .reduce((total, child) => total + child.getBoundingClientRect().width, 0)는 이 배열의 각 요소(이미지)에 대해 getBoundingClientRect().width를 호출하여 그 너비를 합함

      if (loadedImageCount.current === skillDataList.length * 2) {
        const totalWidth = Array.from(carouselRef.current.children).reduce(
          (total, child) => total + child.getBoundingClientRect().width,
          0
        );

        // 자연스럽게 순환하며 무한 재생하기 위해서 이미지 배열을 2배로 한 후 절반에서 시작하도록 했음. 현재 이미지 크기로는 2배로 했을때 순환시키면 화면의 가로 크기가 가득 차기 때문임
        const translateValue = `-${totalWidth / 2}px`;

        // 컨테이너 너비 계산 후, css 변수로 설정함
        carouselRef.current.style.setProperty(
          "--carousel-translate",
          translateValue
        );
      }
    }
  };

  const handleImageClick = (data: SkillData) => {
    setSelectedSkill(data);
  };

  return (
    <div
      ref={carouselRef}
      className={`flex py-2 ${
        reverse ? "animate-reverseSkillCardSlide" : "animate-skillCardSlide"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {skillDataList.map((skillData, index) => (
        <Image
          key={index}
          className="rounded-3xl px-2 hover:cursor-pointer hover:opacity-50"
          src={skillData.image}
          alt={skillData.skillName}
          width={150}
          height={150}
          onLoad={handleImageLoad}
          onClick={() => handleImageClick(skillData)}
        />
      ))}

      {/* 무한 순환을 위한 추가 데이터 */}
      {skillDataList.map((skillData, index) => (
        <Image
          // key가 겹치면 슬라이더가 정상 작동하지 않기 때문에 겹치지 않도록 함
          key={index + skillDataList.length}
          className="rounded-3xl px-2 hover:cursor-pointer hover:opacity-50"
          src={skillData.image}
          alt={skillData.skillName}
          width={150}
          height={150}
          onLoad={handleImageLoad}
          onClick={() => handleImageClick(skillData)}
        />
      ))}
    </div>
  );
}
