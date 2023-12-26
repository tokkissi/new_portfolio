import Image from "next/image";

const aboutText = `안녕하세요! 항상 긍정적인 마인드를 가지고
소통하려고 노력하는 프론트엔드 개발자 김제원입니다`;

// 프론트엔드 개발자로서 소통의 중요성을 잘 알고 있습니다.
//        혼자 벽만 보며 개발하는 개발자가 아닌 팀원과 함께 성장하는
//         개발자가 되고자 합니다.

export default function About() {
  return (
    <section className="flex items-center h-screen">
      <div className="w-full h-fit flex">
        <div className="basis-[15%]"></div>

        {/* 좌측 텍스트 영역 */}
        <div className="basis-[48%] flex flex-col justify-center">
          <h2 className="text-[8rem] mb-8">About</h2>
          <div className=" text-2xl mb-8 leading-[3rem] whitespace-pre-wrap">
            {aboutText}
          </div>
        </div>

        {/* 우측 이메일 전송 폼 영역 */}
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
