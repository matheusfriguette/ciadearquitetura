import localFont from "next/font/local";

import "./index.css";
import { Header } from "./_components/header";

const metropolis = localFont({
  src: [
    {
      path: "./_fonts/Metropolis-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./_fonts/Metropolis-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./_fonts/Metropolis-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_fonts/Metropolis-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./_fonts/Metropolis-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./_fonts/Metropolis-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./_fonts/Metropolis-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./_fonts/Metropolis-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./_fonts/Metropolis-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./_fonts/Metropolis-BoldItalic.woff2",
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
        {children}
        {/* <Header bgColor={'bg-transparent'} />

        <main className="py-40">{children}</main>

        <div id="image-root"></div>

        <div className="fixed bottom-0 w-full bg-white/50 py-4">
          <div className="flex justify-center">
            <a
              className="block hover:text-stone-600"
              href="https://www.instagram.com/ciadearquitetura/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div> */}
      </body>
    </html>
  );
}
