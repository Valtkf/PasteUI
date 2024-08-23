"use client";

import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import SectionHero from "../components/hero-section/SectionHero";
import { ButtonPro } from "@/components/ButtonPro";

export default function Home() {
  return (
    <main className="border-2 border-[#292929]  w-full min-h-screen p-4 bg-[#292929]">
      <Navbar />
      <div className="flex">
        <div className="rounded-bl-3xl text-[#7E7F81] border-t-[1px] border-[#292929] sm:w-1/4 w-[280px] h-[920px]  gap-24 p-8 bg-[#121212] flex-shrink-0">
          <Sidebar />
          <div className="mt-4">
            <ButtonPro />
          </div>
        </div>
        <SectionHero />
      </div>
    </main>
  );
}
