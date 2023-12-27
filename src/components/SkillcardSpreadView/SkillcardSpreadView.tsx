import { skillDataList } from "../Skills/skillsData";
import TiltableSkillCard from "../TiltableSkillCard/TiltableSkillCard";
import style from "./SkillcardSpreadView.module.css";

export default function SkillcardSpreadView() {
  return (
    <div className="flex gap-16 flex-wrap justify-center">
      {skillDataList.map((skillData, index) => (
        <div
          className={style.fadeInAnimation}
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
          key={index}
        >
          <TiltableSkillCard data={skillData} />
        </div>
      ))}
    </div>
  );
}
