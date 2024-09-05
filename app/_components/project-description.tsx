"use client";

import { useEffect, useState } from "react";

interface Props {
  description: string;
}

export function ProjectDescription({ description }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const isLongDescription = description.length > 200;
  const displayDescription =
    !isMobile || isExpanded || !isLongDescription
      ? description
      : description.slice(0, 200) + "...";

  return (
    <p className="mt-8 text-lg font-light leading-relaxed text-stone-600">
      {displayDescription}
      {isMobile && isLongDescription && (
        <button
          onClick={toggleReadMore}
          className="ml-1 inline-block text-lime-600"
        >
          {isExpanded ? "Ver menos" : "Ver mais"}
        </button>
      )}
    </p>
  );
}
