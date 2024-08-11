import { TbBolt } from "react-icons/tb";
import { GrAppsRounded } from "react-icons/gr";
import { BsStars } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main className="border-2 border-[#292929] w-full min-h-screen p-4 bg-[#292929] ">
      <Navbar />
      <div className=" text-white border-t-[1px] border-[#292929]  w-[280px] h-[923px] gap-24 p-8 bg-[#121212]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm">
              <TbBolt size={20} />
              PLATFORM
            </AccordionTrigger>
            <AccordionContent>Weblflow</AccordionContent>
            <AccordionContent>Figma</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm">
              <GrAppsRounded size={20} />
              SECTIONS
            </AccordionTrigger>
            <AccordionContent>Hero</AccordionContent>
            <AccordionContent>How it Works</AccordionContent>
            <AccordionContent>Services</AccordionContent>
            <AccordionContent>Testimonials</AccordionContent>
            <AccordionContent>Pricing</AccordionContent>
            <AccordionContent>FAQ</AccordionContent>
            <AccordionContent>Footer</AccordionContent>
            <AccordionContent>Show more +</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-sm">
              <BsStars size={20} />
              STYLE
            </AccordionTrigger>
            <AccordionContent>Coming soon</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-sm">
              <IoBookmarkOutline size={20} />
              SAVED
            </AccordionTrigger>
            <AccordionContent>Coming soon</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-sm">
              <FaRegStar size={20} />
              PLAN
            </AccordionTrigger>
            <AccordionContent>Coming soon</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
