"use client";

import Link from "next/link";
import style from "./SocialLinks.module.css";
import useDeviceType from "@/app/hooks/useDeviceType";
import { FaBlogger } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

export default function SocialLinks() {
  const deviceType = useDeviceType();
  const iconSize = deviceType === "desktop" ? "w-16 h-16" : "w-10 h-10";

  return (
    <div className={`${style.container}`}>
      <div className={`${style.wrapper}`}>
        <Link
          className={`${style.icon} ${iconSize}`}
          href="https://github.com/tokkissi"
          target="_blank"
          rel="noopener norefferer"
        >
          <FaGithub size={`${iconSize}`} />
        </Link>
        <Link
          className={`${style.icon} ${iconSize}`}
          href="https://tokkic.tistory.com"
          target="_blank"
          rel="noopener norefferer"
        >
          <FaBlogger size={`${iconSize}`} />
        </Link>
        <Link
          className={`${style.icon} ${iconSize}`}
          href="https://www.notion.so/2f4009cac273405898a326587fd31af3?pvs=4"
          target="_blank"
          rel="noopener norefferer"
        >
          <SiNotion size={`${iconSize}`} />
        </Link>
      </div>
    </div>
  );
}
