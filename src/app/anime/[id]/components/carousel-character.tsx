import { CarouselPostersProps } from "@/components/carousel-poster";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselCharacter({ posters }: CarouselPostersProps) {
  const formaterName = (name: string) => {
    if (name.length > 7) return name.slice(0, 7) + "...";
    return name;
  };

  return (
    <Carousel className="w-full ">
      <CarouselContent className="pl-2">
        {posters.map((item, index) => (
          <CarouselItem className=" basis-1/3 " key={item.id}>
            <div className="w-full h-full relative">
              <Image
                src={`${item.img}`}
                alt={`capa de mangá de ${item.name}`}
                width={500}
                height={500}
                className=" w-full h-full object-cover rounded  shadow "
              />
            </div>

            <div className=" w-full   absolute bottom-0 z-20 block text-white font-semibold bg-gradient-to-t  from-neutral-900 to-neutral-transparent ">
              {index + 1} - {formaterName(item.name)}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
