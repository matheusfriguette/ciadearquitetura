import { Carousel } from "flowbite-react";
import Link from "next/link";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { getHome } from "../_lib/api";

const theme: CustomFlowbiteTheme = {
  carousel: {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
      snap: "snap-x",
    },
  },
};

export default async function Page() {
  const home = await getHome();

  return (
    <Flowbite theme={{ theme: theme }}>
      <div className="relative h-screen w-screen">
        <nav className="absolute z-10 px-4 pt-48 md:hidden">
          <ul className="z-40 flex flex-col gap-8 text-lg tracking-wider text-white">
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
          {home.images.edges.map(({ node: image }) => (
            <div
              key={image.id}
              className="h-screen w-screen bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}')`,
              }}
            ></div>
          ))}
        </Carousel>
      </div>
    </Flowbite>
  );
}
