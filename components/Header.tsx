import Image from "next/image";
import Link from "next/link";
import { CiGlobe, CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  return (
    <div className="flex flex-col p-6 border-b-2 border-slate-100">
      <header className="hidden md:flex justify-between">
        <Link href="/" className="flex items-center justify-center pl-20 gap-2">
          <Image src="/logo.svg" alt="logo" width={120} height={120} />
        </Link>

        <nav className="flex items-center justify-center">
          <ul className="flex justify-center gap-4">
            <li>
              <Link href="/" className="">
                <span className="hover:bg-[#ebebeb]/20 rounded-3xl p-2">
                  Stays
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="hover:bg-[#ebebeb]/20 rounded-3xl p-2">
                  Experiences
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="hover:bg-[#ebebeb]/20 rounded-3xl p-2">
                  Online Experiences
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 items-center">
          <span className="cursor-pointer hover:bg-[#ebebeb]/20 rounded-2xl">
            <p className="p-2">Airbnb your home</p>
          </span>
          <CiGlobe size={30} className="cursor-pointer" />
          <div className="border rounded-3xl cursor-pointer">
            <div className="p-3 flex gap-3 items-center hover:shadow-md rounded-3xl">
              <IoIosMenu size={20} className="" />
              <FaUserCircle size={30} className="text-slate-500" />
            </div>
          </div>
        </div>
      </header>
      <div className="flex space-x-5 mx-auto border-2 rounded-3xl border-slate-400/20 shadow-lg items-center">
        <div className="border-r-2 border-neutral-100 justify-start flex pr-4">
          <button className="flex flex-col hover:bg-[#ebebeb]/40 rounded-full p-4 w-full h-full">
            <span className="text-xs font-semibold">Where</span>{" "}
            <span className="text-sm font-light">Search destinations</span>
          </button>
        </div>
        <div className="flex border-r-2 border-neutral-100 justify-start pr-4">
          <button className="flex flex-col hover:bg-[#ebebeb]/40 rounded-full p-4 w-full h-full">
            <span className="text-xs font-semibold">Check in</span>{" "}
            <span className="text-sm font-light">Add dates</span>
          </button>
        </div>
        <div className="border-r-2 border-neutral-100 justify-start flex pr-4">
          <button className="flex flex-col hover:bg-[#ebebeb]/40 rounded-full p-4 w-full h-full">
            <span className="text-xs font-semibold">Check out</span>{" "}
            <span className="text-sm font-light">Add dates</span>
          </button>
        </div>

        <button className="flex hover:bg-[#ebebeb]/40 rounded-full p-4 items-center justify-center">
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold">Who</span>{" "}
            <span className="text-sm font-light">Add guests</span>
          </div>
        </button>
        <div className="pr-2 flex-1">
          <button className="bg-[#ff385b] rounded-full flex items-center justify-center p-3 hover:bg-[#e7627a] w-full h-full">
            <CiSearch className="text-white text-sm" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
