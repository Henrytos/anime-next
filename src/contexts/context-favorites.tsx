"use client";
import { Anime } from "@/types/anime";
import { useSession } from "next-auth/react";
import { ReactNode, createContext, useEffect, useState } from "react";
import { fetchFavoritesUser } from "./action";

export interface Favorite {
  id: string;
  userId?: string;
  name: string;
  synopsis: string;
  type: string;
  imageUrl: string;
}
interface ContextFavoriteType {
  favorites: Favorite[];
  addFavorites: (anime: Favorite) => void;
  removeFavorites: (anime: Favorite) => void;
}

export const ContextFavorite = createContext({} as ContextFavoriteType);

export function FavoriteProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  function addFavorites(favorite: Favorite) {
    setFavorites((state) => [favorite, ...state]);
  }

  function removeFavorites(favorite: Favorite) {
    setFavorites((state) =>
      state.filter((favoritestate) => favoritestate !== favorite)
    );
  }
  const { data } = useSession();
  useEffect(() => {
    if (data != undefined) {
      fetchFavoritesUser(data?.user?.email!).then((res) => {
        setFavorites(res);
      });
    }
  }, [data]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);
  return (
    <ContextFavorite.Provider
      value={{ favorites, addFavorites, removeFavorites }}
    >
      {children}
    </ContextFavorite.Provider>
  );
}
