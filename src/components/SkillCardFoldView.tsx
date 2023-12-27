import SkillCardSlider from "./SkillCardSlider/SkillCardSlider";
import TiltableSkillCard from "./TiltableSkillCard/TiltableSkillCard";

export default function SkillCardFoldView() {
  return (
    <>
      <div className="flex justify-center">
        <TiltableSkillCard />
      </div>
      <div className="mt-28 mb-10">
        <SkillCardSlider />
        <SkillCardSlider reverse />
      </div>
    </>
  );
}
