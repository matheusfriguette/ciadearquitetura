import Link from "next/link";

interface Props {
  transparent?: boolean;
}

export function Header({ transparent = false }: Props) {
  const bgColor = transparent ? "bg-transparent" : "bg-white";
  const textColor = transparent ? "text-white" : "text-stone-900";
  const textHoverColor = transparent
    ? "hover:text-lime-400"
    : "hover:text-lime-600";

  return (
    <header className={`w-full ${bgColor}`}>
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <img
            className="h-32"
            src="https://ciadearquitetura.com/img/logomarca.png"
            alt=""
          />
        </Link>

        <nav>
          <ul
            className={`flex gap-12 text-sm font-light tracking-widest ${textColor}`}
          >
            <li>
              <Link className={textHoverColor} href="/projetos">
                PROJETOS
              </Link>
            </li>
            <li>
              <Link className={textHoverColor} href="/escritorio">
                ESCRITÓRIO
              </Link>
            </li>
            <li>
              <Link className={textHoverColor} href="/contato">
                CONTATO
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
