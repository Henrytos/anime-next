import { ContextFavorite } from "@/contexts/context-favorites";
import { Anime } from "@/types/anime";
import { Star, X } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

export function FavoiteItem({ anime }: { anime: Anime }) {
  const { removeFavorites } = useContext(ContextFavorite);
  const formaterTitle = (title: string) => {
    if (title.length > 20) return title.slice(0, 20) + "...";
    return title;
  };
  const isAnime = anime.isAnime == true ? "anime" : "manga";
  return (
    <div className="relative w-full h-48 " key={anime.mal_id}>
      <Link
        href={`/${isAnime}/${anime.mal_id}`}
        className="flex h-full gap-3 items-center "
      >
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          width={200}
          height={200}
          className="w-2/5 h-full rounded object-cover"
        />

        <div className="flex flex-col w-2/3 gap-2 ">
          <h2 className="text-lg font-semibold">
            {formaterTitle(anime.title)}
          </h2>
          <span
            className=" w-14 text-center text-xs font-light px-2 py-1 
          border border-neutral-700   rounded"
          >
            {anime.isAnime == true ? "anime" : "mangá"}
          </span>
          <p className="text-sm font-light ">
            {anime.synopsis.slice(0, 70)}...
          </p>
        </div>
      </Link>

      <div className="absolute top-0 right-0 flex items-center gap-2">
        <span className=" text-sm font-normal text-white/75 flex gap-1 items-center">
          {anime.score} <Star size={16} className="text-yellow-300" />
        </span>
        <span>
          <X
            className="text-primary/75 cursor-pointer"
            size={20}
            onClick={() => removeFavorites(anime)}
          />
        </span>
      </div>
    </div>
  );
}
