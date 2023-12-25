import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // translateX(var(--carousel-translate)) 는 SkillCardSlider 컴포넌트의 슬라이더 컨테이너의 가로 길이의 절반 * -1 값임

        // 초기 위치에서 전체 길이의 절반만큼 좌측으로 이동함
        skillCardSlide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(var(--carousel-translate))" },
        },
        // 절반만큼 좌측으로 이동된 위치에서 우측으로 이동하여 초기 위치로 이동함
        reverseSkillCardSlide: {
          "0%": { transform: "translateX(var(--carousel-translate))" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        skillCardSlide: "skillCardSlide 35s linear infinite",
        reverseSkillCardSlide: "reverseSkillCardSlide 35s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
