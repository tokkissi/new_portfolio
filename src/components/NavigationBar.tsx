import Image from "next/image";

export default function NavigationBar() {
  return (
    <nav className="flex px-8 text-xl justify-between items-center fixed bg-black top-0 z-50 h-12 w-full ">
      {/* 좌측 로고 */}
      <div>
        <a href="/">
          <Image
            src="/tokkissi-logo.svg"
            alt="토끼씨 로고"
            width={35}
            height={35}
          />
        </a>
      </div>
      {/* 우측 네비게이션 */}
      <div className="flex gap-6 font-bold">
        <a href="#About">{"About"}</a>
        <a href="#Projects">{"Projects"}</a>
        <a href="#Skills">{"Skills"}</a>
        <a href="#Contact">{"Contact"}</a>
      </div>
    </nav>
  );
}
