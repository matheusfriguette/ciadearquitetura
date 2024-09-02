"use client"

import { useState } from "react";
import { Image } from "../../../_components/project-image";

export default function Page() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="py-24">
        <div
          className="h-[60vh] w-full bg-cover bg-fixed bg-bottom"
          style={{
            backgroundImage:
              "url('https://ciadearquitetura.com/admin/uploads/galeria/6.varanda_n0va_03.png')",
          }}
        ></div>

        <div className="container mx-auto -mt-12">
          <div className="flex w-full justify-end">
            <div className="flex w-1/6 flex-col gap-2 border-b border-s border-t border-stone-200 bg-white px-12 py-6">
              <div className="text-xs font-light uppercase tracking-widest text-stone-600">
                Ano
              </div>
              <div>2023</div>
            </div>
            <div className="flex w-1/6 flex-col gap-2 border-b border-t border-stone-200 bg-white px-12 py-6">
              <div className="text-xs font-light uppercase tracking-widest text-stone-600">
                Localização
              </div>
              <div>Uberlândia - MG</div>
            </div>
            <div className="flex w-1/6 flex-col gap-2 border-b border-e border-t border-stone-200 bg-white px-12 py-6">
              <div className="text-xs font-light uppercase tracking-widest text-stone-600">
                Área
              </div>
              <div>954 m²</div>
            </div>
          </div>
        </div>

        <div className="container mx-auto my-20 bg-white">
          <h2 className="text-lg font-light uppercase tracking-widest text-lime-600">
            RESIDENCIAL
          </h2>

          <h1 className="mt-1 text-6xl font-semibold">Casa Brisa</h1>

          <button onClick={() => setShowModal(true)}>Open Modal</button>
          {showModal && <Image></Image>}

          <p className="mt-8 text-lg font-light leading-relaxed text-stone-600">
            Com uma horizontalidade marcante, a fachada dessa casa de condomínio
            se diferencia do entorno, de casas verticais, altas e claras. A Casa
            Horizonte combina linhas retas, sutis e modernas com materiais
            naturais. Na vista da fachada, vemos o fechamento das garagens em
            portão basculante ripado, que permite retro-iluminação, dando esse
            efeito charmoso. Recepciona o usuário de forma convidativa e
            minimalista. Nos fundos, temos uma área de lazer generosa, com mesa
            para 14 lugares, piscina em pedra hijau natural, com prainha, área
            livre para as crianças e natureza integrada, e tudo isso pertinho da
            churrasqueira, é tudo que a gente quer, não? A transição entre o
            ambiente coberto e o descoberto da CASA HORIZONTE é tão sutil que
            transmite ao usuário a sensação de estar sempre em um ambiente amplo
            e arejado. Isso porque tivemos o cuidado de esconder o fechamento da
            varanda, impedindo assim que esse se tornasse uma barreira visual.
          </p>
        </div>

        <div className="px-12">
          <div className="mt-16">
            <div className="grid grid-cols-2 gap-2">
              <div className="grid h-full grid-cols-1 gap-2">
                <div className="group relative w-full overflow-hidden">
                  <img
                    className="relative"
                    src="https://ciadearquitetura.com/admin/uploads/galeria/6.varanda_n0va_03.png"
                    alt=""
                  />

                  <div className="absolute inset-0 hidden h-full w-full bg-black/50 group-hover:block"></div>
                </div>
              </div>
              <div className="grid h-full grid-cols-2 gap-2">
                <img
                  className="h-full w-full object-cover"
                  src="https://ciadearquitetura.com/admin/uploads/galeria/6.varanda_n0va_03.png"
                  alt=""
                />
                <img
                  className="h-full w-full object-cover"
                  src="https://ciadearquitetura.com/admin/uploads/galeria/6.varanda_n0va_03.png"
                  alt=""
                />
              </div>
              <div className="grid h-full grid-cols-2 gap-2">
                <img
                  className="h-full w-full object-cover"
                  src="https://ciadearquitetura.com/admin/uploads/galeria/6.varanda_n0va_03.png"
                  alt=""
                />
                <img
                  className="h-full w-full object-cover"
                  src="https://ciadearquitetura.com/admin/uploads/galeria/6.varanda_n0va_03.png"
                  alt=""
                />
              </div>
              <div className="grid h-full grid-cols-1 gap-2">
                <img
                  className="h-full w-full object-cover"
                  src="https://ciadearquitetura.com/admin/uploads/galeria/6.varanda_n0va_03.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="fixed inset-0 z-50 h-screen w-screen bg-black"
        style={{
          backgroundImage:
            "url('https://ciadearquitetura.com/admin/uploads/galeria/6.varanda_n0va_03.png')",
        }}
      ></div> */}
    </>
  );
}
