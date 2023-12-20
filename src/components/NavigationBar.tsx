export default function NavigationBar() {
  return (
    <nav className="flex px-8 text-xl justify-between items-center sticky bg-transparent top-0 mb-4 z-50 h-10 w-full">
      {/* 좌측 배너 */}
      <div>
        <a href="/">로고 이미지 예정</a>
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
