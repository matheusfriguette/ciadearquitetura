import Link from "next/link";
import { getPost } from "../../../_lib/api";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <div className="px-4 md:px-8 xl:px-12">
      <h1 className="border-b border-stone-100 pb-1 text-right text-2xl font-light uppercase tracking-wider">
        Blog
      </h1>

      <div className="mt-20 flex flex-col gap-20 lg:flex-row">
        <div className="w-full lg:w-3/4">
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
            <li>
              <Link
                href="/blog"
                className="text-sm font-light uppercase tracking-wider text-stone-600 hover:text-lime-600"
              >
                Acontece na Cia
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm font-light uppercase tracking-wider text-stone-600 hover:text-lime-600"
              >
                Ambientes Pequenos
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm font-light uppercase tracking-wider text-stone-600 hover:text-lime-600"
              >
                Curiosidades e Bons Exemplos
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm font-light uppercase tracking-wider text-stone-600 hover:text-lime-600"
              >
                Design de Interiores
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm font-light uppercase tracking-wider text-stone-600 hover:text-lime-600"
              >
                Dicas
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm font-light uppercase tracking-wider text-stone-600 hover:text-lime-600"
              >
                Eventos
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm font-light uppercase tracking-wider text-stone-600 hover:text-lime-600"
              >
                Materiais e Revestimentos
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm font-light uppercase tracking-wider text-stone-600 hover:text-lime-600"
              >
                Notícias
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm font-light uppercase tracking-wider text-stone-600 hover:text-lime-600"
              >
                Projetos Comerciais
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm font-light uppercase tracking-wider text-stone-600 hover:text-lime-600"
              >
                Projetos Residenciais
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm font-light uppercase tracking-wider text-stone-600 hover:text-lime-600"
              >
                Reformas | Antes e Depois
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
