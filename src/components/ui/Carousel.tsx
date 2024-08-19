import React, { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import { IoBookmarkOutline } from "react-icons/io5";
import { images } from "@/lib/data";
import BookmarkSelectIcon from "../../assets/logo/BookmarkSelectIcon";

export default function Carousel() {
  // Initialisation de l'état avec useState
  const [selectedImageIds, setSelectedImageIds] = useState<number[]>([]);

  const handleBookmarkClick = (imageId: number) => {
    if (selectedImageIds.includes(imageId)) {
      // Si l'image est déjà sélectionnée, la retirer de la liste
      setSelectedImageIds(selectedImageIds.filter((id) => id !== imageId));
    } else {
      // Sinon, l'ajouter à la liste
      setSelectedImageIds([...selectedImageIds, imageId]);
    }
  };

  return (
    <div className="w-full h-[350px] mt-10">
      <div className="p-2 h-[350px] overflow-hidden">
        <ScrollArea className="h-full overflow-y-scroll">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <div key={image.id} className="w-full">
                <div className="relative w-full h-[218px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <div className="mt-2 text-center">
                  <div className="flex justify-start">
                    <h3 className="text-sm font-medium text-white pb-1">
                      {image.title} <span className="text-[#FF7A00]">Pro</span>
                    </h3>
                    <button
                      onClick={() => handleBookmarkClick(image.id)}
                      className="ml-20"
                    >
                      {selectedImageIds.includes(image.id) ? (
                        <BookmarkSelectIcon size={20} />
                      ) : (
                        <IoBookmarkOutline
                          size={20}
                          className="text-gray-400"
                        />
                      )}
                    </button>
                  </div>
                  <p className="text-sm font-normal text-gray-400 flex justify-start">
                    {image.dateAdded}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </div>
  );
}
