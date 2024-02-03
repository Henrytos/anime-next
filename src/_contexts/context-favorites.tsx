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
interface FavoriteContextType {
  favorites: Favorite[];
  mangasFavorites: Favorite[];
  animesFavorites: Favorite[];
  addFavorites: (anime: Favorite) => void;
  removeFavorites: (anime: Favorite) => void;
}

export const FavoriteContext = createContext({} as FavoriteContextType);

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

  const mangasFavorites = useMemo(
    () => favorites.filter((favorite) => favorite.type == "manga"),
    [favorites]
  );
  const animesFavorites = useMemo(
    () => favorites.filter((favorite) => favorite.type == "anime"),
    [favorites]
  );
  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        animesFavorites,
        mangasFavorites,
        addFavorites,
        removeFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
