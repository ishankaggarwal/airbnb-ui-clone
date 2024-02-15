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
import { HiOutlineViewGridAdd } from "react-icons/hi";
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
    icon: <GiWoodCabin />,
    title: "Cabin",
  },
  {
    icon: <TbUfo />,
    title: "OMG!",
  },
  {
    icon: <GiBowlingStrike />,
    title: "Play",
  },
  {
    icon: <LiaSwimmingPoolSolid />,
    title: "Amazing pools",
  },
  {
    icon: <FaFire />,
    title: "Trending",
  },
  {
    icon: <HiOutlineViewGridAdd />,
    title: "Off the grid",
  },
  {
    icon: <GiCampingTent />,
    title: "Camping",
  },
  {
    icon: <GiCaveEntrance />,
    title: "Caves",
  },
  {
    icon: <FaUmbrellaBeach />,
    title: "Beachfront",
  },
  {
    icon: <FaBed />,
    title: "Bed & Breakfast",
  },
  {
    icon: <FaPalette />,
    title: "Creative spaces",
  },
  {
    icon: <GiTreehouse />,
    title: "Treehouses",
  },
  {
    icon: <GiGrapes />,
    title: "Vineyards",
  },
  {
    icon: <PiPark />,
    title: "National Park",
  },
  {
    icon: <FaSkiing />,
    title: "Skiing",
  },
  {
    icon: <RiCactusLine />,
    title: "Desert",
  },
  {
    icon: <LuPalmtree />,
    title: "Tropical",
  },
  {
    icon: <MdOutlineSurfing />,
    title: "Surfing",
  },
];

export default function Menu() {
  return (
    <div className="flex gap-4 p-4 relative justify-between">
      <div className="flex gap-5 overflow-scroll max-w-5xl">
        {data.map((i) => (
          <MenuItems key={i.title} item={i} />
        ))}
      </div>
      <button className="border border-slate-200 flex p-1 items-center gap-2 rounded-xl max-w-[100px] justify-center">
        <FaSliders />
        <span className="text-sm">Filters</span>
      </button>
      <div className="flex items-center border border-slate-200 p-1 gap-2 rounded-xl flex-1 justify-center">
        <span className="text-sm">Display total before taxes</span>
        <Switch />
      </div>
    </div>
  );
}
