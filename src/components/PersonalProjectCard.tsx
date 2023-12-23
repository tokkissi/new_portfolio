import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectLinkBox from "./ProjectLinkBox";

type PersonalProjectCardProps = {
  imageUrl: string;
  projectName: string;
  techs: string;
  description: string;
  deploymentUrl: string;
  githubCodeUrl: string;
  myWork: string;
};

export default function PersonalProjectCard({
  projectName,
  imageUrl,
  description,
  githubCodeUrl,
  deploymentUrl,
  myWork,
  techs,
}: PersonalProjectCardProps) {
  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <div className="group h-full w-[30rem] relative transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md cursor-pointer">
        <Image
          className="h-full w-full rounded-md object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={imageUrl}
          alt={projectName}
          width={300}
          height={300}
        />
        {/* 그라데이션 배경 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:from-black/80 group-hover:to-black/80"></div>
        {/* hover시 보일 텍스트 */}
        <div className="absolute text-white/80 inset-0 flex translate-y-[100%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
          <h3 className="text-2xl text-white font-bold">{projectName}</h3>
          <p className="mt-6 text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {description}
          </p>
          <span className="mt-2 font-bold mr-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            #Tech
          </span>
          <p className="text-start mr-auto ml-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {techs}
          </p>
          {myWork && (
            <>
              <p className="mt-2 font-bold mr-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                #My work
              </p>
              <p className="text-start ml-2 mr-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {myWork}
              </p>
            </>
          )}
          <div className="h-2"></div>
          <ProjectLinkBox
            deploymentUrl={deploymentUrl}
            githubCodeUrl={githubCodeUrl}
            isCarousel
            hasMyWork={myWork.length > 0}
          />
        </div>
      </div>
    </div>
  );
}
