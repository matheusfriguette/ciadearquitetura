"use client";

import { useEffect, useState } from "react";
import { Categories, Project, Projects } from "../_lib/types";
import { ProjectCard } from "./project-card";
import { getProjects } from "../_lib/api";

export function ProjectGrid({
  initialProjects,
  categories,
}: {
  initialProjects: Projects;
  categories: Categories;
}) {
  const [projects, setProjects] = useState<{ node: Project }[]>(
    initialProjects.edges,
  );
  const [categorySlug, setCategorySlug] = useState<string | null | undefined>(
    undefined,
  );
  const [after, setAfter] = useState<string | null>(
    initialProjects.pageInfo.endCursor,
  );
  const [hasNextPage, setHasNextPage] = useState<boolean>(
    initialProjects.pageInfo.hasNextPage,
  );
  const [loading, setLoading] = useState(false);

  const loadProjects = async () => {
    if (!hasNextPage || loading) return;

    setLoading(true);

    try {
      const { edges, pageInfo } = await getProjects(10, after, categorySlug);
      setProjects((prev) => [...prev, ...edges]);
      setAfter(pageInfo.endCursor);
      setHasNextPage(pageInfo.hasNextPage);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 200
    ) {
      loadProjects();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (categorySlug !== undefined) {
      loadProjects();
    }
  }, [categorySlug]);

  const handleCategorySelect = (slug?: string) => {
    setProjects([]);
    setAfter(null);
    setHasNextPage(true);
    setCategorySlug(slug);
  };

  return (
    <>
      <div className="px-4 md:px-8 xl:px-12">
        <h1 className="border-b border-stone-100 pb-1 text-right text-2xl font-light uppercase tracking-wider">
          Projetos
        </h1>

        <ul className="mt-4 flex flex-wrap justify-end gap-4 text-xs tracking-wider sm:gap-8 sm:text-sm">
          <li>
            <button
              onClick={() => handleCategorySelect(null)}
              className={`uppercase ${!categorySlug ? "text-lime-600" : "hover:text-lime-600"}`}
            >
              Todos
            </button>
          </li>
          {categories.nodes.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => handleCategorySelect(category.slug)}
                className={`uppercase ${categorySlug === category.slug ? "text-lime-600" : "hover:text-lime-600"}`}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 md:px-8 xl:px-12">
        {projects.map(({ node: project }) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            location={project.location}
            featuredImage={project.featuredImage}
            slug={project.slug}
          />
        ))}
      </div>

      {loading && (
        <div className="mt-16 flex justify-center" role="status">
          <svg
            aria-hidden="true"
            className="h-12 w-12 animate-spin fill-lime-600 text-stone-200"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Carregando</span>
        </div>
      )}
    </>
  );
}
