import { Carousel } from "flowbite-react";
import Link from "next/link";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

const theme: CustomFlowbiteTheme = {
  carousel: {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
      snap: "snap-x",
    },
  },
};

export default function Page() {
  return (
    <Flowbite theme={{ theme: theme }}>
      <div className="relative h-screen w-screen">
        <nav className="absolute px-4 pt-48 md:hidden z-10">
          <ul className="z-40 flex flex-col gap-12 text-lg tracking-wider text-white">
            <li>
              <Link className="hover:text-lime-400" href="/projetos">
                PROJETOS
              </Link>
            </li>
            <li>
              <Link className="hover:text-lime-400" href="/escritorio">
                ESCRITÓRIO
              </Link>
            </li>
            <li>
              <Link className="hover:text-lime-400" href="/contato">
                CONTATO
              </Link>
            </li>
          </ul>
        </nav>

        <Carousel slideInterval={5000}>
          <div
            className="h-screen w-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://ciadearquitetura.com/assets/imagens/fundos/fundo-9.jpg')",
            }}
          ></div>
          <div
            className="h-screen w-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://ciadearquitetura.com/assets/imagens/fundos/fundo-5.jpg')",
            }}
          ></div>
          <div
            className="h-screen w-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://ciadearquitetura.com/assets/imagens/fundos/fundo-11.jpg')",
            }}
          ></div>
        </Carousel>
      </div>
    </Flowbite>
  );
}
