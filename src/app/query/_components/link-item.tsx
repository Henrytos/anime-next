import { Poster } from "@/_components/carousel-poster";
import {
  PosterTitle,
  PosterimgLink,
} from "@/_components/details/carousel-character";
import { formaterTitle } from "@/_lib/formater";
export function LinkItem({
  anime,
  type,
}: {
  anime: Poster;
  type: "anime" | "manga";
}) {
  return (
    <div className="h-44 min-[400px]:h-52 sm:h-72 md:h-80 relative w-full">
      <PosterimgLink
        href={`/${type}/${anime.id}?type=${type}`}
        img={anime.img}
        name={anime.name}
      />

      <PosterTitle>{formaterTitle(anime.name, 13)}</PosterTitle>
    </div>
  );
}
