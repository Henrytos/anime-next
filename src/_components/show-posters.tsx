"use client";
import * as React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/_components/ui/carousel";
import { Anime } from "@/_types/anime";
import { SubTitle } from "./sub-title";
import { Text } from "./text";
import { Button } from "./ui/button";
import Link from "next/link";
import { formaterTitle } from "@/_lib/formater";

interface ShowAnimesPosterProps {
  posters: Anime[];
  type: "anime" | "manga";
}

export default function ShowPosters({ posters, type }: ShowAnimesPosterProps) {
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
            <div className="grid grid-cols-5 gap-10">
              <img
                src={poster.images.jpg.large_image_url}
                alt={poster.title}
                className=" col-span-5 md:col-span-2 w-full h-[650px] md:h-[550px] object-cover"
              />

              <Button asChild className="inline-flex md:hidden col-span-5">
                <Link
                  href={`/${type}/${poster.mal_id}?type=${type}`}
                  className=""
                >
                  Visitar{" "}
                </Link>
              </Button>
              <div className="col-span-3   justify-between hidden md:flex md:flex-col">
                <div className="space-y-6">
                  <SubTitle>{poster.title}</SubTitle>

                  <Text>{formaterTitle(poster.synopsis, 400)}</Text>
                </div>

                <Button asChild className="hidden md:inline-flex">
                  <Link
                    href={`/${type}/${poster.mal_id}?type=${type}`}
                    className=""
                  >
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
