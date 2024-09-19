"use client";

import { useState } from "react";
import { ProjectImageCarousel } from "./project-image-carousel";

interface Props {
  imageUrls: string[];
}

export function ProjectImageGrid({ imageUrls }: Props) {
  const [showCarousel, setShowCarousel] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setShowCarousel(true);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {imageUrls.map((imageUrl, index) => {
          const totalImages = imageUrls.length;
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
            <div key={imageUrl} className={`${colSpan} grid h-full gap-2`}>
              <button
                className="group relative overflow-hidden"
                onClick={() => handleImageClick(index)}
              >
                <img
                  className="relative h-full w-full object-cover"
                  src={imageUrl}
                  alt=""
                />

                <div className="absolute inset-0 hidden h-full w-full bg-black/50 group-hover:block"></div>
              </button>
            </div>
          );
        })}
      </div>

      {showCarousel && (
        <ProjectImageCarousel
          imageUrls={imageUrls}
          activeIndex={activeIndex}
          onClose={() => setShowCarousel(false)}
        ></ProjectImageCarousel>
      )}
    </>
  );
}
