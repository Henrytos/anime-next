"use client";
import { useSession } from "next-auth/react";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { fetchFavoritesUser } from "./action";
import {
  addToFavoriteAction,
  removeFromFavoriteAction,
} from "@/_lib/action-favorite";

export interface Favorite {
  id: string;
  userId: string;
  name: string;
  synopsis: string;
  type: string;
  imageUrl: string;
  score: number;
}
interface ContextFavoriteType {
  listFavorites: Favorite[];
  mangasFavorites: Favorite[];
  animesFavorites: Favorite[];
  addFavorites: (anime: Favorite) => void;
  removeFavorites: (anime: Favorite) => void;
}

export const ContextFavorite = createContext({} as ContextFavoriteType);

export function FavoriteProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  function addFavorites(favorite: Favorite) {
    setFavorites((state) => [favorite, ...state]);
    addToFavoriteAction(favorite);
  }

  function removeFavorites(favorite: Favorite) {
    setFavorites((state) =>
      state.filter((favoritestate) => favoritestate !== favorite)
    );

    removeFromFavoriteAction(favorite.id);
  }
  const { data } = useSession();
  useEffect(() => {
    if (data != undefined) {
      fetchFavoritesUser(data?.user?.email!).then((res) => {
        setFavorites(res);
      });
    }
  }, [data]);
  const listFavorites = favorites.toReversed();

  const mangasFavorites = useMemo(
    () => listFavorites.filter((favorite) => favorite.type == "manga"),
    [favorites]
  );
  const animesFavorites = useMemo(
    () => listFavorites.filter((favorite) => favorite.type == "anime"),
    [favorites]
  );
  return (
    <ContextFavorite.Provider
      value={{
        listFavorites,
        animesFavorites,
        mangasFavorites,
        addFavorites,
        removeFavorites,
      }}
    >
      {children}
    </ContextFavorite.Provider>
  );
}
