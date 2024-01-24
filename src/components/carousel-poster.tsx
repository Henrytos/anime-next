import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Link from "next/link";
export interface Poster {
  id: number;
  name: string;
  img: string;
}

export interface CarouselPostersProps {
  posters: Poster[];
  type: "anime" | "manga";
}

function formaterTitle(name: string) {
  return name.length > 13 ? name.slice(0, 13) + "..." : name;
}

export function CarouselPosters({ posters, type }: CarouselPostersProps) {
  return (
    <Carousel className="w-full ">
      <CarouselContent className="-space-x-2 relative">
        {posters.map((item) => (
          <CarouselItem className=" basis-1/3 relative " key={item.id}>
            <Link
              href={`/${type}/${item.id}?type=mangá`}
              className="w-full h-full "
            >
              <img
                src={`${item.img}`}
                alt={`capa de mangá de ${item.name}`}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded  "
              />

              <div className="absolute top-0 h-4 bg-neutral-900/50  w-[calc(100%_-_8px)] flex items-center  rounded-t px-1">
                <h3 className="text-xs font-bold block ">
                  {formaterTitle(item.name)}
                </h3>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
