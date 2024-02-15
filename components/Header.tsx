import Image from "next/image";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex justify-between items-center p-6 border-b-2 border-slate-100">
      <div className="">
        <Link href="/" className="flex items-center justify-center pl-20 gap-2">
          <Image src="/logo.svg" alt="logo" width={120} height={120} />
        </Link>
      </div>

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
  );
}
