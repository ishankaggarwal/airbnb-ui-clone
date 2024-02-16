import Footer from "@/components/Footer";
import Listings from "@/components/Listings";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Menu />
      <Listings />
      <div className="flex flex-col items-center justify-center gap-2 pb-10 pt-10">
        <span className="text-lg font-semibold">
          Continue exploring amazing views
        </span>
        <Button>Show more</Button>
      </div>
      <Footer />
    </main>
  );
}
