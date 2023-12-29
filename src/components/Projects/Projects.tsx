import Carousel from "../Carousel";
import PersonalProjectCard from "../PersonalProjectCard/PersonalProjectCard";
import ProjectCard from "../ProjectCard/ProjectCard";
import { mainProjectsData, personalSideProjectsData } from "./projectsData";
import style from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={`${style.container}`}>
      <div className="scroll-point h-12 w-full" id="projects"></div>

      <div>
        {/* mt-12는 네비게이션바의 높이. h2가 가려지지 않도록 설정함 */}
        <h2 className={`${style.head2}`}>Projects</h2>
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
            myWork={project.myWork}
          />
        ))}
      </div>

      <p className={`${style.toyProjects}`}>Toy Projects</p>
      <Carousel>
        {personalSideProjectsData.map((project, index) => (
          <PersonalProjectCard
            key={index}
            projectName={project.projectName}
            imageUrl={project.imageUrl}
            description={project.description}
            githubCodeUrl={project.githubCodeUrl}
            myWork={project.myWork}
            techs={project.techs}
            deploymentUrl={project.deploymentUrl}
          />
        ))}
      </Carousel>
    </section>
  );
}
