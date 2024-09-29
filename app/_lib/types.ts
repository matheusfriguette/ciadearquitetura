export interface Projects {
  edges: { node: Project }[];
  pageInfo: {
    endCursor: string | null;
    hasNextPage: boolean;
  };
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
  images: {
    edges: Image[];
  };
  featuredImage: Image;
}

export interface Home {
  images: {
    edges: Image[];
  };
}

export interface AboutUs {
  mainText: string;
  mainImage: Image;
  architectonicProject: string;
  interiorProject: string;
  landscapeProject: string;
  architects: {
    edges: { node: Architect }[];
  };
}

export interface Architect {
  id: string;
  fullName: string;
  description: string;
  image: Image;
}

export interface Contact {
  address: string;
  addressLink: string;
  addressImage: Image;
  email: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  youtube: string;
  pinterest: string;
  tiktok: string;
}

export interface Posts {
  edges: { node: Post }[];
  pageInfo: {
    endCursor: string | null;
    startCursor: string | null;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export interface Categories {
  nodes: {
    id: string;
    name: string;
    slug: string;
  }[];
}

export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  featuredImage: Image;
  content: string;
}

interface Image {
  node: {
    id: string;
    sourceUrl: string;
    mediaDetails: {
      height: number;
      width: number;
    };
  };
}
