import { getListings } from "@/lib/getListings";
import ListingCard from "./ListingCard";

export default async function Listings() {
  const listings = await getListings();
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
      {listings.map((l: any) => (
        <ListingCard key={l.id} listing={l} />
      ))}
    </div>
  );
}