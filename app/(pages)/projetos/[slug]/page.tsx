import { getProject } from "../../../_lib/api";
import { ProjectDescription } from "../../../_components/project-description";
import { PROJECT_IMAGES } from "../../../_lib/projects";
import { ProjectImageGrid } from "../../../_components/project-image-grid";

export default async function Page({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  const projectImages = PROJECT_IMAGES;

  return (
    <div>
      <div
        className="aspect-video h-auto w-full bg-cover bg-center md:h-[50vh] md:bg-fixed"
        style={{
          backgroundImage: `url('${project.featuredImage?.node.sourceUrl}')`,
        }}
      ></div>

      <div className="-mt-12 px-4 md:px-8 xl:px-12">
        <div className="flex w-full justify-center lg:justify-end">
          <div className="grid grid-cols-3 border border-stone-100 bg-white">
            <div className="flex flex-col gap-2 px-6 py-6 lg:px-12 lg:py-6">
              <div className="text-xs font-light uppercase tracking-wider text-stone-400">
                Ano
              </div>
              <div>{project.year}</div>
            </div>
            <div className="flex flex-col gap-2 px-6 py-6 lg:px-12 lg:py-6">
              <div className="text-xs font-light uppercase tracking-wider text-stone-400">
                Localização
              </div>
              <div>{project.location}</div>
            </div>
            <div className="flex flex-col gap-2 px-6 py-6 lg:px-12 lg:py-6">
              <div className="text-xs font-light uppercase tracking-wider text-stone-400">
                Área
              </div>
              <div>{project.area}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto my-20 bg-white px-4 md:px-8 xl:px-12">
        <h2 className="font-light uppercase tracking-wider text-lime-600">
          {project.projectCategories.edges[0].node.name}
        </h2>

        <h1 className="text-5xl font-light uppercase tracking-wider">
          {project.title}
        </h1>

        <ProjectDescription description={project.description} />
      </div>

      <div className="px-4 md:px-8 xl:px-12">
        <div className="mt-16">
          <ProjectImageGrid imageUrls={projectImages} />
        </div>
      </div>
    </div>
  );
}
