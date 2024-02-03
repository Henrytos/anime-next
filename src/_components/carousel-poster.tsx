import { formaterTitle } from "@/_lib/formater";
import {
  PosterItem,
  PosterTitle,
  PosterimgLink,
  PostersRoot,
} from "./details/carousel-character";
export interface Poster {
  id: number;
  name: string;
  img: string;
}

export interface CarouselPostersProps {
  posters: Poster[];
  type: "anime" | "manga";
}

export function CarouselPosters({ posters, type }: CarouselPostersProps) {
  return (
    <PostersRoot>
      {posters.map((item) => (
        <PosterItem key={item.id}>
          <PosterimgLink {...item} href={`/${type}/${item.id}?type=${type}`} />
          <PosterTitle>{formaterTitle(item.name, 13)}</PosterTitle>{" "}
        </PosterItem>
      ))}
    </PostersRoot>
  );
}
