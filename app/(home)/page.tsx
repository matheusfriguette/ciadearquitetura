import Link from "next/link";

export default function Page() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://lp.ciadearquitetura.com/wp-content/uploads/2023/07/antes-de-contratar-3-1.webp')",
      }}
    >
      <nav className="px-4 pt-48">
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
    </div>
  );
}
