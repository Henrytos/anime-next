import { ContextFavorite, Favorite } from "@/contexts/context-favorites";
import { Star, X } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

export function FavoiteItem({ favorite }: { favorite: Favorite }) {
  const { removeFavorites } = useContext(ContextFavorite);
  const formaterTitle = (title: string) => {
    if (title.length > 20) return title.slice(0, 20) + "...";
    return title;
  };
  const type = favorite.type;
  return (
    <div className="relative w-full h-48 ">
      <Link
        href={`/${type}/${favorite.id}?type=${type}`}
        className="flex h-full gap-3 items-center "
      >
        <img
          src={favorite.imageUrl}
          alt={favorite.name}
          width={200}
          height={200}
          className="w-2/5 h-full rounded object-cover"
        />

        <div className="flex flex-col w-2/3 gap-2 ">
          <h2 className="text-lg font-semibold">
            {formaterTitle(favorite.name)}
          </h2>
          <span
            className=" w-14 text-center text-xs font-light px-2 py-1 
          border border-neutral-700   rounded"
          >
            {favorite.type}
          </span>
          <p className="text-sm font-light ">
            {favorite.synopsis.slice(0, 70)}...
          </p>
        </div>
      </Link>

      <div className="absolute top-0 right-0 flex items-center gap-2">
        <span className=" text-sm font-normal text-white/75 flex gap-1 items-center">
          <Star size={16} className="text-yellow-300" />
        </span>
        <span>
          <X
            className="text-primary/75 cursor-pointer"
            size={20}
            id="btn-remove-favorite"
          />
        </span>
      </div>
    </div>
  );
}
