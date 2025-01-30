import React, { useState } from "react";
import ImageModal from "./ImageModal";

interface ImageGalleryProps {
  images: string[];
  className?: string;
}

const ImageGallery = ({ images, className = "" }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <ImageModal
          images={images}
          currentIndex={selectedImage}
          isOpen={true}
          onClose={() => setSelectedImage(null)}
          onNavigate={setSelectedImage}
        />
      )}
    </>
  );
};

export default ImageGallery;
