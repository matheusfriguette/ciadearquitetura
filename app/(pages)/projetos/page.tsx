import { PROJECTS } from "../../_lib/projects";
import { ProjectCard } from "../../_components/project-card";

export default function Page() {
  const projects = PROJECTS;

  return (
    <div>
      <div className="container">
        <h1 className="border-b border-stone-100 pb-1 text-right text-2xl font-light uppercase tracking-wider">
          Projetos
        </h1>

        <ul className="mt-4 flex justify-end gap-8 text-sm tracking-wider">
          <li>
            <button className="uppercase text-lime-600">Todos</button>
          </li>
          <li>
            <button className="uppercase hover:text-lime-600">Comercial</button>
          </li>
          <li>
            <button className="uppercase hover:text-lime-600">
              Residencial
            </button>
          </li>
        </ul>
      </div>

      <div className="mt-24 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-8 xl:px-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            location={project.location}
            imageUrl={project.imageUrl}
            slug=""
          />
        ))}
      </div>
    </div>
  );
}
