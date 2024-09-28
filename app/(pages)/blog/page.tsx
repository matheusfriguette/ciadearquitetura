import { getCategories, getPosts } from "../../_lib/api";
import { formatDate } from "../../_lib/utils";
import Image from "next/image";
import { TransitionLink } from "../../_components/transition-link";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    after?: string;
    before?: string;
  };
}) {
  const column1 = [];
  const column2 = [];

  const posts = await getPosts(
    searchParams.before ? null : 10,
    searchParams.after || null,
    searchParams.before || null,
    searchParams.before ? 10 : null,
  );
  const categories = await getCategories();

  posts.edges.forEach(({ node: post }, index) => {
    if (index % 2 === 0) {
      column1.push(post);
    } else {
      column2.push(post);
    }
  });

  return (
    <div className="px-4 md:px-8 xl:px-12">
      <h1 className="border-b border-stone-100 pb-1 text-right text-2xl font-light uppercase tracking-wider">
        Blog
      </h1>

      <div className="mt-20 flex flex-col gap-20 lg:flex-row">
        <div className="w-full lg:w-3/4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              {column1.map((post) => (
                <TransitionLink
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block break-inside-avoid border border-stone-100 p-6 hover:bg-stone-100"
                >
                  {post.featuredImage && (
                    <Image
                      className="mb-4 w-full"
                      src={post.featuredImage.node.sourceUrl}
                      width={post.featuredImage.node.mediaDetails.width}
                      height={post.featuredImage.node.mediaDetails.height}
                      alt=""
                    />
                  )}

                  <h2 className="text-xl font-semibold leading-relaxed text-stone-600 group-hover:text-lime-600">
                    {post.title}
                  </h2>

                  <div className="mt-4 flex items-start gap-2 text-stone-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>

                    <div>{formatDate(post.date)}</div>
                  </div>

                  <div
                    className="mt-4 text-justify font-light leading-relaxed text-stone-600"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  ></div>
                </TransitionLink>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {column2.map((post) => (
                <TransitionLink
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block break-inside-avoid border border-stone-100 p-6 hover:bg-stone-100"
                >
                  {post.featuredImage && (
                    <Image
                      className="mb-4 w-full"
                      src={post.featuredImage.node.sourceUrl}
                      width={post.featuredImage.node.mediaDetails.width}
                      height={post.featuredImage.node.mediaDetails.height}
                      alt=""
                    />
                  )}

                  <h2 className="text-xl font-semibold leading-relaxed text-stone-600 group-hover:text-lime-600">
                    {post.title}
                  </h2>

                  <div className="mt-4 flex items-start gap-2 text-stone-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>

                    <div>{formatDate(post.date)}</div>
                  </div>

                  <div
                    className="mt-4 text-justify font-light leading-relaxed text-stone-600"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  ></div>
                </TransitionLink>
              ))}
            </div>
          </div>

          <div className="mt-20 flex justify-end gap-4">
            {posts.pageInfo.hasPreviousPage && (
              <TransitionLink
                className="bg-stone-900 px-6 py-2 font-light uppercase tracking-wider text-white hover:bg-stone-600"
                href={`/blog?before=${posts.pageInfo.startCursor}`}
              >
                <button>Página anterior</button>
              </TransitionLink>
            )}

            {posts.pageInfo.hasNextPage && (
              <TransitionLink
                className="bg-stone-900 px-6 py-2 font-light uppercase tracking-wider text-white hover:bg-stone-600"
                href={`/blog?after=${posts.pageInfo.endCursor}`}
              >
                <button>Próxima página</button>
              </TransitionLink>
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/4">
          <div className="text-xl font-light uppercase tracking-wider text-lime-600">
            Categorias
          </div>

          <ul className="mt-8 flex flex-col gap-4">
            {categories.nodes.map((category) => (
              <li>
                <TransitionLink
                  key={category.id}
                  href={`/blog/categoria/${category.slug}`}
                  className="text-sm font-light uppercase tracking-wider text-stone-600 hover:text-lime-600"
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
