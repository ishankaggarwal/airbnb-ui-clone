import { cn } from "@/lib/utils";
import React from "react";
import { data } from "./Menu";

type Item = {
  title: string;
};

const items: Item[] = [
  {
    title: "Categories",
  },
  {
    title: "Popular",
  },
  {
    title: "Outdoors",
  },
  {
    title: "Arts & culture",
  },
  {
    title: "Mountains",
  },
  {
    title: "Beachs",
  },
  {
    title: "Unique stays",
  },
  {
    title: "Things to do",
  },
  {
    title: "Airbnb-friendly apartments",
  },
];

const menuItems = items;

export default function FooterMenu() {
  return (
    <div className="pl-20 pb-10">
      <div className="border-b border-slate-300 max-w-screen-xl">
        <div className="flex gap-4">
          {items.map((item, index) => (
            <button
              key={item.title}
              className={cn(
                "",
                index === 0 ? "border-b border-b-gray-400" : ""
              )}
            >
              <span className="text-sm font-normal">{item.title}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="pt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-xl gap-5">
        {data.map((d) => (
          <button key={d.title} className="text-sm font-medium w-fit">
            {d.title}
          </button>
        ))}
      </div>
    </div>
  );
}
