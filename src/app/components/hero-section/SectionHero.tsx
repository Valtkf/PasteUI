import React from "react";
import { Button } from "@/components/ui/button";
import WebflowIcon from "@/assets/logo/WebflowIcon";
import FigmaIcon from "@/assets/logo/FigmaIcon";
import { LuEye } from "react-icons/lu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import { IoBookmarkOutline } from "react-icons/io5";

export interface Artwork {
  artist: string;
  art: string;
}

export const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    alt: "Image 1",
    title: "HERO SECTION",
    dateAdded: "Added 28th of Feb 2024",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    alt: "Image 2",
    title: "HERO SECTION",
    dateAdded: "Added 28th of Feb 2024",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    alt: "Image 3",
    title: "HERO SECTION",
    dateAdded: "Added 28th of Feb 2024",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    alt: "Image 1",
    title: "HERO SECTION",
    dateAdded: "Added 28th of Feb 2024",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    alt: "Image 2",
    title: "HERO SECTION",
    dateAdded: "Added 28th of Feb 2024",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    alt: "Image 3",
    title: "HERO SECTION",
    dateAdded: "Added 28th of Feb 2024",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    alt: "Image 1",
    title: "HERO SECTION",
    dateAdded: "Added 28th of Feb 2024",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    alt: "Image 2",
    title: "HERO SECTION",
    dateAdded: "Added 28th of Feb 2024",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    alt: "Image 3",
    title: "HERO SECTION",
    dateAdded: "Added 28th of Feb 2024",
  },
];

export default function SectionHero() {
  return (
    <div className="p-6 border-2 border-red-400 rounded-br-3xl min-h-screen flex-grow bg-[#121212]">
      <div className="flex flex-col md:flex-row flex-grow">
        <div className=" w-full md:w-[48%] h-[388px] mb-4 md:mb-0 flex flex-col justify-between mr-4">
          <div>
            <div className="flex justify-start gap-2">
              <h1 className="text-white text-3xl font-medium">Hero Section</h1>
              <span className="text-[#FF7A00] text-sm font-medium py-2">
                pro
              </span>
            </div>
            <p className="text-[#7E7F81] text-sm font-normal pt-8">
              Detailed header section with heading and graphic/image centred and
              feature cards on either side.
            </p>
          </div>

          <div className=" w-full h-[116px] mt-auto">
            <div className=" w-full h-[50px] flex">
              <Button variant="outline" className="gap-1 w-1/2 mr-2">
                <WebflowIcon />
                Copy to Webflow
              </Button>
              <Button variant="outline" className="gap-1 w-1/2">
                <FigmaIcon />
                Copy to Figma
              </Button>
            </div>
            <Button variant="outline" className="gap-2 w-full h-[50px] mt-4">
              <LuEye size={16} />
              Live Preview
            </Button>
          </div>
        </div>

        <div className=" border-[1px] border-[#292929] rounded-xl w-full md:w-[50%] h-[388px] flex-shrink-0"></div>
      </div>
      <div className="border-2 border-blue-400 w-full h-[480px] pt-12">
        <h1 className="text-white text-[26px]">
          Other sections you might like{" "}
        </h1>
        <div className="border-2 border-green-400 w-full h-[350px] mt-10">
          <div className=" p-4 h-[350px] overflow-hidden">
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
                          {image.title}{" "}
                          <span className="text-[#FF7A00]">Pro</span>
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
      </div>
    </div>
  );
}
