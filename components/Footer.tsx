import { AiFillTwitterSquare, AiOutlineCopyright } from "react-icons/ai";
import FooterItems from "./FooterItems";
import FooterMenu from "./FooterMenu";
import { CiGlobe } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#f7f7f7] items-center justify-center">
      <div className="pl-20 p-10 text-lg font-semibold">
        Inspiration for future getaways
      </div>
      <FooterMenu />
      <div className="max-w-screen border border-slate-300"></div>
      <FooterItems />
      <div className="flex justify-between items-center pr-20 border-t border-t-slate-300 pt-5 pb-6 max-w-7xl mx-auto">
        <div className="flex gap-4 text-xs">
          <div className="flex items-center pl-20 gap-2">
            <span>
              <AiOutlineCopyright />
            </span>
            <span>2024 Airbnb, Inc.</span>
          </div>
          <div>Terms</div>
          <div>Sitemap</div>
          <div>Privacy</div>
          <div>Your Privacy Choices</div>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <div className="flex items-center justify-center gap-1">
            <CiGlobe />
            <span>English (US)</span>
          </div>
          <div>$ USD</div>
          <div className="flex items-center justify-center gap-2">
            <IoLogoFacebook />
            <AiFillTwitterSquare />
            <FaSquareInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}
