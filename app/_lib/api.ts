import { Project, ProjectsDTO } from "./types";

const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllProjects(): Promise<ProjectsDTO> {
  const data = await fetchAPI(`
    query AllProjects {
      projects {
        edges {
          node {
            id
            slug
            title
            location
            projectCategories {
              edges {
                node {
                  id,
                  name
                }
              }
            }
            featuredImage {
              node {
                id
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  return data.projects;
}

export async function getProject(slug: string): Promise<Project> {
  const data = await fetchAPI(
    `
    query Project($slug: ID!) {
      project(id: $slug, idType: SLUG) {
        id
        title
        year
        location
        area
        description
        projectCategories {
          edges {
            node {
              id,
              name
            }
          }
        }
        featuredImage {
          node {
            id
            sourceUrl
          }
        }
      }
    }
    `,
    {
      variables: { slug },
    },
  );

  return data.project;
}
