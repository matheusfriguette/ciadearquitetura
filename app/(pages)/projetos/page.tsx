import { ProjectGrid } from "../../_components/project-grid";
import { getProjectCategories, getProjects } from "../../_lib/api";

export default async function Page() {
  const projects = await getProjects(10);
  const categories = await getProjectCategories();

  return <ProjectGrid initialProjects={projects} categories={categories} />;
}
