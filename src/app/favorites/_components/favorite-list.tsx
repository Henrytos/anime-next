import { Favorite } from "@/_contexts/context-favorites";
import { MagicMotion } from "react-magic-motion";
import { FavoiteItem } from "./favorite-item";

interface FavoriteListProps {
  favorites: Favorite[];
}
export const FavoriteList = ({ favorites }: FavoriteListProps) => {
  return (
    <>
      <MagicMotion>
        <div className=" grid sm:grid-cols-2 lg:gap-x-6 space-y-0 gap-4">
          {favorites
            .slice()
            .reverse()
            .map((favorite) => (
              <FavoiteItem favorite={favorite} key={favorite.imageUrl} />
            ))}
        </div>
      </MagicMotion>
    </>
  );
};
