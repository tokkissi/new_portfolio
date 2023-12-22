import ProjectCard from "../ProjectCard/ProjectCard";
import { mainProjectsData } from "./projectsData";

export default function Projects() {
  return (
    <section className="flex flex-col justify-center">
      {/* mt-12는 네비게이션바의 높이. h2가 가려지지 않도록 설정함 */}
      <h2 className="mt-12 mb-6">Projects</h2>
      {/* 데이터 가져와서 map 으로 그리기.map의 index를 사용해서 index % 2 ? RightProjectCard : LeftProjectCard 로 그리기 */}
      {mainProjectsData.map((project, index) => (
        <ProjectCard
          key={index}
          projectName={project.projectName}
          imageUrl={project.imageUrl}
          techs={project.techs}
          description={project.description}
          githubCodeUrl={project.githubCodeUrl}
          deploymentUrl={project.deploymentUrl}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
}