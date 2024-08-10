import Image from "next/image";
import logopaste from "@/assets/logo/logopaste.png";
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="rounded-t-3xl bg-[#121212]">
      <div className="flex h-[85px] justify-start items-center">
        <div className=" w-[96px]  ">
          <Image src={logopaste} alt="" />
        </div>
        <div className="">
          <li className="flex items-center space-x-8 border-x-[1px] border-[#1D1D1D] pt-4 pb-4 pl-8 pr-8 h-[24px]">
            <a
              href="#"
              className="text-stone-400 hover:text-white font-normal text-sm"
            >
              Library
            </a>
            <a
              href="#"
              className="text-stone-400 hover:text-white font-normal text-sm"
            >
              Extensions
            </a>
            <a
              href="#"
              className="text-stone-400 hover:text-white font-normal text-sm"
            >
              Community
            </a>
            <a
              href="#"
              className="text-stone-400 hover:text-white font-normal text-sm"
            >
              Membership
            </a>
          </li>
        </div>
        <div className="w-full max-w-[800px] px-4 sm:px-8">
          <div className="flex justify-start items-center h-[37px] rounded-md text-stone-400 text-xs font-normal bg-[#1D1D1D]">
            <IoSearch className="text-stone-400 w-5 h-5 ml-2 sm:ml-4" />
            <input
              className="ml-2 sm:ml-4 mr-2 bg-transparent outline-none flex-grow text-white"
              placeholder="Search for specific components, sections, wireframes, and more..."
              spellCheck="false"
              type="text"
            />
          </div>
        </div>

        <div className="border-[1px] border-[#1D1D1D] rounded-md mx-4 h-[38px] w-[38px] flex items-center justify-center aspect-square">
          <FiUser className="text-white w-10 h-6" />
        </div>
      </div>
    </div>
  );
}
