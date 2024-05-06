import { Card } from "@/_components/ui/card";
import { Favorite, useFavorites } from "@/_contexts/context-favorites";
import { formaterTitle } from "@/_lib/formater";
import { Star, X } from "lucide-react";
import Link from "next/link";

export function FavoiteItem({ favorite }: { favorite: Favorite }) {
  const { removeFavorites } = useFavorites();

  const type = favorite.type;
  const handleClickRemove = () => {
    removeFavorites(favorite);
  };

  return (
    <Card className="rounded-xl bg-neutral-900">
      <div className="relative w-full ">
        <Link
          href={`/${type}/${favorite.id}?type=${type}`}
          className="grid grid-cols-3 h-full gap-3 items-center "
        >
          <img
            src={favorite.imageUrl}
            alt={favorite.name}
            width={200}
            height={200}
            className="col-span-1 h-full rounded object-cover"
          />

          <div className="col-span-2 space-y-4 ">
            <div>
              <h2 className="text-lg font-semibold">
                {formaterTitle(favorite.name, 20)}
              </h2>
              <span
                className=" w-14 text-center text-xs font-light px-2 py-1 
          border border-neutral-700   rounded"
              >
                {favorite.type}
              </span>
            </div>
            <div>
              <p className="text-sm font-light     ">
                {favorite.synopsis.slice(0, 150)}...
              </p>
            </div>
          </div>
        </Link>

        <div className="absolute top-0 right-0 flex items-center gap-2">
          <span className=" text-sm font-normal text-white/75 flex gap-1 items-center">
            <span>{favorite.score}</span>
            <Star size={16} className="text-yellow-300 fill-yellow-300" />
          </span>
          <span>
            <X
              className="text-primary/75 cursor-pointer"
              size={20}
              id="btn-remove-favorite"
              onClick={handleClickRemove}
            />
          </span>
        </div>
      </div>
    </Card>
  );
}
