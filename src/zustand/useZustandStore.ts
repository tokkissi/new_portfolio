import { create } from "zustand";
import { SkillState, initialSkillState } from "./skillState";
import { skillCardFoldState } from "./skillCardFoldState";

export const useZustandStore = create<SkillState & skillCardFoldState>(
  (set) => ({
    selectedSkill: initialSkillState,
    setSelectedSkill: (skill) =>
      set({
        selectedSkill: skill,
      }),
    isSkillCardFolded: true,
    toggleSkillCardFold: () =>
      set((state) => ({ isSkillCardFolded: !state.isSkillCardFolded })),
  })
);
