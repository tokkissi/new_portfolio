import { splitStringIntoArray } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

type ProjectCardProps = {
  imageUrl: string;
  projectName: string;
  techs: string;
  description: string;
  deploymentUrl?: string;
  githubCodeUrl?: string;
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
          <div className="w-full flex gap-40 h-full items-end">
            {githubCodeUrl && (
              <Link
                className="flex gap-6 items-center mt-10"
                href={githubCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/skillIcons/Github-Light.svg"
                  alt="프로젝트 깃허브 링크"
                  width={48}
                  height={48}
                />
                <span className="text-2xl font-bold">Code</span>
              </Link>
            )}
            {deploymentUrl && (
              <Link
                className="flex gap-6 items-center"
                href={deploymentUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/external-link.svg"
                  alt="프로젝트 배포 url 링크"
                  width={48}
                  height={48}
                />
                <span className="text-2xl font-bold">Visit</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
