export type ProjectsData = {
  imageUrl: string;
  projectName: string;
  techs: string;
  description: string;
  deploymentUrl: string;
  githubCodeUrl: string;
  myWork: string;
};

export type SkillData = {
  image: string;
  alt: string;
  category: "lang" | "etc" | "framework";
  skillName: string;
  description: string;
};

export type EmailForm = {
  from: string;
  name: string;
  message: string;
};
