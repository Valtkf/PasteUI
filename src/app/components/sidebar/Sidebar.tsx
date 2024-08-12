import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { motion } from "framer-motion";
import { TbBolt } from "react-icons/tb";
import { GrAppsRounded } from "react-icons/gr";
import { BsStars } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import FigmaIcon from "@/assets/logo/FigmaIcon";
import WebflowIcon from "@/assets/logo/WebflowIcon";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={activeItem}
      onValueChange={setActiveItem}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger
          className={`text-sm ${activeItem === "item-1" ? "text-white" : ""}`}
        >
          <TbBolt size={20} />
          PLATFORM
        </AccordionTrigger>
        <motion.div
          className="accordion-content"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: activeItem === "item-1" ? "auto" : 0,
            opacity: activeItem === "item-1" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <AccordionContent className="flex justify-start gap-2">
            <WebflowIcon />
            Webflow
          </AccordionContent>
          <AccordionContent className="flex justify-start gap-2">
            <FigmaIcon /> Figma
          </AccordionContent>
        </motion.div>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          className={`text-sm ${activeItem === "item-2" ? "text-white" : ""}`}
        >
          <GrAppsRounded size={20} />
          SECTIONS
        </AccordionTrigger>
        <motion.div
          className="accordion-content"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: activeItem === "item-2" ? "auto" : 0,
            opacity: activeItem === "item-2" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <AccordionContent>Hero</AccordionContent>
          <AccordionContent>How it Works</AccordionContent>
          <AccordionContent>Services</AccordionContent>
          <AccordionContent>Testimonials</AccordionContent>
          <AccordionContent>Pricing</AccordionContent>
          <AccordionContent>FAQ</AccordionContent>
          <AccordionContent>Footer</AccordionContent>
          <AccordionContent>Show more +</AccordionContent>
        </motion.div>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          className={`text-sm ${activeItem === "item-3" ? "text-white" : ""}`}
        >
          <BsStars size={20} />
          STYLE
        </AccordionTrigger>
        <motion.div
          className="accordion-content"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: activeItem === "item-3" ? "auto" : 0,
            opacity: activeItem === "item-3" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <AccordionContent>Coming soon</AccordionContent>
        </motion.div>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger
          className={`text-sm ${activeItem === "item-4" ? "text-white" : ""}`}
        >
          <IoBookmarkOutline size={20} />
          SAVED
        </AccordionTrigger>
        <motion.div
          className="accordion-content"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: activeItem === "item-4" ? "auto" : 0,
            opacity: activeItem === "item-4" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <AccordionContent>Coming soon</AccordionContent>
        </motion.div>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger
          className={`text-sm ${activeItem === "item-5" ? "text-white" : ""}`}
        >
          <FaRegStar size={20} />
          PLAN
        </AccordionTrigger>
        <motion.div
          className="accordion-content"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: activeItem === "item-5" ? "auto" : 0,
            opacity: activeItem === "item-5" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <AccordionContent>Coming soon</AccordionContent>
        </motion.div>
      </AccordionItem>
    </Accordion>
  );
}
