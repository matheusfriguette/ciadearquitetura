import Link from "next/link";

export default function Page() {
  return (
    <div className="px-4 md:px-8 xl:px-12">
      <h1 className="border-b border-stone-100 pb-1 text-right text-2xl font-light uppercase tracking-wider">
        Blog
      </h1>

      <div className="mt-20 flex flex-col gap-20 lg:flex-row">
        <div className="w-full lg:w-3/4">
          <div className="columns-1 gap-4 md:columns-2">
            <Link
              href="/blog/post"
              className="group mb-4 block h-auto border border-stone-100 p-6 hover:bg-stone-100"
            >
              <h2 className="text-xl font-semibold leading-relaxed text-stone-600 group-hover:text-lime-600">
                O que é BIM e por que seu projeto deveria ser feito nesse Método
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

                <div>14 de agosto de 2023</div>
              </div>

              <p className="mt-4 text-justify font-light leading-relaxed text-stone-600">
                Se você está envolvido na indústria da construção, provavelmente
                já ouviu falar do BIM (Building Information Modeling), mas você
                sabe exatamente o que é e por que é tão importante? Neste
                artigo, vamos explorar o conceito de BIM e discutir por que é
                importante você contratar um escritório de arquitetura que
                utilize esse método inovador em seus projetos de construção.
              </p>
            </Link>

            <Link
              href="/blog/post"
              className="block h-auto border border-stone-100 p-6 hover:bg-stone-100"
            >
              <img
                className="mb-4 w-full"
                src="https://blog.ciadearquitetura.com/wp-content/uploads/2018/09/Tensoflex_Mostra_Black_Guilherme_Torres-768x505.jpg"
                alt=""
              />

              <h2 className="text-xl font-semibold leading-relaxed text-stone-600 group-hover:text-lime-600">
                Telas tensionadas na iluminação de ambientes internos.
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

                <div>14 de agosto de 2023</div>
              </div>

              <p className="mt-4 text-justify font-light leading-relaxed text-stone-600">
                Antes restritas a ambientes comerciais como shoppings e
                aeroportos, as telas tensionadas vem conquistando cada vez mais
                espaço na arquitetura residencial. Vendo alguns exemplos de sua
                aplicação não é difícil entender o porquê.
              </p>
            </Link>

            <Link
              href="/blog/post"
              className="group mb-4 block h-auto border border-stone-100 p-6 hover:bg-stone-100"
            >
              <h2 className="text-xl font-semibold leading-relaxed text-stone-600 group-hover:text-lime-600">
                O que é Hygge e o que isso tem a ver com o pensar a
                arquitetura!?
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

                <div>14 de agosto de 2023</div>
              </div>

              <p className="mt-4 text-justify font-light leading-relaxed text-stone-600">
                E aí? Você já ouviu, leu, se deparou com a hashtag hygge
                enquanto passeava por alguma rede social? Hygge (pronuncia-se
                “ruuga”) é uma palavra de origem escandinava que não tem uma
                tradução exata para o português. Está relacionada ao
                acolhimento, aconchego, em suma, tudo o que pode trazer conforto
                e sensação de bem-estar.
              </p>
            </Link>

            <Link
              href="/blog/post"
              className="group mb-4 block h-auto border border-stone-100 p-6 hover:bg-stone-100"
            >
              <img
                className="mb-4 w-full"
                src="https://blog.ciadearquitetura.com/wp-content/uploads/2017/07/post-ciadearquitetura-arquitetura-planejamento-urbano-expo-2017-arquitetura-curitiba-1002x564-825x510.jpg"
                alt=""
              />

              <h2 className="text-xl font-semibold leading-relaxed text-stone-600 group-hover:text-lime-600">
                Rios Urbanos
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

                <div>14 de agosto de 2023</div>
              </div>
              <p className="mt-4 text-justify font-light leading-relaxed text-stone-600">
                Não é de hoje que se fala em reabrir rios canalizados, ou
                requalificar rios urbanos. Casos como o do rio Tâmisa na
                Inglaterra, Sena na França ou do rio Han na Coréia do Sul são
                exemplos de que é possível, e têm inspirado outras cidades. C
                omo é o caso de Milão, onde há pouco, o prefeito Giuseppe Sala
                propôs reabrir os canais navegáveis do bairro de Navigli.
              </p>
            </Link>
          </div>
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
