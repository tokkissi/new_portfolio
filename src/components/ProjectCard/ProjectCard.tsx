import { splitStringIntoArray } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import ProjectLinkBox from "../ProjectLinkBox";
import { ProjectsData } from "@/model/types";
import style from "./ProjectCard.module.css";

type ProjectCardProps = ProjectsData & {
  reverse: boolean;
};

export default function ProjectCard({
  projectName,
  description,
  techs,
  imageUrl,
  githubCodeUrl,
  deploymentUrl,
  reverse,
  myWork,
}: ProjectCardProps) {
  // useMemo를 사용해서 techArray 계산을 최적화함
  const techArray = useMemo(() => splitStringIntoArray(techs), [techs]);

  return (
    <div className={`${style.container} ${reverse ? "flex-row-reverse" : ""}`}>
      {/* 프로젝트 이미지 영역 */}
      <div className={`${style.imageWrapper}`}>
        <Image
          className={`${style.projectImage}`}
          src={imageUrl}
          alt={projectName}
          // width={900}
          // height={500}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* 프로젝트 디테일 텍스트 영역 */}

      <div className={`${style.textWrapper}`}>
        <div>
          <h3 className={`${style.projectName}`}>{projectName}</h3>
          <p className={`${style.projectDescription}`}>{description}</p>
          <p className={style.myWork}>My work: {myWork}</p>
          <div className={`${style.techbox}`}>
            {techArray.map((tech, index) => (
              <span className={`${style.tech} `} key={index}>
                {tech}
              </span>
            ))}
          </div>
          <div>
            <ProjectLinkBox
              deploymentUrl={deploymentUrl}
              githubCodeUrl={githubCodeUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
