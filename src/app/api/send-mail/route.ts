import { sendEmail } from "@/service/email";
import { formSchema } from "@/utils/emailValidation";

export async function POST(request: Request) {
  const body = await request.json();
  if (!formSchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({ message: "메일 전송 실패(이메일 양식)" }),
      { status: 400 }
    );
  }
  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일 전송 성공" }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.error(error);
      return new Response(JSON.stringify({ message: "메일 전송 실패(서버)" }), {
        status: 500,
      });
    });
}
