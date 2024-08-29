import localFont from "next/font/local";

import "./index.css";
import Link from "next/link";

const metropolis = localFont({
  src: [
    {
      path: "./fonts/Metropolis-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Metropolis-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Metropolis-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Metropolis-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Metropolis-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Metropolis-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Metropolis-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Metropolis-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Metropolis-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Metropolis-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-metropolis",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${metropolis.variable} text-stone-900`}>
      <body>
        <header className="fixed z-20 w-full bg-white shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            <img className="h-24" src="/logo.png" alt="" />

            <nav>
              <ul className="flex gap-12 text-sm font-light tracking-widest text-stone-900">
                <li>
                  <Link className="hover:text-lime-600" href="/projetos">
                    PROJETOS
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-lime-600" href="/escritorio">
                    ESCRITÓRIO
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-lime-600" href="/contato">
                    CONTATO
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="bg-white">{children}</div>
      </body>
    </html>
  );
}
