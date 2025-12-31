"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IProductImagesProps } from "@/dataTypes/interfaces/productImages";

export default function ProductImages({ images }: IProductImagesProps) {
  const [current, setCurrent] = useState<number>(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-75 object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrent(index)}
            className={cn(
              "border mr-2 cursor-pointer hover:border-orange-600",
              current === index && "border-orange-500"
            )}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}
