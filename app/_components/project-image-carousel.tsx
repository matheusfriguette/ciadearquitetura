"use client";

import ReactDOM from "react-dom";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { useRef } from "react";
import { Carousel } from "./carousel";

const theme: CustomFlowbiteTheme = {
  carousel: {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
      snap: "snap-x",
    },
  },
};

interface Props {
  imageUrls: string[];
  activeIndex: number;
  onClose: () => void;
}

export function ProjectImageCarousel({
  imageUrls,
  activeIndex,
  onClose,
}: Props) {
  const carouselParentRef = useRef();

  const handleCloseClick = () => {
    onClose();
  };

  const projectImage = (
    <Flowbite theme={{ theme: theme }}>
      <div className="fixed inset-0 z-50 overflow-hidden bg-stone-400">
        <div ref={carouselParentRef} className="relative h-screen w-screen">
          <button
            onClick={handleCloseClick}
            className="absolute right-4 top-4 z-50 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-white sm:size-6 dark:text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Carousel activeSlide={activeIndex} slide={false} indicators={false}>
            {imageUrls.map((imageUrl) => (
              <img className="w-full" src={imageUrl} alt="" />
            ))}
          </Carousel>
        </div>
      </div>
    </Flowbite>
  );

  return ReactDOM.createPortal(
    projectImage,
    document.getElementById("project-image-carousel-root"),
  );
}
