import Image from "next/image";
import Link from "next/link";

type ProjectLinkBoxProps = {
  githubCodeUrl?: string;
  deploymentUrl?: string;
  isCarousel?: boolean;
  hasMyWork?: boolean;
};

export default function ProjectLinkBox({
  deploymentUrl,
  githubCodeUrl,
  isCarousel = false,
  hasMyWork = false,
}: ProjectLinkBoxProps) {
  return (
    <div
      className={`w-full flex items-end ${
        isCarousel
          ? `gap-10 h-fit justify-center ${hasMyWork ? "mt-1" : "mt-3"}`
          : "gap-40 h-full mt-10"
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
            width={isCarousel ? "32" : "48"}
            height={isCarousel ? "32" : "48"}
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
            width={isCarousel ? "32" : "48"}
            height={isCarousel ? "32" : "48"}
          />
          <span className="text-2xl font-bold">Visit</span>
        </Link>
      )}
    </div>
  );
}
