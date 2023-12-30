"use client";

import Image from "next/image";
import MultiTypingEffect from "../MultiTypingEffect/MultiTypingEffect";
import useDeviceType from "@/app/hooks/useDeviceType";
import style from "./About.module.css";
import { useEffect, useState } from "react";

const aboutTexts = [
  `안녕하세요! 긍정적인 마인드를 가지고
소통하려고 노력하는 프론트엔드 개발자 김제원입니다`,
  `프론트엔드 개발자로서 소통의 중요성을 잘 알고 있습니다
혼자 벽만 보며 개발하는 개발자가 아닌
팀원과 함께 성장하는 개발자가 되고자 합니다`,
  `해당 포트폴리오는 되도록 라이브러리를
적게 사용하여 구현하였습니다
사용한 라이브러리는 아래와 같습니다
nodemailer, react-icons, react-spinners, zustand, yup`,
];

export default function About() {
  const deviceType = useDeviceType();
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3000);

    return () => clearTimeout(interval);
  }, [isFlipped]);

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className={`${style.container} scroll-point`} id="about">
      <div className={`w-full min-h-[28rem] flex justify-center`}>
        {/* 좌측 텍스트 영역 */}
        <div className={style.textWrapper}>
          <h2 className={style.head2}>About</h2>
          <div className=" text-2xl mb-8">
            <MultiTypingEffect texts={aboutTexts} />
          </div>
        </div>

        {/* 우측 사진 영역 */}
        {deviceType === "desktop" && (
          <div className={style.imageWrapper} onClick={handleImageClick}>
            <div
              className={`${style.flipCard} ${isFlipped ? style.flipped : ""}`}
            >
              <div className={`${style.front}`}>
                <Image
                  className={`${style.profileImg}`}
                  src="/김제원_프로필_사진.jpg"
                  alt="김제원 프로필 사진"
                  fill
                />
              </div>
              <div className={`${style.back}`}>
                <Image
                  className={`${style.profileImg}`}
                  src="/토끼씨_프로필.jpg"
                  alt="김제원 개인 캐릭터 토끼씨 이미지"
                  fill
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
