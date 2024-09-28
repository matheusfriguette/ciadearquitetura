import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TransitionLink } from "./transition-link";

interface Props {
  title: string;
  location: string;
  imageUrl: string;
  slug: string;
}

export function ProjectCard({ title, location, imageUrl, slug }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <TransitionLink
        className="group relative w-full"
        href={`/projetos/${slug}`}
      >
        <img
          src={imageUrl}
          className="aspect-video w-full cursor-pointer object-cover transition duration-700 ease-out group-hover:scale-110"
          alt="Imagem renderizada do projeto"
        />

        <div className="absolute inset-0 hidden h-full w-full items-center justify-center bg-lime-950/70 group-hover:flex">
          <div className="flex flex-col items-center gap-2 text-white">
            <div className="text-2xl font-light uppercase tracking-wider">
              {title}
            </div>
            <div className="text-sm">{location}</div>
          </div>
        </div>
      </TransitionLink>
    </motion.div>
  );
}
