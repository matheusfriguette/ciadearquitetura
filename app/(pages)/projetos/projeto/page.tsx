import { ProjectDescription } from "../../../_components/project-description";
import { ProjectImageCard } from "../../../_components/project-image-card";
import { PROJECT_IMAGES } from "../../../_lib/projects";

export default function Page() {
  const projectImages = PROJECT_IMAGES;

  return (
    <div>
      <div
        className="aspect-video h-auto w-full bg-cover bg-center md:h-[50vh] md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://ciadearquitetura.com/admin/uploads/galeria/fachada_casa_horizonte_cia_de_arquitetura_casa_brasileira_pedra_natural_paisagismo.png')",
        }}
      ></div>

      <div className="container -mt-12">
        <div className="flex w-full justify-center lg:justify-end">
          <div className="grid grid-cols-3 border border-stone-200 bg-white">
            <div className="flex flex-col gap-2 px-6 py-6 lg:px-12 lg:py-6">
              <div className="text-xs font-light uppercase tracking-wider text-stone-400">
                Ano
              </div>
              <div>2019</div>
            </div>
            <div className="flex flex-col gap-2 px-6 py-6 lg:px-12 lg:py-6">
              <div className="text-xs font-light uppercase tracking-wider text-stone-400">
                Localização
              </div>
              <div>João Pinheiro - MG</div>
            </div>
            <div className="flex flex-col gap-2 px-6 py-6 lg:px-12 lg:py-6">
              <div className="text-xs font-light uppercase tracking-wider text-stone-400">
                Área
              </div>
              <div>411,56 m²</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-20 bg-white">
        <h2 className="font-light uppercase tracking-wider text-lime-600">
          RESIDENCIAL
        </h2>

        <h1 className="text-5xl font-light uppercase tracking-wider">
          Casa Horizonte
        </h1>

        <ProjectDescription description="Com uma horizontalidade marcante, a fachada dessa casa de condomínio se diferencia do entorno, de casas verticais, altas e claras. A Casa Horizonte combina linhas retas, sutis e modernas com materiais naturais. Na vista da fachada, vemos o fechamento das garagens em portão basculante ripado, que permite retro-iluminação, dando esse efeito charmoso. Recepciona o usuário de forma convidativa e minimalista. Nos fundos, temos uma área de lazer generosa, com mesa para 14 lugares, piscina em pedra hijau natural, com prainha, área livre para as crianças e natureza integrada, e tudo isso pertinho da churrasqueira, é tudo que a gente quer, não? A transição entre o ambiente coberto e o descoberto da CASA HORIZONTE é tão sutil que transmite ao usuário a sensação de estar sempre em um ambiente amplo e arejado. Isso porque tivemos o cuidado de esconder o fechamento da varanda, impedindo assim que esse se tornasse uma barreira visual." />
      </div>

      <div className="px-4 md:px-8 xl:px-12">
        <div className="mt-16">
          <div className="grid grid-cols-4 gap-2">
            {projectImages.map((image, index) => {
              const totalImages = projectImages.length;
              const imagesRemaining = totalImages % 3;
              let colSpan = "";

              if (
                index >= totalImages - imagesRemaining &&
                imagesRemaining === 1
              ) {
                colSpan = "col-span-4";
              } else if (
                index % 6 === 0 ||
                index % 6 === 5 ||
                (index >= totalImages - imagesRemaining &&
                  imagesRemaining === 2)
              ) {
                colSpan = "col-span-4 md:col-span-2 lg:col-span-2";
              } else {
                colSpan = "col-span-4 md:col-span-2 lg:col-span-1";
              }

              return (
                <div className={`${colSpan} grid h-full gap-2`}>
                  <ProjectImageCard imageUrl={image} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
