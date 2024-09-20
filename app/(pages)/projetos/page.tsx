import { ProjectCard } from "../../_components/project-card";
import { getAllProjects } from "../../_lib/api";

export default async function Page() {
  const projects = await getAllProjects();

  return (
    <>
      <div className="px-4 md:px-8 xl:px-12">
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

      <div className="mt-24 grid grid-cols-1 gap-4 md:grid-cols-2 md:px-8 xl:px-12">
        {projects.edges.map(({ node: project }) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            location={project.location}
            imageUrl={project.featuredImage?.node.sourceUrl}
            slug={project.slug}
          />
        ))}
      </div>
    </>
  );
}
