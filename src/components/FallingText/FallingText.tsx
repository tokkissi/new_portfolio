import { Pixelify_Sans } from "next/font/google";
import style from "./FallingText.module.css";

const pixelifySansFont = Pixelify_Sans({ subsets: ["latin"] });

export default function FallingText() {
  return (
    <div
      className={`${style.fallingTextContainer} ${pixelifySansFont.className}`}
    >
      <span>H</span>
      <span>e</span>
      <span>l</span>
      <span>l</span>
      <span>o</span>

      <span>&nbsp;</span>

      <span>w</span>
      <span>o</span>
      <span>r</span>
      <span>l</span>
      <span>d</span>
      <span>!</span>
    </div>
  );
}
