import { EmailForm } from "@/model/types";
import { formSchema } from "@/utils/emailValidation";

// 해당 함수는 클라이언트 사이드에서 사용하므로 nodemailer가 있어서 서버사이드 코드만 있어야하는 email.ts에 함께 넣으면 안됨
// next.js에서는 파일 내의 하나의 함수만 import하려고 해도 그 파일 내의 모든 코드가 함께 번들에 포함되므로 클라이언트에서 사용되어야 하는 코드와 서버에서만 사용되어야 하는 코드는 따로 파일로 분리해두어야 함
/**  이메일 폼을 입력 받아서 서버에서 유효성 검사 후, 유효하면 api를 요청하여, 응답 결과를 json으로 리턴하는 함수*/
export async function sendContactMail(form: EmailForm) {
  try {
    if (!formSchema.isValidSync(form)) {
      throw new Error("보내실 이메일 양식을 다시 확인해주세요");
    }
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "서버 요청 실패");
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`이메일 전송 중 오류 발생: ${error.message}`);
    } else {
      throw new Error("알 수 없는 오류가 발생했습니다.");
    }
  }
}
