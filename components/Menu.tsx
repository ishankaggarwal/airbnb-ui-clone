import { FaSliders } from "react-icons/fa6";
import { Switch } from "./ui/switch";
import { IconType } from "react-icons";
import { TbUfo } from "react-icons/tb";
import {
  GiBowlingStrike,
  GiCampingTent,
  GiCaveEntrance,
  GiGrapes,
  GiTreehouse,
  GiWoodCabin,
} from "react-icons/gi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import {
  FaBed,
  FaFire,
  FaPalette,
  FaSkiing,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { PiPark } from "react-icons/pi";
import { RiCactusLine } from "react-icons/ri";
import { LuPalmtree } from "react-icons/lu";
import { MdOutlineSurfing } from "react-icons/md";
import MenuItems from "./MenuItems";

type Data = {
  icon: IconType | JSX.Element;
  title: string;
};

const data: Data[] = [
  {
    icon: <GiWoodCabin size={25} />,
    title: "Cabin",
  },
  {
    icon: <TbUfo size={25} />,
    title: "OMG!",
  },
  {
    icon: <GiBowlingStrike size={25} />,
    title: "Play",
  },
  {
    icon: <LiaSwimmingPoolSolid size={25} />,
    title: "Amazing pools",
  },
  {
    icon: <FaFire size={25} />,
    title: "Trending",
  },
  {
    icon: <GiCampingTent size={25} />,
    title: "Camping",
  },
  {
    icon: <GiCaveEntrance size={25} />,
    title: "Caves",
  },
  {
    icon: <FaUmbrellaBeach size={25} />,
    title: "Beachfront",
  },
  {
    icon: <FaBed size={25} />,
    title: "Bed & Breakfast",
  },
  {
    icon: <FaPalette size={25} />,
    title: "Creative spaces",
  },
  {
    icon: <GiTreehouse size={25} />,
    title: "Treehouses",
  },
  {
    icon: <GiGrapes size={25} />,
    title: "Vineyards",
  },
  {
    icon: <PiPark size={25} />,
    title: "National Park",
  },
  {
    icon: <FaSkiing size={25} />,
    title: "Skiing",
  },
  {
    icon: <RiCactusLine size={25} />,
    title: "Desert",
  },
  {
    icon: <LuPalmtree size={25} />,
    title: "Tropical",
  },
  {
    icon: <MdOutlineSurfing size={25} />,
    title: "Surfing",
  },
];

export default function Menu() {
  return (
    <div className="flex gap-4 pl-10 pt-8 p-4 relative justify-between items-center">
      <div className="flex gap-8 overflow-scroll max-w-5xl">
        {data.map((i) => (
          <MenuItems key={i.title} item={i} />
        ))}
      </div>
      <button className="border border-slate-200 flex p-3 items-center gap-2 rounded-xl max-w-[150px] justify-center h-[60px]">
        <FaSliders />
        <span className="text-sm">Filters</span>
      </button>
      <div className="flex items-center border border-slate-200 p-1 gap-2 rounded-xl flex-1 justify-center h-[60px]">
        <span className="text-sm">Display total before taxes</span>
        <Switch />
      </div>
    </div>
  );
}
