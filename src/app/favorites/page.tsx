"use client";
import { useFavorites } from "@/_contexts/context-favorites";
import { NotFavorites } from "./_components/not-favorites";
import { FavoriteList } from "./_components/favorite-list";

interface FavoritesPageProps {
  params: {};
  searchParams: {
    type?: "anime" | "manga";
  };
}

export default function FavoritesPage(props: FavoritesPageProps) {
  const { favorites } = useFavorites();

  let favoritesCurrent = favorites;
  const currentType = props.searchParams.type;

  if (["anime", "manga"].some((type) => type === currentType)) {
    favoritesCurrent = favorites.filter((f) => f.type === currentType);
  }

  return (
    <>
      {favoritesCurrent.length > 0 ? (
        <FavoriteList favorites={favoritesCurrent} />
      ) : (
        <NotFavorites />
      )}
    </>
  );
}
