import Link from "next/link";
import { getCategories, getPost } from "../../../_lib/api";
import { TransitionLink } from "../../../_components/transition-link";

export const revalidate = 3600;

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  const categories = await getCategories();

  return (
    <div className="px-4 md:px-8 xl:px-12">
      <h1 className="border-b border-stone-100 pb-1 text-right text-2xl font-light uppercase tracking-wider">
        Blog
      </h1>

      <div className="mt-20 flex flex-col gap-20 lg:flex-row">
        <div className="flex w-full justify-center lg:w-3/4">
          <article className="prose prose-stone lg:prose-xl">
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </article>
        </div>

        <div className="w-full lg:w-1/4">
          <div className="text-xl font-light uppercase tracking-wider text-lime-600">
            Categorias
          </div>

          <ul className="mt-8 flex flex-col gap-4">
            {categories.nodes.map((category) => (
              <li key={category.id}>
                <TransitionLink
                  key={category.id}
                  href={`/blog/categoria/${category.slug}`}
                  className={`text-sm font-light uppercase tracking-wider ${params.slug === category.slug ? "text-lime-600" : "text-stone-600 hover:text-lime-600"}`}
                >
                  {category.name}
                </TransitionLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
