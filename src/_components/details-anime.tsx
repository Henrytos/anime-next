import { Text } from "@/_components/text";
import { Title } from "@/_components/title";
import { Badge } from "@/_components/ui/badge";
import { Anime } from "@/_types/anime";
import { Star } from "lucide-react";

export function DetailsAnime({ anime }: { anime: Anime }) {
  return (
    <>
      <Title className="flex justify-between ">
        <span>
          {anime.title}{" "}
          {anime.year && (
            <span className="font-light text-sm ">({anime.year})</span>
          )}
        </span>
        <span className="text-base flex gap-1 items-end font-normal">
          {anime.score}
          <Star size={16} className="text-yellow-300 -translate-y-1" />
        </span>
      </Title>

      <div className="flex gap-1 ">
        {anime.genres.slice(0, 3).map((genre) => (
          <Badge key={genre.url} className="rounded">
            {genre.name}
          </Badge>
        ))}
      </div>
      {anime.episodes && (
        <div className="flex gap-2">
          <Text>{anime.episodes} episodes</Text>
          <Text>{anime.duration}</Text>
        </div>
      )}
    </>
  );
}
