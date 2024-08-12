import React from "react";
import { Button } from "@/components/ui/button";
import WebflowIcon from "@/assets/logo/WebflowIcon";
import FigmaIcon from "@/assets/logo/FigmaIcon";
import { LuEye } from "react-icons/lu";

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
    </div>
  );
}
