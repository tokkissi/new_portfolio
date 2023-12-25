import { create } from "zustand";
import { SkillState, initialSkillState } from "./skillState";

export const useZustandStore = create<SkillState>((set) => ({
  selectedSkill: initialSkillState,
  setSelectedSkill: (skill) =>
    set({
      selectedSkill: skill,
    }),
}));
