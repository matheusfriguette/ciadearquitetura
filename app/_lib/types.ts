export interface ProjectsDTO {
  edges: { node: Project }[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  projectCategories: { edges: { node: { id: string; name: string } }[] };
  year: string;
  location: string;
  area: string;
  description: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}
