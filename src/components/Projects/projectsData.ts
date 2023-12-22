type ProjectsData = {
  imageUrl: string;
  projectName: string;
  techs: string;
  description: string;
  deploymentUrl: string;
  githubCodeUrl: string;
  myWork: string;
};

export const mainProjectsData: ProjectsData[] = [
  {
    projectName: "Command Survival",
    imageUrl: "/projectImages/커맨드_서바이벌.png",
    description: "개인 프로젝트. AI 텍스트 게임 및 AI 이미지 생성 웹 앱",

    techs:
      "Next.js 13, TypeScript, Mongo DB, Tailwind CSS, Next-Auth, React Query, Zustand, ChatGPT API, DALL·E API, SpeechRecognition API, PWA",
    githubCodeUrl: "https://github.com/tokkissi/Command-Survival",
    deploymentUrl: "https://command-survival.vercel.app",
    myWork: "All works(FE & BE), pc 및 모바일 반응형 UI",
  },
  {
    projectName: "Trip Match",
    imageUrl: "/projectImages/트립매치.png",
    description: "엘리스 부트캠프 두번째 팀프로젝트. 여행 동행 구인 웹사이트",
    techs:
      "TypeScript, React, Redux, Styled Components, Node.js, Redis, express, Mongo DB, Swagger",
    githubCodeUrl: "https://github.com/tokkissi/team8282-tripMatch",
    deploymentUrl: "",
    myWork:
      "팀장, 기획, 로그인 및 회원가입, 좋아요 페이지, 공공 데이터 API, FE",
  },
  {
    projectName: "문어상점",
    imageUrl: "/projectImages/문어마켓_메인.png",
    description: "엘리스 부트캠프 첫번째 팀프로젝트. 식자재 쇼핑몰 웹사이트",
    techs: "JavaScript, HTML5, CSS3, BULMA(CSS FrameWork)",
    githubCodeUrl: "https://github.com/tokkissi/elice-Pj-1-",
    deploymentUrl: "",
    myWork: "팀장, 기획, 메인 페이지, 상품 페이지, FE",
  },
];

export const personalSideProjectsData: ProjectsData[] = [
  {
    projectName: "Next-Chat",
    imageUrl: "/projectImages/웹소켓채팅.png",
    description: "개인 프로젝트. 웹소켓 기반의 실시간 채팅 웹 앱",
    techs: "Next.js 14, TypeScript, Tailwind CSS, WebSocket, PWA",
    githubCodeUrl: "https://github.com/tokkissi/Next-Chat",
    deploymentUrl: "https://next-chat-tokkissi.koyeb.app",
    myWork: "",
  },
  {
    projectName: "(구)2023년 포트폴리오",
    imageUrl: "/projectImages/포트폴리오.png",
    description: "이전 버전의 2023년 포트폴리오 웹사이트",
    techs: "Next.js 13, TypeScript, Tailwind CSS",
    githubCodeUrl: "https://github.com/tokkissi/portfolio_2023",
    deploymentUrl: "https://portfolio-2023-tokkissi.vercel.app",
    myWork: "",
  },
  {
    projectName: "wanted-pre-onboarding-frontend",
    imageUrl: "/projectImages/원티드프론트엔드.png",
    description: "원티드 프리온보딩 프론트엔드 사전 과제",
    techs: "React, TypeScript, Tailwind CSS",
    githubCodeUrl: "https://wanted-pre-onboarding-frontend-tokkissi.vercel.app",
    deploymentUrl: "https://wanted-pre-onboarding-frontend-tokkissi.vercel.app",
    myWork: "",
  },
  {
    projectName: "드림코딩 instagram 클론",
    imageUrl: "/projectImages/인스타그램.png",
    description: "드림코딩 Next.js 13 강의 중 instagram 클론",
    techs: "Next.js 13, TypeScript, Tailwind CSS, swr, Next-Auth, Sanity",
    githubCodeUrl: "https://github.com/tokkissi/Nextjs13-Instantgram",
    deploymentUrl: "https://nextjs13-instantgram.vercel.app",
    myWork: "",
  },
  {
    projectName: "드림코딩 blog 클론",
    imageUrl: "/projectImages/드림코딩_blog.png",
    description: "드림코딩 Next.js 13 강의 중 blog 클론",
    techs: "Next.js 13, TypeScript, Tailwind CSS",
    githubCodeUrl: "https://github.com/tokkissi/blog-clone-next.js",
    deploymentUrl: "https://blog-clone-next-js.vercel.app",
    myWork: "",
  },
  {
    projectName: "드림코딩 note 클론",
    imageUrl: "/projectImages/드림코딩_note.png",
    description: "드림코딩 Next.js 13 강의 중 note 클론",
    techs: "Next.js 13, TypeScript, Tailwind CSS",
    githubCodeUrl: "",
    deploymentUrl: "",
    myWork: "",
  },
  {
    projectName: "Next.js 13 학습용 게시판",
    imageUrl: "/projectImages/게시판.png",
    description: "Next.js 기능 학습용으로 만든 CRUD 가능한 게시판",
    techs:
      "Next.js 13, TypeScript, Tailwind CSS, Next-Auth, React query, Mongo DB",
    deploymentUrl: "",
    githubCodeUrl: "",
    myWork: "",
  },
  {
    projectName: "영화 평점 페이지",
    imageUrl: "/projectImages/영화_페이지.png",
    description:
      "TMDB(영화평가 사이트) api를 사용하여 Next.js 13 페이지 만들어보기",
    techs: "githubCodeUrlt.js 13",
    githubCodeUrl: "",
    deploymentUrl: "",
    myWork: "",
  },
  {
    projectName: "Apple 공식 홈페이지 클론",
    imageUrl: "/projectImages/애플_클론_페이지.png",
    description: "앨리스 스터디 팀프로젝트",
    techs: "HTML5, CSS3, JavaScript",
    githubCodeUrl: "https://github.com/tokkissi/Apple_web_page",
    deploymentUrl: "",
    myWork: "스터디장. 메인 페이지",
  },
  {
    projectName: "자기소개 페이지",
    imageUrl: "/projectImages/자기소개_페이지.png",
    description: "학습용 자기소개 페이지",
    techs: "HTML5, CSS3",
    githubCodeUrl: "https://github.com/tokkissi/ElicePJ_intro-me-",
    deploymentUrl: "",
    myWork: "",
  },
];
