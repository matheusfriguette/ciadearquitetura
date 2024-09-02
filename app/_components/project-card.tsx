import Link from "next/link";

interface Props {
  title: string;
  location: string;
  imageUrl: string;
  slug: string;
}

export function ProjectCard({ title, location, imageUrl }: Props) {
  return (
    <Link
      className="group relative w-full overflow-hidden"
      href="/projetos/projeto"
    >
      <img
        src={imageUrl}
        className="aspect-video cursor-pointer object-cover transition duration-700 ease-out group-hover:scale-110"
        alt=""
      />

      <div className="absolute inset-0 hidden h-full w-full items-center justify-center bg-lime-950/70 group-hover:flex">
        <div className="flex flex-col items-center gap-2 text-white">
          <div className="text-3xl font-medium">{title}</div>
          <div className="text-sm">{location}</div>
        </div>
      </div>
    </Link>
  );
}
