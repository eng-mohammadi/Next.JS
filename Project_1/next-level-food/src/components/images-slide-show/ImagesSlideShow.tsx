"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { imagesData } from "@/src/data/images.data";

export default function ImagesSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < imagesData.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {imagesData.map((image, index) => (
        <Image
          key={image.id}
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          priority={index === 0}
          className={index === currentImageIndex ? "slideshow-active" : ""}
        />
      ))}
    </div>
  );
}
