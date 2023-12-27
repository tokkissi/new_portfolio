import SkillToggleButton from "../SkillToggleButton/SkillToggleButton";
import SkillCardGallery from "../SkillCardGallery";

export default function Skills() {
  return (
    <section className="scroll-mt-12" id="skills">
      <div className="flex items-end mb-20">
        <h2 className="mr-16 leading-none">Skills</h2>
        <SkillToggleButton />
      </div>
      <SkillCardGallery />
    </section>
  );
}
