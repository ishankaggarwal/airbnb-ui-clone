import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function ListingCard({ listing }: any) {
  return (
    <div className="">
      <Card className="">
        <CardHeader className="">
          <Carousel className="rounded-md">
            <CarouselContent className="flex gap-5">
              {listing.images.map((image: any) => (
                <CarouselItem
                  key={image.id}
                  className="flex justify-center items-center"
                >
                  <div className="w-[400px] h-[400px]">
                    <Image
                      src={image}
                      alt={image}
                      quality={100}
                      fill={true}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardHeader>
        <CardContent className="-mt-5 flex justify-between">
          <div>
            <p className="font-semibold">{listing.address}</p>
            <p className="font-light">{listing.type}</p>
            <p className="font-light">{listing.name}</p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <FaStar />
              <span className="font-light">{listing.rating}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="-mt-2">
          <p>{`$${listing.price.rate} `}</p>
          <span className="pl-1 text-md font-light "> night</span>
        </CardFooter>
      </Card>
    </div>
  );
}
