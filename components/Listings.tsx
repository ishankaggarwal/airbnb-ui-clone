import { getListings } from "@/lib/getListings";
import ListingCard from "./ListingCard";

export default async function Listings() {
  const listings = await getListings();
  return (
    <div className="p-10 gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {listings.map((l: any) => (
        <ListingCard key={l.id} listing={l} />
      ))}
    </div>
  );
}
