"use client";

import useDeviceType from "@/app/hooks/useDeviceType";
import { scrollToElementById } from "@/utils/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

export default function NavigationBar() {
  const deviceType = useDeviceType();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handleClickOutside(e: PointerEvent) {
      if (
        dropDownMenuRef.current &&
        !dropDownMenuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleClick = (id: string) => {
    scrollToElementById(id);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed h-12 flex items-center justify-between z-50 bg-black t-0 px-8 text-xl w-full  max-w-[120rem]`}
    >
      <div className="w-full flex justify-between items-center">
        {/* 좌측 로고 */}

        <button
          className="flex shrink-0 w-9 h-9 justify-center items-center hover:opacity-60"
          onClick={() => handleClick("landing")}
        >
          <Image
            src="/tokkissi-logo.svg"
            alt="토끼씨 로고"
            width={35}
            height={35}
          />
        </button>

        {/* 우측 네비게이션 */}
        {(deviceType === "tablet" || deviceType === "desktop") && (
          <ul
            className={`flex font-bold ${
              deviceType === "tablet" ? "text-sm gap-4" : "gap-8"
            }`}
          >
            <li>
              <button
                className="hover:opacity-60"
                onClick={() => handleClick("about")}
              >
                ABOUT
              </button>
            </li>
            <li>
              <button
                className="hover:opacity-60"
                onClick={() => handleClick("projects")}
              >
                PROJECTS
              </button>
            </li>
            <li>
              <button
                className="hover:opacity-60"
                onClick={() => handleClick("skills")}
              >
                SKILLS
              </button>
            </li>
            <li>
              <button
                className="hover:opacity-60"
                onClick={() => handleClick("contact")}
              >
                CONTACT
              </button>
            </li>
          </ul>
        )}

        {deviceType === "mobile" && (
          <button className="hover:opacity-70" onClick={toggleMenu}>
            <FaBars color="white" size="2rem" />
          </button>
        )}
      </div>

      {deviceType === "mobile" && isMenuOpen && (
        <div ref={dropDownMenuRef}>
          <ul className="fixed top-12 right-1 bg-white text-black w-48 rounded-lg  overflow-hidden">
            <li className="py-2 px-4 hover:opacity-70 hover:bg-gray-300">
              <button onClick={() => handleClick("about")}>ABOUT</button>
            </li>
            <li className="py-2 px-4 hover:opacity-70 hover:bg-gray-300">
              <button onClick={() => handleClick("projects")}>PROJECTS</button>
            </li>
            <li className="py-2 px-4 hover:opacity-70 hover:bg-gray-300">
              <button onClick={() => handleClick("skills")}>SKILLS</button>
            </li>
            <li className="py-2 px-4 hover:opacity-70 hover:bg-gray-300">
              <button onClick={() => handleClick("contact")}>CONTACT</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
