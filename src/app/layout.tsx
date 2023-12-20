import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

const notoSans = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "김제원의 포트폴리오",
  description:
    "신입 프론트엔드 개발자 김제원의 포트폴리오입니다. 개발에 참여한 프로젝트들과 사용 가능한 기술에 대해 소개합니다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} bg-black text-white`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
