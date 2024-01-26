import {
  PosterItem,
  PosterName,
  PosterTitle,
  PosterimgLink,
  PostersRoot,
} from "./details/carousel-character";
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
    <PostersRoot>
      {posters.map((item, i) => (
        <PosterItem key={item.id}>
          <PosterimgLink {...item} href={`/${type}/${item.id}?type=${type}`} />
          <PosterTitle>{formaterTitle(item.name)}</PosterTitle>{" "}
        </PosterItem>
      ))}
    </PostersRoot>
  );
}
