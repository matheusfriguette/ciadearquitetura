import { getProject } from "../../../_lib/api";
import { ProjectDescription } from "../../../_components/project-description";
import { ProjectImageGrid } from "../../../_components/project-image-grid";

export default async function Page({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  return (
    <>
      <div
        className="aspect-video h-auto w-full bg-cover bg-center md:h-[50vh] md:bg-fixed"
        style={{
          backgroundImage: `url('${project.featuredImage?.node.sourceUrl}')`,
        }}
      ></div>

      <div className="-mt-12 px-4 md:px-8 xl:px-12">
        <div className="flex w-full justify-center md:justify-end">
          <div className="flex w-full flex-wrap border border-stone-100 bg-white md:w-auto">
            {project.year && (
              <div className="flex flex-col gap-2 px-6 py-6 lg:px-12 lg:py-6">
                <div className="text-xs font-light uppercase tracking-wider text-stone-400">
                  Ano
                </div>
                <div>{project.year}</div>
              </div>
            )}
            {project.location && (
              <div className="flex flex-col gap-2 px-6 py-6 lg:px-12 lg:py-6">
                <div className="text-xs font-light uppercase tracking-wider text-stone-400">
                  Localização
                </div>
                <div>{project.location}</div>
              </div>
            )}
            {project.area && (
              <div className="flex flex-col gap-2 px-6 py-6 lg:px-12 lg:py-6">
                <div className="text-xs font-light uppercase tracking-wider text-stone-400">
                  Área
                </div>
                <div>{project.area}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-20 px-4 md:px-8 xl:px-12">
        {project.projectCategories.edges.length > 0 && (
          <h2 className="font-light uppercase tracking-wider text-lime-600">
            {project.projectCategories.edges[0].node.name}
          </h2>
        )}

        <h1 className="text-5xl font-light uppercase tracking-wider">
          {project.title}
        </h1>

        {project.description && (
          <ProjectDescription description={project.description} />
        )}
      </div>

      <div className="mt-20 px-4 md:px-8 xl:px-12">
        <ProjectImageGrid images={project.images} />
      </div>
    </>
  );
}
