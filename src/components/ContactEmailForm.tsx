"use client";

import { useState } from "react";
import { EmailForm } from "@/model/types";
import EmailFeedbackBanner from "./EmailFeedbackBanner";
import { MoonLoader } from "react-spinners";
import { sendContactMail } from "@/service/sendContactMail";
import { FaPaperPlane } from "react-icons/fa";

type SendResult = {
  state: "fail" | "success" | "";
  message: string;
};

const defaultForm = {
  from: "",
  name: "",
  message: "",
};

export default function ContactEmailForm() {
  const [form, setForm] = useState<EmailForm>(defaultForm);
  const [mailsending, setMailsending] = useState(false);
  const [sendResult, setSendResult] = useState<SendResult>({
    state: "",
    message: "",
  });
  const [showResult, setShowResult] = useState(false);

  const feedbackBannerStyle =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10";

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mailsending) {
      return;
    }
    try {
      setMailsending(true);
      const data = await sendContactMail(form);
      setSendResult({
        state: "success",
        message: data.message,
      });
      setMailsending(false);
      setForm(defaultForm);
    } catch (error: any) {
      setSendResult({
        state: "fail",
        message: error.message,
      });
      setMailsending(false);
    } finally {
      setShowResult(true);
      setForm(defaultForm);
      setTimeout(() => {
        setShowResult(false);
        setSendResult({
          state: "",
          message: "",
        });
      }, 2000);
    }
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      from: e.target.value,
    }));
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      message: e.target.value,
    }));
  };

  return (
    <div className="w-full h-full px-4 flex justify-center">
      <div className={`w-full min-w-72 h-full relative`}>
        {mailsending && (
          <div className={feedbackBannerStyle}>
            <MoonLoader color="#4f4a45" />
          </div>
        )}

        <form
          onSubmit={handleSubmitForm}
          className={`p-4 text-2xl ${
            mailsending || (showResult && sendResult.state === "fail")
              ? "opacity-50 pointer-events-none"
              : ""
          }`} // 로딩 중 폼 비활성화
        >
          <label>
            EMAIL
            <input
              id="from"
              type="text"
              className="w-full bg-[#1C232A] py-1 mb-8 px-2 rounded-sm border-4  border-black/30 mt-2"
              onChange={handleEmail}
              value={form.from}
              autoComplete="email"
            />
          </label>

          <label>
            NAME
            <input
              id="name"
              type="text"
              className="w-full bg-[#1C232A] py-1 mb-8 px-2 rounded-sm border-4 border-black/30 mt-2"
              onChange={handleName}
              value={form.name}
            />
          </label>

          <label>
            MESSAGE
            <textarea
              id="message"
              className="w-full bg-[#1C232A] py-1 resize-none px-2 rounded-sm border-4 border-black/30 mt-2"
              rows={5}
              onChange={handleMessage}
              value={form.message}
            />
          </label>
          <button
            type="submit"
            className="py-2 px-4 rounded-sm w-fit font-semibold text-white border-2 border-white mt-8 flex items-center"
          >
            <span className="mr-4">Send Mail</span>
            <FaPaperPlane />
          </button>
        </form>

        {/* 이메일 전송 결과 배너 */}
        {showResult && (
          <div className={feedbackBannerStyle}>
            <EmailFeedbackBanner
              isSuccess={sendResult.state === "success"}
              message={sendResult.message}
            />
          </div>
        )}
      </div>
    </div>
  );
}
