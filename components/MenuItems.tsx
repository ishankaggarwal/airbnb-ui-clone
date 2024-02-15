import React from "react";
import { IconType } from "react-icons";

type Data = {
  icon: IconType | JSX.Element;
  title: string;
};

export default function MenuItems({ item }: { item: Data }) {
  return (
    <button className="w-fit h-fit hover:border-b hover:border-slate-200 hover:bg-[#ebebeb]/20 rounded-lg">
      <div className="flex flex-col items-center justify-center p-2 gap-3">
        {typeof item.icon === "object"
          ? item.icon
          : React.createElement(item.icon)}
        <p className="text-sm">{item.title}</p>
      </div>
    </button>
  );
}
