import Link from "next/link";

export default function Page() {
  return (
    <div className="px-4 md:px-8 xl:px-12">
      <h1 className="border-b border-stone-100 pb-1 text-right text-2xl font-light uppercase tracking-wider">
        Blog
      </h1>

      <div className="mt-20 flex flex-col gap-20 lg:flex-row">
        <div className="w-full lg:w-3/4">
          <article className="prose prose-stone lg:prose-xl">
            <h2>
              O que é BIM e por que seu projeto deveria ser feito nesse Método
            </h2>
            <div>
              <figure className="wp-block-image">
                <img
                  src="https://blog.ciadearquitetura.com/wp-content/uploads/2023/08/bim_arquitetura_uberlandia_projetos_condomínio_alto-padrão_interiores_obra_residencial.jpg"
                  alt=""
                  className="wp-image-247"
                  srcSet="https://blog.ciadearquitetura.com/wp-content/uploads/2023/08/bim_arquitetura_uberlandia_projetos_condomínio_alto-padrão_interiores_obra_residencial.jpg 750w, https://blog.ciadearquitetura.com/wp-content/uploads/2023/08/bim_arquitetura_uberlandia_projetos_condomínio_alto-padrão_interiores_obra_residencial-150x150.jpg 150w, https://blog.ciadearquitetura.com/wp-content/uploads/2023/08/bim_arquitetura_uberlandia_projetos_condomínio_alto-padrão_interiores_obra_residencial-300x300.jpg 300w"
                  sizes="(max-width: 750px) 100vw, 750px"
                />
              </figure>
              <h2 />
              <p>
                Se você está envolvido na indústria da construção, provavelmente
                já ouviu falar do BIM (Building Information Modeling), mas você
                sabe exatamente o que é e por que é tão importante? Neste
                artigo, vamos explorar o conceito de BIM e discutir por que é
                importante você contratar um escritório de arquitetura que
                utilize esse método inovador em seus projetos de construção.
              </p>
              <h3>
                <strong>O que é esse tal de BIM?</strong>
                <br />
              </h3>
              <p>
                O Building Information Modeling, ou BIM, é uma abordagem
                revolucionária para o projeto, construção e gerenciamento de
                edifícios e infraestruturas. Ele envolve a criação e o uso de{" "}
                <strong>modelos digitais precisos</strong> e detalhados que
                contêm informações sobre cada aspecto do projeto.
              </p>
              <h3>
                <strong>Como o BIM Funciona?</strong>
              </h3>
              <p>
                O BIM opera com base em modelos tridimensionais que contêm
                informações geométricas e de atributos. Esses modelos podem ser
                enriquecidos com dados como prazos, custos e especificações dos
                materiais. Desta forma as informações não se perdem, uma vez que
                estão i<strong>ntrínsecas ao modelo</strong>, serão atualizadas
                quando o mesmo for modificado.
              </p>
              <p>
                <strong>Investir em treinamento</strong> é essencial para
                maximizar os benefícios do BIM, capacitando os profissionais a
                utilizar todas as funcionalidades dessa tecnologia. No início
                isto tomará tempo valioso do seu escritório, porém é de suma
                importancia, afinal o BIM traz uma série de vantagens
                significativas para a indústria da construção. Alguns dos
                principais benefícios incluem:
              </p>
              <h4>
                <strong>Colaboração Aprimorada entre as Equipes</strong>
              </h4>
              <p>
                O BIM permite que arquitetos, engenheiros, empreiteiros e outras
                partes interessadas colaborem de maneira mais eficaz ao
                compartilhar um modelo centralizado. Isso reduz erros de
                comunicação e conflitos, resultando em um fluxo de trabalho mais
                harmonioso. <br />A colaboração é um aspecto fundamental do
                sucesso de qualquer projeto de construção, e o BIM facilita esse
                processo ao fornecer uma plataforma centralizada para troca de
                informações.{" "}
              </p>
              <h4>
                <strong>Redução de Custos e Tempo</strong>
              </h4>
              <p>
                Ao permitir a visualização antecipada do projeto e a detecção de
                possíveis problemas, o BIM ajuda a evitar retrabalhos
                dispendiosos. Além disso, a capacidade de simular diferentes
                cenários contribui para a otimização dos recursos e a redução do
                tempo de construção.
              </p>
              <h4>
                <strong>Melhoria na Tomada de Decisões</strong>
              </h4>
              <p>
                Com informações detalhadas disponíveis no modelo BIM, as
                decisões podem ser embasadas em dados concretos. Isso leva a
                escolhas mais informadas e reduz a probabilidade de surpresas
                desagradáveis durante a construção.
              </p>
              <h4>
                <strong>Minimizando Conflitos e Erros</strong>
              </h4>
              <p>
                O BIM permite a detecção precoce de conflitos entre diferentes
                sistemas, como elétrico e hidráulico, evitando erros que
                poderiam surgir mais tarde. Isso resulta em um processo mais
                suave e menos interrupções.
                <br />
                Um dos principais atrativos do BIM é sua capacidade de reduzir
                custos e economizar tempo, beneficiando tanto os proprietários
                quanto os profissionais envolvidos.{" "}
              </p>
              <h4>
                <strong>Sustentabilidade</strong>
              </h4>
              <p>
                A abordagem do BIM está alinhada com princípios sustentáveis,
                permitindo a análise de alternativas de projeto que promovam a
                eficiência energética e a redução do impacto ambiental.
              </p>
              <p>
                Apesar de seus benefícios, a adoção do BIM pode apresentar
                desafios, como a necessidade de treinamento adequado e a
                atualização das práticas de trabalho.
              </p>
              <h4>
                <strong>O BIM no escritório</strong>
              </h4>
              <p>
                {" "}
                Aqui na Cia de Arquitetura já incorporamos de maneira
                proeminente a metodologia BIM em nossas abordagens de projeto{" "}
                <strong>desde 2018</strong>. O BIM representa uma transformação
                essencial na concepção, execução e manutenção de projetos de
                construção, e a Cia aproveita essa metodologia para aprimorar
                ainda mais sua capacidade de colaboração, reduzir custos e
                otimizar decisões e entregar os melhores resultados para nossos
                clientes. Com um compromisso firme com a excelência na
                construção, consideramos o BIM uma ferramenta indispensável para
                nossos projetos arquitetônicos.
              </p>
              <hr className="wp-block-separator" />
            </div>
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
