import FooterItems from "./FooterItems";
import FooterMenu from "./FooterMenu";

export default function Footer() {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="pl-20 p-10 text-lg font-semibold">
        Inspiration for future getaways
      </div>
      <FooterMenu />
      <div className="max-w-screen border border-slate-300"></div>
      <FooterItems />
    </div>
  );
}
