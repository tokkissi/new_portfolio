import TiltableSkillCard from "../TiltableSkillCard.tsx/TiltableSkillCard";
import SkillCardSlider from "../SkillCardSlider.tsx/SkillCardSlider";

export default function Skills() {
  return (
    <section className="overflow-hidden">
      <h2 className="mb-6">Skills</h2>
      <div className="flex justify-center">
        <TiltableSkillCard />
      </div>
      <div className="py-10">
        <SkillCardSlider />
        <SkillCardSlider reverse />
      </div>
    </section>
  );
}
