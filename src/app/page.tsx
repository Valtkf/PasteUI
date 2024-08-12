"use client";

import { ButtonOutline } from "@/components/Button";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="border-2 border-[#292929] w-full min-h-screen p-4 bg-[#292929] ">
      <Navbar />
      <div className="rounded-bl-3xl text-[#7E7F81] border-t-[1px] border-[#292929] w-[280px] h-[923px] gap-24 p-8 bg-[#121212]">
        <Sidebar />
        <div className="absolute top-[900px]">
          <ButtonOutline />
        </div>
      </div>
    </main>
  );
}
