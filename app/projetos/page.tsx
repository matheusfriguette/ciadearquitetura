import Link from "next/link";

export default function Page() {
  return (
    <div className="py-24">
      <div className="container mx-auto mt-20">
        <h1 className="text-5xl font-semibold">Nossos projetos</h1>

        <div>
          <ul className="mt-8 inline-flex gap-4 text-sm uppercase tracking-widest">
            <li>
              <button className="rounded-full border border-stone-200 bg-white px-4 py-2 text-lime-500 font-medium">
                Todos
              </button>
            </li>
            <li>
              <button className="rounded-full border border-stone-200 bg-white px-4 py-2 hover:bg-lime-50">
                Comercial
              </button>
            </li>
            <li>
              <button className="rounded-full border border-stone-200 bg-white px-4 py-2 hover:bg-lime-50">
              Residencial
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-4 px-12">
        <Link
          className="group relative w-full overflow-hidden"
          href="/projetos/projeto"
        >
          <img
            src="https://ciadearquitetura.com/admin/uploads/galeria/6.varanda_n0va_03.png"
            className="aspect-video cursor-pointer object-cover transition duration-700 ease-out group-hover:scale-110"
            alt=""
          />

          <div className="absolute inset-0 hidden h-full w-full items-center justify-center bg-lime-950/70 group-hover:flex">
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="text-3xl font-medium">Casa Brisa</div>
              <div className="text-sm">Uberlândia - MG</div>
            </div>
          </div>
        </Link>
        <Link
          className="group relative w-full overflow-hidden"
          href="/projetos/projeto"
        >
          <img
            src="https://ciadearquitetura.com/admin/uploads/galeria/arquitetura_fachada_uberlandia_represa_interi0res_design_02.png"
            className="aspect-video cursor-pointer object-cover transition duration-700 ease-out group-hover:scale-110"
            alt=""
          />

          <div className="absolute inset-0 hidden h-full w-full items-center justify-center bg-lime-950/70 group-hover:flex">
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="text-3xl font-medium">Casa Brisa</div>
              <div className="text-sm">Uberlândia - MG</div>
            </div>
          </div>
        </Link>
        <Link
          className="group relative w-full overflow-hidden"
          href="/projetos/projeto"
        >
          <img
            src="https://ciadearquitetura.com/admin/uploads/galeria/fachada_casa_varanda_sul_condominio_pedra_natural_cimento_paisagismo_cia_de_arquitetura.jpg"
            className="aspect-video cursor-pointer object-cover transition duration-700 ease-out group-hover:scale-110"
            alt=""
          />

          <div className="absolute inset-0 hidden h-full w-full items-center justify-center bg-lime-950/70 group-hover:flex">
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="text-3xl font-medium">Casa Brisa</div>
              <div className="text-sm">Uberlândia - MG</div>
            </div>
          </div>
        </Link>
        <Link
          className="group relative w-full overflow-hidden"
          href="/projetos/projeto"
        >
          <img
            src="https://ciadearquitetura.com/admin/uploads/galeria/fachada_casa_horizonte_cia_de_arquitetura_casa_brasileira_pedra_natural_paisagismo.png"
            className="aspect-video cursor-pointer object-cover transition duration-700 ease-out group-hover:scale-110"
            alt=""
          />

          <div className="absolute inset-0 hidden h-full w-full items-center justify-center bg-lime-950/70 group-hover:flex">
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="text-3xl font-medium">Casa Brisa</div>
              <div className="text-sm">Uberlândia - MG</div>
            </div>
          </div>
        </Link>
        <Link
          className="group relative w-full overflow-hidden"
          href="/projetos/projeto"
        >
          <img
            src="https://ciadearquitetura.com/admin/uploads/galeria/trancoso_cia_de_arquitetura_area_de_lazer_design_de_interiores_arquiteto_uberlandia_monte_carmelo_estrutura_de_eucalipto_pergolado_.jpg"
            className="aspect-video cursor-pointer object-cover transition duration-700 ease-out group-hover:scale-110"
            alt=""
          />

          <div className="absolute inset-0 hidden h-full w-full items-center justify-center bg-lime-950/70 group-hover:flex">
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="text-3xl font-medium">Casa Brisa</div>
              <div className="text-sm">Uberlândia - MG</div>
            </div>
          </div>
        </Link>
        <Link
          className="group relative w-full overflow-hidden"
          href="/projetos/projeto"
        >
          <img
            src="https://ciadearquitetura.com/admin/uploads/galeria/fachada_casa_oeste_cia_de_arquitetura_casa_brasileira_concreto_iluminacao_paisagismo_cyrela_arquitetos.jpg"
            className="aspect-video cursor-pointer object-cover transition duration-700 ease-out group-hover:scale-110"
            alt=""
          />

          <div className="absolute inset-0 hidden h-full w-full items-center justify-center bg-lime-950/70 group-hover:flex">
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="text-3xl font-medium">Casa Brisa</div>
              <div className="text-sm">Uberlândia - MG</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
