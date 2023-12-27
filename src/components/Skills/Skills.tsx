import TiltableSkillCard from "../TiltableSkillCard/TiltableSkillCard";
import SkillCardSlider from "../SkillCardSlider/SkillCardSlider";
import SkillToggleButton from "../SkillToggleButton/SkillToggleButton";
import SkillCardGallery from "../SkillCardGallery";

export default function Skills() {
  return (
    <section className="overflow-hidden">
      <div className="flex items-end mb-20">
        <h2 className="mr-16 leading-none">Skills</h2>
        <SkillToggleButton />
      </div>
      <SkillCardGallery />
    </section>
  );
}
