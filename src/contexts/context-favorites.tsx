"use client";
import { Anime } from "@/types/anime";
import { ReactNode, createContext, useEffect, useState } from "react";

interface ContextFavoriteType {
  favorites: Anime[];
  addFavorites: (anime: Anime) => void;
  removeFavorites: (anime: Anime) => void;
}

export const ContextFavorite = createContext({} as ContextFavoriteType);

export function FavoriteProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Anime[]>(() => {
    if (typeof window !== "undefined") {
      const favorites = localStorage.getItem("favorites");
      return favorites ? JSON.parse(favorites) : [];
    }
    return [];
  });

  function addFavorites(anime: Anime) {
    setFavorites((state) => [anime, ...state]);
  }

  function removeFavorites(anime: Anime) {
    setFavorites((state) =>
      state.filter((favoritestate) => favoritestate !== anime)
    );
  }

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
