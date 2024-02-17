import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons";

type Data = {
  icon: IconType | JSX.Element;
  title: string;
};

export default function MenuItems({ item }: { item: Data }) {
  return (
    <div
      className={cn(
        "border border-transparent hover:border-b hover:border-b-slate-400",
        item.title === "Cabin" ? "border-b border-b-slate-600" : ""
      )}
    >
      <button className="hover:bg-[#ebebeb]/20 rounded-lg">
        <div className="flex flex-col items-center justify-center p-2 gap-3">
          {typeof item.icon === "object"
            ? item.icon
            : React.createElement(item.icon)}
          <span className="text-xs text-clip">{item.title}</span>
        </div>
      </button>
    </div>
  );
}
