import { Carousel } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { getHome } from "../_lib/api";
import { TransitionLink } from "../_components/transition-link";
import Image from "next/image";

const theme: CustomFlowbiteTheme = {
  carousel: {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
      snap: "snap-x",
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
  },
};

export const revalidate = 86400;

export default async function Page() {
  const home = await getHome();

  return (
    <Flowbite theme={{ theme: theme }}>
      <div className="relative h-screen w-screen">
        <nav className="absolute z-10 px-4 pt-48 md:hidden">
          <ul className="z-40 flex flex-col gap-8 text-lg tracking-wider text-white">
            <li>
              <TransitionLink className="hover:text-lime-400" href="/projetos">
                PROJETOS
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                className="hover:text-lime-400"
                href="/escritorio"
              >
                ESCRITÓRIO
              </TransitionLink>
            </li>
            <li>
              <TransitionLink className="hover:text-lime-400" href="/contato">
                CONTATO
              </TransitionLink>
            </li>
          </ul>
        </nav>

        <Carousel slideInterval={5000}>
          {home.images.edges.map(({ node: image }) => (
            <div key={image.id} className="relative h-screen w-screen">
              <Image
                width={image.mediaDetails.width}
                height={image.mediaDetails.height}
                className="h-full w-full object-cover object-center"
                src={image.sourceUrl}
                alt="Imagem de capa"
              />

              <div className="absolute inset-0 h-full w-full items-center justify-center bg-black/50"></div>
            </div>
          ))}
        </Carousel>
      </div>
    </Flowbite>
  );
}
