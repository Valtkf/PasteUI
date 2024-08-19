import Carousel from "@/components/ui/Carousel";
import React from "react";

export default function OtherSections() {
  return (
    <div className=" w-full sm:pt-6 sm:h-[380px] md:h-[480px] md:pt-12 h-[480px]  pt-12">
      <h1 className="text-white text-[26px]">Other sections you might like </h1>
      <Carousel />
    </div>
  );
}
