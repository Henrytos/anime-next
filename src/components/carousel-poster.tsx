import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Link from "next/link";
export interface Poster {
  id: number;
  name: string;
  img: string;
}

export interface CarouselPostersProps {
  posters: Poster[];
}

export function CarouselPosters({ posters }: CarouselPostersProps) {
  return (
    <Carousel className="w-full ">
      <CarouselContent className="-space-x-2 relative">
        {posters.map((item) => (
          <CarouselItem className=" basis-1/3 " key={item.id}>
            <Link href={`/anime/${item.id}`} className="w-full h-full relative">
              <Image
                src={`${item.img}`}
                alt={`capa de mangá de ${item.name}`}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded  shadow "
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
