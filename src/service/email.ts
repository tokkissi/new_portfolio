import { EmailForm } from "@/model/types";
import nodemailer from "nodemailer";

/** 노드메일러를 통해 이메일 서버와 연결을 설정하는데 사용되는 객체 */
const trasnporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // 지메일을 사용하기 위한 구글의 SMTP 서버주소
  port: 465, // 이메일 서버와의 통신을 위한 포트 번호, SSL(보안 연결. 데이터를 암호화하여 전송)은 465, TLS는 587. 이메일 프로바이더에 따라 다를 수 있음
  secure: true, // SSL사용 여부, SSL은 true TLS는 false. 즉, 데이터 암호화 처리 여부
  auth: {
    user: process.env.GMAIL_USER, // 이메일 서버에 접속하기 위해 필요한 사용자 이메일 주소
    pass: process.env.GMAIL_PASSWORD, // 해당 계정의 비밀번호
  },
});

/** 작성한 이메일 폼 데이터를 인자로 받아 이메일을 전송하는 함수 */
export function sendEmail(params: EmailForm) {
  return trasnporter
    .sendMail({
      from: params.from,
      to: process.env.GMAIL_USER,
      subject: `내 포트폴리오로부터 "${params.name}"님의 새로운 문의가 도착했습니다`,
      html: `
    <h2>포트폴리오 contact 문의 메일</h2>
    <h3>문의자 정보</h3>
    <ul>
      <li>이름: ${params.name}</li>
      <li>이메일: ${params.from}</li>
    </ul>
    <h3>문의 내용</h3>
    <p>${params.message}</p>
    `,
    })
    .catch((err) => {
      throw new Error(`메일 전송 오류: ${err.message}`);
    });
}
