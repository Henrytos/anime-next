"use client";
import * as React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/_components/ui/carousel";
import { Anime } from "@/_types/anime";
import { SubTitle } from "./sub-title";
import { Text } from "./text";
import { Button } from "./ui/button";
import Link from "next/link";

interface ShowAnimesPosterProps {
  posters: Anime[];
}

export default function ShowPosters({ posters }: ShowAnimesPosterProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-full] m-auto mb-0 pb-0">
      <CarouselContent className="">
        {posters.map((poster) => (
          <CarouselItem key={poster.mal_id} className="w-full ">
            <div className="grid grid-cols-3 gap-10">
              <img
                src={poster.images.jpg.large_image_url}
                alt={poster.title}
                className="col-span-1 h-[500px] object-cover"
              />
              <div className="col-span-2 flex flex-col justify-between">
                <div className="space-y-6">
                  <SubTitle>{poster.title}</SubTitle>

                  <Text>{poster.synopsis}</Text>
                </div>

                <Button asChild>
                  <Link href={`/anime/${poster.mal_id}`} className="">
                    Visitar{" "}
                  </Link>
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
