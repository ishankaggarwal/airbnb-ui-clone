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
    <Card className="group hover:scale-105 hover:shadow-lg hover:cursor-pointer hover:ease-in-out hover:duration-500 hover:transition-all">
      <CardHeader>
        <Carousel>
          <CarouselContent className="flex">
            {listing.images.map((image: any) => (
              <CarouselItem
                key={image.id}
                className="flex justify-center items-center"
              >
                <div className="items-center justify-center flex">
                  <Image
                    src={image}
                    alt={image}
                    className="rounded-md object-fit w-80 h-80"
                    width={500}
                    height={500}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden group-hover:flex" />
          <CarouselNext className="hidden group-hover:flex" />
        </Carousel>
      </CardHeader>
      <CardContent className="flex justify-between">
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
  );
}
