"use client";

import { useState } from "react";
import { ProjectImageCarousel } from "./project-image-carousel";

interface Props {
  images: {
    edges: {
      node: {
        id: string;
        sourceUrl: string;
      };
    }[];
  };
}

export function ProjectImageGrid({ images }: Props) {
  const [showCarousel, setShowCarousel] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setShowCarousel(true);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {images.edges.map(({ node: image }, index) => {
          const totalImages = images.edges.length;
          const imagesRemaining = totalImages % 3;
          let colSpan = "";

          if (index >= totalImages - imagesRemaining && imagesRemaining === 1) {
            colSpan = "col-span-4";
          } else if (
            index % 6 === 0 ||
            index % 6 === 5 ||
            (index >= totalImages - imagesRemaining && imagesRemaining === 2)
          ) {
            colSpan = "col-span-4 md:col-span-2 lg:col-span-2";
          } else {
            colSpan = "col-span-4 md:col-span-2 lg:col-span-1";
          }

          return (
            <div key={image.id} className={`${colSpan} grid h-full gap-2`}>
              <button
                className="group relative overflow-hidden"
                onClick={() => handleImageClick(index)}
              >
                <img
                  className="relative h-full w-full object-cover"
                  src={image.sourceUrl}
                  alt="Imagem renderizada do projeto"
                />

                <div className="absolute inset-0 hidden h-full w-full bg-black/50 group-hover:block"></div>
              </button>
            </div>
          );
        })}
      </div>

      {showCarousel && (
        <ProjectImageCarousel
          images={images}
          activeIndex={activeIndex}
          onClose={() => setShowCarousel(false)}
        ></ProjectImageCarousel>
      )}
    </>
  );
}
