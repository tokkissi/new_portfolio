import Image from "next/image";

export default function About() {
  return (
    <section className="flex items-center h-screen">
      <div className="w-full flex">
        <div className="w-3/5">
          <h2 className="text-[8rem] mb-8">About</h2>
          <p className="text-6xl"></p>
          <p className="text-3xl mb-8">
            안녕하세요! &nbsp; 항상 <strong>긍정적인 마인드</strong>로{" "}
            <strong>소통</strong>하기 위해서 노력하는 <strong>김제원</strong>
            입니다.
          </p>
          <p className="text-2xl leading-10">
            프론트엔드 개발자로서 소통의 중요성을 잘 알고 있습니다.
            <br /> 혼자 벽만 보며 개발하는 개발자가 아닌 팀원과 함께 성장하는
            개발자가 되고자 합니다.
          </p>
        </div>
        <div className="w-2/5 flex justify-center items-center px-8">
          <Image
            className="border-8 border-white rounded-2xl"
            src="/김제원_프로필_사진.jpg"
            alt="김제원 프로필 사진"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
