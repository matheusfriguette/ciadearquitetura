export default function Page() {
  return (
    <div className="py-24">
      <div className="container mx-auto my-24">
        <div className="mt-16 flex flex-col justify-between gap-12 lg:flex-row">
          <div className="w-full lg:w-2/5">
            <h1 className="mt-1 text-5xl font-semibold">
              Entre em contato conosco
            </h1>

            <form className="mt-4 grid grid-cols-2 gap-4">
              <input
                className="bg-stone-100 px-6 py-4 focus:outline-1"
                type="text"
                placeholder="Nome"
              />
              <input
                className="bg-stone-100 px-6 py-4 focus:outline-1"
                type="text"
                placeholder="Telefone"
              />
              <input
                className="col-span-2 bg-stone-100 px-6 py-4 focus:outline-1"
                type="text"
                placeholder="E-mail"
              />
              <textarea
                className="col-span-2 bg-stone-100 px-6 py-4 focus:outline-1"
                placeholder="Mensagem"
                rows={4}
              />

              <div className="col-span-2 flex justify-end">
                <button className="flex items-baseline gap-4 bg-stone-900 px-6 py-2 font-light uppercase tracking-wider text-white hover:bg-stone-700">
                  <span>Enviar</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="flex w-full flex-col items-center lg:w-3/5">
            <img className="w-4/5 object-cover" src="/map.png" alt="" />
            <div className="-mt-16 grid grid-cols-1 overflow-hidden border border-stone-200 bg-white px-6 md:grid-cols-3">
              <div className="p-6">
                <div className="text-sm font-medium uppercase tracking-wider">
                  Email
                </div>
                <a
                  className="mt-4 block font-light text-stone-600 hover:text-lime-600"
                  href="mailto:projetos@ciadearquitetura.com"
                  target="_blank"
                >
                  projetos@ciadearquitetura.com
                </a>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium uppercase tracking-wider">
                  WhatsApp
                </div>
                <a
                  className="mt-4 block font-light text-stone-600 hover:text-lime-600"
                  href="https://wa.me//5534999041965?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
                  target="_blank"
                >
                  (34) 99904-1965
                </a>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium uppercase tracking-wider">
                  Redes Sociais
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    className="block text-stone-600 hover:text-lime-600"
                    href="https://www.instagram.com/ciadearquitetura/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
