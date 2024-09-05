export default function Page() {
  return (
    <div>
      <div className="container">
        <h1 className="border-b border-stone-200 pb-1 text-right text-2xl font-light uppercase tracking-wider">
          Escritório
        </h1>

        <div className="mt-20 grid grid-cols-3 gap-8">
          <div className="col-span-3 md:col-span-1">
            <div className="flex justify-center">
              <img
                className="w-2/3 md:w-full"
                src="https://ciadearquitetura.com/admin/uploads/imgPrincipal/erick_riul_alessandra_diamante_arquitetura_alto_padrao_interiores.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="text-justify text-lg font-light leading-relaxed text-stone-600">
              <p>
                A Cia de Arquitetura surge em 2008 a partir da união de jovens
                arquitetos apaixonados pelo poder transformador do design e da
                arquitetura. Hoje, com 15 anos de experiência, somos um
                escritório consolidado em Uberlândia, trazendo inovação e
                expertise para cada projeto que abraçamos.
              </p>
              <p className="mt-4">
                Temos o prazer de trabalhar em projetos tanto no Brasil quanto
                no exterior, oferecendo soluções arquitetônicas que proporcionam
                experiências únicas aos nossos clientes. Nosso compromisso com a
                agilidade e atenção aos detalhes garante que cada projeto seja
                executado com excelência, independentemente de sua localização.
              </p>
              <p className="mt-4">
                Estamos prontos para te receber em nossa sede, na zona sul de
                Uberlândia. Com uma arquitetura minimalista e cercada de verde,
                é um lugar acolhedor que reflete nossa identidade. Um espaço
                inspirador onde as ideias ganham vida.
              </p>
              <p className="mt-4">
                Somos uma equipe robusta que conta com três arquitetos, o que
                nos permite acompanhar de perto todas as etapas do seu projeto,
                resultando em soluções criativas, personalizadas e de alta
                qualidade.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-20 w-full bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://lp.ciadearquitetura.com/wp-content/uploads/2023/07/antes-de-contratar-3-1.webp')",
        }}
      >
        <div className="container py-40">
          <h2 className="text-3xl font-light uppercase tracking-wider text-white">
            O que fazemos
          </h2>
        </div>
      </div>

      <div className="container -mt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="flex flex-col items-center border border-stone-200 bg-white p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-12 text-lime-600"
            >
              <path d="M14 22H9v-2h3v-5h6v5h2v-7.178l-5.029-4.22-7.769 6.606-2.398-2.521L2 14.863V22l-2-.001V14l4.989-4.02 2.359 2.481 7.618-6.478L22 11.895V22h-6v-5h-2v5zm-6-1v1H3v-1h5zm-5-2h5v1H3v-1zm0-2h5v1H3v-1zM15 2l9 7.655-1.338 1.494-7.677-6.489-7.569 6.456-1.428-1.465L15 2z" />
            </svg>

            <div className="mt-4 font-medium uppercase">
              Projeto arquitetônico
            </div>
            <div className="mt-2 text-center font-light text-stone-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lobortis tortor vitae nunc pharetra cursus.
            </div>
          </div>
          <div className="flex flex-col items-center border border-stone-200 bg-white p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-12 text-lime-600"
            >
              <path d="M24 23H4c-2.208 0-4-1.792-4-4V3.306C.313 2.235 1.285 1 3 1c1.855 0 2.769 1.342 2.995 2.312L6 5h18v18zM22 7H6v11s-.587-1-1.922-1C2.974 17 2 17.896 2 19s.896 2 2 2h18V7zm-2 12H8V9h12v10zm-8-9H9v8h10v-8h-6v3h6v1h-2v3h-1v-3h-3v3h-1v-7z" />
            </svg>

            <div className="mt-4 font-medium uppercase">
              Projeto de interiores
            </div>
            <div className="mt-2 text-center font-light text-stone-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lobortis tortor vitae nunc pharetra cursus.
            </div>
          </div>
          <div className="flex flex-col items-center border border-stone-200 bg-white p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-12 text-lime-600"
            >
              <path d="M13 24h-2v-4.829a5.834 5.834 0 0 1-1.951-.895c-.5.15-1.019.225-1.549.225-3.033 0-5.5-2.505-5.5-5.584 0-1.283.421-2.494 1.197-3.477A4.271 4.271 0 0 1 2.9 7.875c0-2.025 1.403-3.721 3.298-4.12C7.24 1.485 9.499 0 12 0c2.501 0 4.761 1.485 5.803 3.756 1.894.398 3.297 2.094 3.297 4.119 0 .54-.102 1.07-.296 1.565A5.574 5.574 0 0 1 22 12.917c0 3.079-2.468 5.584-5.5 5.584a5.387 5.387 0 0 1-1.545-.224 5.52 5.52 0 0 1-1.955.908V24zm-3.45-8.081c.948 1.371 2.191 1.384 2.506 1.384.341 0 1.567-.075 2.395-1.384.701.416 2.891 1.161 4.494-.438 1.389-1.392 1.615-4.14-.617-5.726 1.118-1.212.803-2.311.567-2.824-.343-.748-1.085-1.334-2.524-1.293C15.955 3.658 13.909 2 12 2c-1.894 0-3.986 1.616-4.37 3.638-1.245-.028-2.052.523-2.368 1.007-.325.5-.667 1.812.41 3.11-2.188 1.862-1.99 4.352-.616 5.726 1.866 1.864 4.011.648 4.494.438z" />
            </svg>

            <div className="mt-4 font-medium uppercase">
              Projeto paisagístico
            </div>
            <div className="mt-2 text-center font-light text-stone-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lobortis tortor vitae nunc pharetra cursus.
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-20">
        <h2 className="text-3xl font-light uppercase tracking-wider">
          Veja quem acompanhará o seu projeto de pertinho
        </h2>

        <div className="mt-20 flex flex-col justify-around gap-4 md:flex-row">
          <div className="w-full md:w-1/4">
            <img
              src="https://lp.ciadearquitetura.com/wp-content/uploads/2023/07/Frame-15-5.webp"
              alt=""
            />
            <div className="mt-8 text-center text-xl font-medium">
              Erick Riul
            </div>
            <div className="mt-4 text-justify font-light leading-relaxed text-stone-600">
              Arquiteto e Urbanista, formado em em 2013 pela Universidade
              Federal de Uberlândia. Participou da 7ª Bienal Internacional de
              Arquitetura de São Paulo em 2007 e teve um projeto contemplado com
              o segundo lugar na VI Bienal José Miguel Aroztegui, no Concurso
              Estudantil Íbero-Americano de Arquitetura Bioclimática em 2009.
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <img
              src="http://lp.ciadearquitetura.com/wp-content/uploads/2023/07/Frame-15-1.webp"
              alt=""
            />
            <div className="mt-8 text-center text-xl font-medium">
              Alessandra Diamante
            </div>
            <div className="mt-4 text-justify font-light leading-relaxed text-stone-600">
              Arquiteta e Urbanista pelo Centro Universitário do Triângulo em
              2003. Pós Graduada em Iluminação e Design de Interiores pela
              Faculdade Castello Branco em 2007.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
