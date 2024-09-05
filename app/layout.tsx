import localFont from "next/font/local";

import "./index.css";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Cia de Arquitetura - Escritório de Aquitetura em Uberlândia",
  description:
    "Escritório de arquitetura em Uberlândia-MG. Atuamos nas áreas de arquitetura, urbanismo e interiores, desenvolvendo projetos residenciais, comerciais e institucionais. Conheça!",
  keywords:
    "arquiteto, arquitetura, projetos, uberlândia, udi, projeto arquitetonico, cia de arquitetura, projeto residencial, projeto institucional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${metropolis.variable} text-stone-900`}>
      <body>{children}</body>
    </html>
  );
}
