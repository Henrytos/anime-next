import { Poster } from "@/components/carousel-poster";
import {
  PosterTitle,
  PosterimgLink,
} from "@/components/details/carousel-character";
export function LinkItem({
  anime,
  type,
}: {
  anime: Poster;
  type: "anime" | "manga";
}) {
  function formaterTitle(name: string) {
    return name.length > 13 ? name.slice(0, 13) + "..." : name;
  }
  return (
    <div className="relative w-full">
      <PosterimgLink
        href={`/${type}/${anime.id}?type=${type}`}
        img={anime.img}
        name={anime.name}
      />

      <PosterTitle>{formaterTitle(anime.name)}</PosterTitle>
    </div>
  );
}
