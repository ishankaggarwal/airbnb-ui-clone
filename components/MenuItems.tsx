import React from "react";
import { IconType } from "react-icons";

type Data = {
  icon: IconType | JSX.Element;
  title: string;
};

export default function MenuItems({ item }: { item: Data }) {
  return (
    <div className="hover:border-b hover:border-slate-400">
      <button className="hover:bg-[#ebebeb]/20 rounded-lg">
        <div className="flex flex-col items-center justify-center p-2 gap-3">
          {typeof item.icon === "object"
            ? item.icon
            : React.createElement(item.icon)}
          <span className="text-sm text-clip">{item.title}</span>
        </div>
      </button>
    </div>
  );
}
