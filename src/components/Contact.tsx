import ContactEmailForm from "./ContactEmailForm";

const contactText = `궁금한 것이 있거나 협업을 원하시면 주저하지 말고
이 양식을 통해 저에게 메시지를 보내주세요
귀하의 아이디어와 제안을 기다립니다 🙇‍♂️`;

export default function Contact() {
  return (
    <section className="flex items-center h-screen" id="contact">
      <div className="w-full h-fit flex">
        <div className="basis-[15%]"></div>

        {/* 좌측 텍스트 영역 */}
        <div className="basis-[40%] flex flex-col justify-center">
          <h2 className="text-[8rem] mb-14">Contact</h2>
          <div className=" text-2xl mb-8 leading-[3rem] whitespace-pre-wrap">
            {contactText}
          </div>
        </div>

        {/* 우측 이메일 전송 폼 영역 */}
        <div className="basis-[35%] flex justify-center items-center pt-16">
          <ContactEmailForm />
        </div>
        <div className="basis-[10%]"></div>
      </div>
    </section>
  );
}
