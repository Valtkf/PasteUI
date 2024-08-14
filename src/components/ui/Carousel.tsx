import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import { IoBookmarkOutline } from "react-icons/io5";
import { images } from "@/lib/data";

export default function Carousel() {
  return (
    <div className=" w-full h-[350px] mt-10">
      <div className=" p-2 h-[350px] overflow-hidden">
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
                    <h3 className="text-sm font-medium text-white pb-1 ">
                      {image.title} <span className="text-[#FF7A00]">Pro</span>
                    </h3>
                    <IoBookmarkOutline
                      size={20}
                      className="text-gray-400 ml-20"
                    />
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
