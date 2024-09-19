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
      ? description.replace(/<\/?p>/g, "")
      : description.replace(/<\/?p>/g, "").slice(0, 200) + "...";

  return (
    <div className="mt-8 text-justify text-lg font-light leading-relaxed text-stone-600">
      <p
        className="inline"
        dangerouslySetInnerHTML={{ __html: displayDescription }}
      ></p>
      {isMobile && isLongDescription && (
        <button
          onClick={toggleReadMore}
          className="ml-1 inline-block text-lime-600"
        >
          {isExpanded ? "Ver menos" : "Ver mais"}
        </button>
      )}
    </div>
  );
}
