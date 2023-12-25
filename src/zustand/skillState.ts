import { SkillData } from "@/model/types";

export type SkillState = {
  selectedSkill: SkillData;
  setSelectedSkill: (skill: SkillData) => void;
};

export const initialSkillState: SkillData = {
  skillName: "Choose Skill",
  description:
    "아래의 이미지를 클릭하시거나, 토글을 이용하여 상세 정보를 확인 가능합니다",
  category: "etc",
  image: "/skillIcons/card-random.svg",
  alt: "상세 정보를 확인하고 싶은 스킬을 클릭해주세요",
};
