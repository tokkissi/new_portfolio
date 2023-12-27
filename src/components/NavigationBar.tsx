"use client";

import { scrollToElementById } from "@/utils/utils";
import Image from "next/image";

export default function NavigationBar() {
  const handleClick = (id: string) => {
    scrollToElementById(id);
  };
  return (
    <nav className="fixed z-50 bg-black t-0 flex px-8 text-xl justify-between items-center h-12 w-full max-w-[120rem]">
      {/* 좌측 로고 */}

      <button onClick={() => handleClick("landing")}>
        <Image
          src="/tokkissi-logo.svg"
          alt="토끼씨 로고"
          width={35}
          height={35}
        />
      </button>

      {/* 우측 네비게이션 */}
      <ul className="flex gap-8 font-bold">
        <li>
          <button onClick={() => handleClick("about")}>ABOUT</button>
        </li>
        <li>
          <button onClick={() => handleClick("projects")}>PROJECTS</button>
        </li>
        <li>
          <button onClick={() => handleClick("skills")}>SKILLS</button>
        </li>
        <li>
          <button onClick={() => handleClick("contact")}>CONTACT</button>
        </li>
      </ul>
    </nav>
  );
}
