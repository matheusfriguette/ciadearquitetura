import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="container">
        <h1 className="border-b border-stone-200 pb-1 text-right text-2xl font-light uppercase tracking-wider">
          Contato
        </h1>

        <div className="mt-16 flex flex-col justify-between gap-12 lg:flex-row">
          <div className="w-full lg:w-2/5">
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
                rows={6}
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
            <Link
              className="block md:w-4/5"
              href="https://maps.app.goo.gl/14Zd5PFrspR7nZoW9"
              target="_blank"
            >
              <img
                className="w-full"
                src="/map-2.png"
                alt="Mapa com a localização do escritório"
              />
            </Link>
            <div className="mt-4 grid grid-cols-1 gap-6 overflow-hidden border border-stone-200 bg-white p-6 md:grid-cols-2">
              <div>
                <div className="text-sm font-medium uppercase tracking-wider">
                  Endereço
                </div>
                <Link
                  className="mt-4 block font-light text-stone-600 hover:text-lime-600"
                  href="https://maps.app.goo.gl/14Zd5PFrspR7nZoW9"
                  target="_blank"
                >
                  Alameda Paulina Margonari, 320 - Sala 4 Jardim Karaíba,
                  Uberlândia - MG, 38411-206
                </Link>
              </div>
              <div>
                <div className="text-sm font-medium uppercase tracking-wider">
                  Email
                </div>
                <Link
                  className="mt-4 block font-light text-stone-600 hover:text-lime-600"
                  href="mailto:projetos@ciadearquitetura.com"
                  target="_blank"
                >
                  projetos@ciadearquitetura.com
                </Link>
              </div>
              <div>
                <div className="text-sm font-medium uppercase tracking-wider">
                  WhatsApp
                </div>
                <Link
                  className="mt-4 block font-light text-stone-600 hover:text-lime-600"
                  href="https://wa.me//5534999041965?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
                  target="_blank"
                >
                  (34) 99904-1965
                </Link>
              </div>
              <div>
                <div className="text-sm font-medium uppercase tracking-wider">
                  Redes Sociais
                </div>
                <div className="mt-4 flex gap-4">
                  <Link
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
                  </Link>

                  <Link
                    className="block text-stone-600 hover:text-lime-600"
                    href="https://www.facebook.com/ciadearquitetura"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                    </svg>
                  </Link>

                  <Link
                    className="block text-stone-600 hover:text-lime-600"
                    href="https://br.pinterest.com/ciadearquitetur/_saved/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
