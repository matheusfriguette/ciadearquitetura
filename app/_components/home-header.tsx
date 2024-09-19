"use client";

import Link from "next/link";
import { useState } from "react";

interface Props {
  transparent?: boolean;
}

export function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-transparent z-10">
      <div className="px-4 md:px-8 xl:px-12 flex items-center justify-between py-4">
        <Link href="/">
          <img
            className="h-40 md:h-40"
            src="/logo-4.png"
            alt=""
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-12 text-sm font-light tracking-wider text-white">
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
            <li>
              <Link className="hover:text-lime-400" href="/blog">
                BLOG
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={`fixed top-0 z-30 h-screen w-screen bg-black/80 backdrop-blur-sm ${isMenuOpen ? "block" : "hidden"}`}
        onClick={toggleMenu}
      >
        <div className="px-4 flex h-40 items-center justify-end">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-48">
          <ul className="z-40 flex flex-col items-center gap-12 text-lg font-light tracking-wider text-white">
            <li>
              <Link
                className="hover:text-lime-400"
                href="/projetos"
                onClick={toggleMenu}
              >
                PROJETOS
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-lime-400"
                href="/escritorio"
                onClick={toggleMenu}
              >
                ESCRITÓRIO
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-lime-400"
                href="/contato"
                onClick={toggleMenu}
              >
                CONTATO
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-lime-400"
                href="/blog"
                onClick={toggleMenu}
              >
                BLOG
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
