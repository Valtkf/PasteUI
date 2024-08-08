import Image from "next/image";
import logopaste from "@/assets/logo/logopaste.png";
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="border-2 border-[#1D1D1D] w-full min-h-screen rounded-3xl bg-[#121212]">
      <div className="flex h-[85px] justify-start items-center">
        <div className=" w-[96px]  ">
          <Image src={logopaste} alt="" />
        </div>
        <div className="">
          <li className="flex items-center space-x-8 border-x-[1px] border-stone-400 pt-4 pb-4 pl-8 pr-8 h-[24px]">
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
        <div className="border-r-[1px] border-stone-400 pr-8">
          <div className="flex justify-start items-center border-[1px] border-stone-400 w-[430px] h-[37px] rounded-md ml-8 text-stone-400 text-xs font-normal bg-[#1D1D1D]">
            <IoSearch className="text-stone-400 w-5 h-5 ml-4" />
            <p className="ml-2 mr-2">
              Search for specific componants, sections, wireframe, and more...
            </p>
          </div>
        </div>
        <div className=" border-[1px] border-stone-400 rounded-md ml-8 h-[38px] w-[38px] flex items-center justify-center">
          <FiUser className="text-white w-6 h-6 " />
        </div>
      </div>
    </div>
  );
}
