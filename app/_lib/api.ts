import {
  AboutUs,
  Categories,
  Contact,
  Home,
  Post,
  Posts,
  Project,
  Projects,
} from "./types";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Basic " + Buffer.from("basketball" + ":" + "brainy").toString("base64"),
  };

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

export async function getProjects(
  first: number,
  after?: string,
  categorySlug?: string,
): Promise<Projects> {
  const data = await fetchAPI(
    `
    query Projects($first: Int!, $after: String) {
      projects(
         where: {
          ${categorySlug ? `taxQuery: { relation: AND, taxArray: { taxonomy: PROJECT_CATEGORY, terms: "${categorySlug}", field: SLUG } }` : ``}
        }
        first: $first
        after: $after
      ) {
        edges {
          node {
            id
            slug
            title
            location
            featuredImage {
              node {
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `,
    {
      variables: { first, after, categorySlug },
    },
  );

  return data.projects;
}

export async function getProjectCategories(): Promise<Categories> {
  const data = await fetchAPI(
    `
    query Categories {
      projectCategories(first: 100, where: {hideEmpty: true}) {
        nodes {
          id
          name
          slug
        }
      }
    }
    `,
  );

  return data.projectCategories;
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
        featuredImage {
          node {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
        projectCategories {
          edges {
            node {
              id
              name
            }
          }
        }
        images(first: 30) {
          edges {
            node {
              id
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
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

export async function getHome(): Promise<Home> {
  const data = await fetchAPI(
    `
    query Home($slug: ID!) {
      home(id: $slug, idType: SLUG) {
        images {
          edges {
            node {
              id
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }
    }
    `,
    {
      variables: { slug: "auto-draft" },
    },
  );

  return data.home;
}

export async function getAboutUs(): Promise<AboutUs> {
  const data = await fetchAPI(
    `
    query AboutUs($slug: ID!) {
      aboutUs(id: $slug, idType: SLUG) {
        mainText
        mainImage {
          node {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
        architectonicProject
        interiorProject
        landscapeProject
      }
    }
    `,
    {
      variables: { slug: "auto-draft" },
    },
  );

  return data.aboutUs;
}

export async function getContact(): Promise<Contact> {
  const data = await fetchAPI(
    `
    query Contact($slug: ID!) {
      contact(id: $slug, idType: SLUG) {
        address
        addressLink
        addressImage {
          node {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
        email
        whatsapp
        instagram
        facebook
        youtube
        pinterest
        tiktok
      }
    }
    `,
    {
      variables: { slug: "auto-draft" },
    },
  );

  return data.contact;
}

export async function getPosts(
  first?: number,
  after?: string,
  before?: string,
  last?: number,
): Promise<Posts> {
  const data = await fetchAPI(
    `
    query Posts($first: Int, $after: String, $last: Int, $before: String) {
      posts(first: $first, after: $after, last: $last, before: $before) {
        edges {
          node {
            id
            title
            date
            excerpt
            slug
            featuredImage {
              node {
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
        pageInfo {
          endCursor 
          startCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
    `,
    {
      variables: { first, after, before, last },
    },
  );

  return data.posts;
}

export async function getCategories(): Promise<Categories> {
  const data = await fetchAPI(
    `
    query Categories {
      categories(first: 100, where: {hideEmpty: true}) {
        nodes {
          id
          name
          slug
        }
      }
    }
    `,
  );

  return data.categories;
}

export async function getPostsByCategory(
  categoryName: string,
  first?: number,
  after?: string,
  before?: string,
  last?: number,
): Promise<Posts> {
  const data = await fetchAPI(
    `
    query Posts($categoryName: String, $first: Int, $after: String, $last: Int, $before: String) {
      posts(where: {categoryName: $categoryName}, first: $first, after: $after, last: $last, before: $before) {
        edges {
          node {
            id
            title
            date
            excerpt
            slug
            featuredImage {
              node {
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
        pageInfo {
          endCursor 
          startCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
    `,
    {
      variables: { categoryName, first, after, before, last },
    },
  );

  return data.posts;
}

export async function getPost(slug): Promise<Post> {
  const data = await fetchAPI(
    `
    query Post($slug: ID!) {
      post(id: $slug, idType: SLUG) {
      	title
      	content
      }
    }
    `,
    {
      variables: { slug },
    },
  );

  return data.post;
}
