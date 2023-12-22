import Image from "next/image";

export default function Landing() {
  return (
    <section
      className="relative w-full max-w-[120rem] h-screen flex justify-center items-center"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <div className="fixed w-full h-full left-0 top-0">
        <Image
          className="fixed object-cover"
          src="/bg-code.gif"
          alt="background coding image"
          fill
        />
      </div>

      <div className="absolute top-0 w-full bg-gradient-to-b from-black to-transparent h-1/2"></div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent h-1/2"></div>
    </section>
  );
}
