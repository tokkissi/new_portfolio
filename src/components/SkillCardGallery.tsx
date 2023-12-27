"use client";

import { useZustandStore } from "@/zustand/useZustandStore";
import SkillCardFoldView from "./SkillCardFoldView";
import SkillcardSpreadView from "./SkillcardSpreadView/SkillcardSpreadView";

export default function SkillCardGallery() {
  const { isSkillCardFolded } = useZustandStore();

  return (
    <>
      {isSkillCardFolded && <SkillCardFoldView />}
      {!isSkillCardFolded && <SkillcardSpreadView />}
    </>
  );
}
