import ContactEmailForm from "../ContactEmailForm/ContactEmailForm";
import style from "./Contact.module.css";

const contactText = `궁금한 것이 있거나 협업을 원하시면 주저하지 말고
이 양식을 통해 저에게 메시지를 보내주세요.
귀하의 아이디어와 제안을 기다립니다 🙇‍♂️`;

export default function Contact() {
  return (
    <section className={`${style.container}`}>
      <div className="scroll-point h-12 w-full" id="contact"></div>
      <div className={`${style.wrapperContainer}`}>
        {/* 좌측 텍스트 영역 */}
        <div className={`${style.textWrapper}`}>
          <h2 className={`${style.head2}`}>Contact</h2>
          <div className={`${style.text}`}>{contactText}</div>
        </div>

        {/* 우측 이메일 전송 폼 영역 */}
        {/* <div className="flex justify-center items-center border-4 border-green-400"> */}
        <div className={`${style.mailbox}`}>
          <ContactEmailForm />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
