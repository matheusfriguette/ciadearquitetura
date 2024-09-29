import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h2 className="text-5xl text-lime-600">404</h2>
      <div className="mt-4 text-xl font-light uppercase leading-relaxed text-stone-600">
        Página não encontrada
      </div>
      <Link
        className="mt-12 bg-lime-600 px-6 py-2 font-light uppercase tracking-wider text-white hover:bg-lime-700"
        href="/"
      >
        Voltar para home
      </Link>
    </div>
  );
}
