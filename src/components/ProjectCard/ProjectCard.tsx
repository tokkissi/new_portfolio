import { splitStringIntoArray } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import ProjectLinkBox from "../ProjectLinkBox";
import { ProjectsData } from "@/model/types";

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
    <div
      className={`flex justify-center gap-16 mb-12 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-1/2 flex">
        {!reverse && <div className="w-32"></div>}
        <Image
          className="rounded-lg border-2 border-white"
          src={imageUrl}
          alt={projectName}
          width={720}
          height={800}
        />
      </div>
      <div className={`pb-6 w-1/2 ${reverse ? "pl-32" : ""}`}>
        <div className="h-1/2">
          <h3 className="text-4xl font-extrabold mb-8">{projectName}</h3>
          <p className="text-2xl">{description}</p>
          <p className="text-lg mt-4 opacity-75">My work: {myWork}</p>
        </div>
        <div className="h-1/2 flex flex-col">
          <div className="h-1/6"></div>
          <div className="flex flex-wrap gap-x-8 gap-y-1 font-bold">
            {techArray.map((tech, index) => (
              <span className="text-2xl text-nowrap opacity-50" key={index}>
                {tech}
              </span>
            ))}
          </div>
          <ProjectLinkBox
            deploymentUrl={deploymentUrl}
            githubCodeUrl={githubCodeUrl}
          />
        </div>
      </div>
    </div>
  );
}
