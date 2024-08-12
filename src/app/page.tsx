"use client";

import { ButtonOutline } from "@/components/Button";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="border-2 border-[#292929] w-full min-h-screen p-4 bg-[#292929]">
      <Navbar />
      <div className="flex">
        <div className="rounded-bl-3xl text-[#7E7F81] border-t-[1px] border-[#292929] w-[280px] h-[923px] gap-24 p-8 bg-[#121212] flex-shrink-0">
          <Sidebar />
          <div className="absolute top-[900px]">
            <ButtonOutline />
          </div>
        </div>
        <div className="p-6 border-2 border-red-400 rounded-br-3xl min-h-screen flex-grow bg-[#121212]">
          <div className="border-2 border-blue-500 w-[532px] h-[388px] ">
            <div className="flex justify-start gap-2">
              <h1 className="text-white text-3xl font-medium">Hero Section</h1>
              <span className="text-[#FF7A00] text-sm font-medium py-2">
                pro
              </span>
            </div>
            <div>
              <p className="text-[#7E7F81] text-sm font-normal pt-8">
                Detailed header section with heading and graphic/image centred
                and feature cards on either side.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
