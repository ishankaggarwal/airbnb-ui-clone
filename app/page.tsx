import Listings from "@/components/Listings";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Menu />
      <Listings />
      <div>
        Continue exploring amazing views
        <Button>Show more</Button>
      </div>
    </main>
  );
}
