import TiltableSkillCard from "../TiltableSkillCard/TiltableSkillCard";
import SkillCardSlider from "../SkillCardSlider/SkillCardSlider";

export default function Skills() {
  return (
    <section className="overflow-hidden">
      <h2 className="mb-20">Skills</h2>
      <div className="flex justify-center">
        <TiltableSkillCard />
      </div>
      <div className="mt-28 mb-10">
        <SkillCardSlider />
        <SkillCardSlider reverse />
      </div>
    </section>
  );
}
