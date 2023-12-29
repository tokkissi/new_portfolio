import SkillToggleButton from "../SkillToggleButton/SkillToggleButton";
import SkillCardGallery from "../SkillCardGallery";

export default function Skills() {
  return (
    <section className="overflow-hidden">
      <div className="scroll-point h-12 w-full" id="skills"></div>
      <div className="flex items-end mb-16">
        <h2 className="mr-16 leading-none">Skills</h2>
        <SkillToggleButton />
      </div>
      <SkillCardGallery />
    </section>
  );
}
