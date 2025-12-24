"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { ImagePickerProps } from "@/src/data-types/types/imagePicker";

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handlePickClick = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (typeof fileReader.result === "string") {
        setPickedImage(fileReader.result);
      } else {
        setPickedImage(null);
      }
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className="picker">
      <label htmlFor={name}>{label}</label>
      <div className="controls">
        <div className="preview">
          {pickedImage ? (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          ) : (
            <p>No image picked yet!</p>
          )}
        </div>
        <input
          type="file"
          name={name}
          id={name}
          accept="image/png,image/jpeg"
          className="input"
          ref={imageInputRef}
          onChange={handleImageChange}
        />
        <button type="button" className="button" onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
