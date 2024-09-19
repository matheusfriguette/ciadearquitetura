"use client";

import ReactDOM from "react-dom";
import { Carousel } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

interface Props {
  imageUrls: string[];
  activeIndex: number;
  onClose: () => void;
}

export function ProjectImageCarousel({ imageUrls, onClose }: Props) {
  const handleCloseClick = () => {
    onClose();
  };

  const projectImage = (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-400">
      <div className="relative h-screen w-screen">
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
        <Carousel slide={false}>
          {imageUrls.map((imageUrl) => (
            <img className="w-full" src={imageUrl} alt="" />
          ))}
        </Carousel>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    projectImage,
    document.getElementById("project-image-carousel-root"),
  );
}
