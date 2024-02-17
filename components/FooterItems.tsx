import Link from "next/link";

type Data = {
  title: string;
  items: string[];
};

const data: Data[] = [
  {
    title: "Support",
    items: [
      "Help Center",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
      "Report neighbourhood concerns",
    ],
  },
  {
    title: "Hosting",
    items: [
      "Airbnb your home",
      "AirCover for Hosts",
      "Hosting resources",
      "Comunity forum",
      "Hosting responsibly",
      "Airbnb-friendly apartments",
    ],
  },
  {
    title: "Airbnb",
    items: [
      "Newsroom",
      "New features",
      "Careers",
      "Investors",
      "Gift cards",
      "Airbnb.com emergency stays",
    ],
  },
];

export default function FooterItems() {
  return (
    <div className="sm:grid sm:grid-cols-1 pl-20 pt-10 md:flex space-x-60 pb-10">
      {data.map((item) => (
        <div key={item.title} className="flex flex-col gap-4">
          <span className="text-sm">{item.title}</span>
          <div className="flex flex-col gap-2">
            {item.items.map((i) => (
              <Link
                href="/"
                key={i}
                className="text-sm text-gray-600 w-fit hover:border-b hover:border-b-slate-400"
              >
                {i}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
