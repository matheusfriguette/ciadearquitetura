"use client";

import { useState } from "react";
import { ProjectImage } from "./project-image";

interface Props {
  imageUrl: string;
}

export function ProjectImageCard({ imageUrl }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="group relative overflow-hidden"
        onClick={() => setShowModal(true)}
      >
        <img
          className="relative h-full w-full object-cover"
          src={imageUrl}
          alt=""
        />

        <div className="absolute inset-0 hidden h-full w-full bg-black/50 group-hover:block"></div>
      </button>

      {showModal && (
        <ProjectImage
          imageUrl={imageUrl}
          onClose={() => setShowModal(false)}
        ></ProjectImage>
      )}
    </>
  );
}
