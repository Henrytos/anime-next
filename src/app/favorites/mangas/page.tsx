"use client";
import { MagicMotion } from "react-magic-motion";
import { Content } from "@/_components/details/content";
import { FavoriteContext } from "@/_contexts/context-favorites";
import { useContext } from "react";
import { FavoiteItem } from "../_components/favorite-item";
import { NotFavorites } from "../_components/not-favorites";

export default function FavoritesMangaPage() {
  const { favorites } = useContext(FavoriteContext);
  const mangasFavorites = favorites.filter(
    (favorite) => favorite.type == "manga"
  );
  return (
    <>
      {mangasFavorites.length > 0 ? (
        <MagicMotion>
          <Content className="space-y-3 grid sm:grid-cols-2 lg:gap-x-6">
            {mangasFavorites
              ?.slice()
              .reverse()
              .map((favorite) => (
                <FavoiteItem favorite={favorite} key={favorite.id} />
              ))}
          </Content>
        </MagicMotion>
      ) : (
        <NotFavorites />
      )}
    </>
  );
}
