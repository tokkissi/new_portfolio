import { object, string } from "yup";

// yup 을 사용하여 유효성 검사에 사용할 스키마를 만듬. 각 에러 메시지는 유효성 및 폼 관련 라이브러리를 사용하여 쉽게 사용 가능함

export const formSchema = object().shape({
  from: string()
    .email("올바른 형식의 이메일 주소가 아닙니다")
    .required("이메일을 입력해주세요"),
  name: string().required("보내시는 분의 이름을 입력해주세요"),
  message: string().required("이메일의 내용을 입력해주세요"),
});
