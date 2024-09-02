import { PROJECTS } from "../_lib/projects";
import { ProjectCard } from "../_components/project-card";

export default function Page() {
  const projects = PROJECTS;

  return (
    <div className="py-24">
      <div className="container mt-20">
        <h1 className="text-4xl font-semibold md:text-5xl">Nossos projetos</h1>

        <div>
          <ul className="mt-8 inline-flex gap-4 text-sm uppercase tracking-widest">
            <li>
              <button className="border border-stone-200 bg-white px-4 py-2 font-medium text-lime-500">
                Todos
              </button>
            </li>
            <li>
              <button className="border border-stone-200 bg-white px-4 py-2 hover:bg-lime-50">
                Comercial
              </button>
            </li>
            <li>
              <button className="border border-stone-200 bg-white px-4 py-2 hover:bg-lime-50">
                Residencial
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-8 xl:grid-cols-3 xl:px-12">
        {projects.map((project) => (
          <ProjectCard
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
