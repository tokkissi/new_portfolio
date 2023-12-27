import Image from "next/image";
import MultiTypingEffect from "./MultiTypingEffect/MultiTypingEffect";

const aboutTexts = [
  `안녕하세요! 항상 긍정적인 마인드를 가지고
소통하려고 노력하는 프론트엔드 개발자 김제원입니다`,
  `프론트엔드 개발자로서 소통의 중요성을 잘 알고 있습니다
혼자 벽만 보며 개발하는 개발자가 아닌
팀원과 함께 성장하는 개발자가 되고자 합니다`,
  `해당 포트폴리오는 되도록 라이브러리를
적게 사용하여 구현하였습니다
사용한 라이브러리는 아래와 같습니다
nodemailer, react-icons, react-spinners,
zustand, yup`,
];

export default function About() {
  return (
    <section className="flex items-center h-screen scroll-mt-12" id="about">
      <div className="w-full min-h-[33rem] flex">
        <div className="basis-[15%]"></div>

        {/* 좌측 텍스트 영역 */}
        <div className="basis-[48%] flex flex-col">
          <h2 className="text-[8rem] mb-8">About</h2>
          <div className=" text-2xl mb-8 leading-[3rem]">
            <MultiTypingEffect texts={aboutTexts} />
          </div>
        </div>

        {/* 우측 사진 영역 */}
        <div className="basis-[27%] flex justify-start items-center">
          <Image
            className="border-4 border-white rounded-md"
            src="/김제원_프로필_사진.jpg"
            alt="김제원 프로필 사진"
            width={320}
            height={320}
          />
        </div>
        <div className="basis-[10%]"></div>
      </div>
    </section>
  );
}
