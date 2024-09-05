"use client";

import ReactDOM from "react-dom";

interface Props {
  imageUrl: string;
  onClose: () => void;
}

export function ProjectImage({ imageUrl, onClose }: Props) {
  const handleCloseClick = () => {
    onClose();
  };

  const projectImage = (
    <div className="fixed inset-0 z-50 overflow-hidden bg-white">
      <div className="relative flex h-screen w-screen flex-col items-center justify-center">
        <button
          onClick={handleCloseClick}
          className="absolute right-4 top-4 border border-stone-100 bg-white p-1 text-stone-200"
        >
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
        <img className="w-full" src={imageUrl} alt="" />
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    projectImage,
    document.getElementById("image-root"),
  );
}
