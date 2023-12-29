"use client";

import useDeviceType from "@/app/hooks/useDeviceType";
import { DeviceType } from "@/model/types";
import Image from "next/image";
import Link from "next/link";

type ProjectLinkBoxProps = {
  githubCodeUrl?: string;
  deploymentUrl?: string;
  isCarousel?: boolean;
  hasMyWork?: boolean;
};

function getIconSize(isCarousel: boolean, deviceType: DeviceType) {
  if (isCarousel) {
    return deviceType === "desktop" ? "30" : "24";
  } else {
    return deviceType === "desktop" ? "36" : "30";
  }
}

export default function ProjectLinkBox({
  deploymentUrl,
  githubCodeUrl,
  isCarousel = false,
  hasMyWork = false,
}: ProjectLinkBoxProps) {
  const deviceType = useDeviceType();

  return (
    <div
      className={`w-full flex justify-evenly ${
        isCarousel ? `${hasMyWork ? "mt-1" : "mt-2"}` : "mt-4 mb-2"
      }`}
    >
      {githubCodeUrl && (
        <Link
          className="flex gap-6 items-center"
          href={githubCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/skillIcons/Github-Light.svg"
            alt="프로젝트 깃허브 링크"
            width={getIconSize(isCarousel, deviceType)}
            height={getIconSize(isCarousel, deviceType)}
          />
          <span className="text-lg font-bold">Code</span>
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
            width={getIconSize(isCarousel, deviceType)}
            height={getIconSize(isCarousel, deviceType)}
          />
          <span className="text-lg font-bold">Visit</span>
        </Link>
      )}
    </div>
  );
}
