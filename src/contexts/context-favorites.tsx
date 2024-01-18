"use client";
import { Anime } from "@/types/anime";
import { ReactNode, createContext, useEffect, useState } from "react";

interface ContextFavoriteAnimeType {
  animes: Anime[];
  addAnime: (anime: Anime) => void;
  removeAnime: (anime: Anime) => void;
}

export const ContextFavoriteAnime = createContext(
  {} as ContextFavoriteAnimeType
);

export function FavoriteAnimeProvider({ children }: { children: ReactNode }) {
  const [animes, setAnimes] = useState<Anime[]>(() => {
    if (typeof window !== "undefined") {
      const storedAnimes = localStorage.getItem("animes");
      return storedAnimes ? JSON.parse(storedAnimes) : [];
    }
    return [];
  });

  function addAnime(anime: Anime) {
    setAnimes((state) => [anime, ...state]);
  }

  function removeAnime(anime: Anime) {
    setAnimes((state) => state.filter((animeState) => animeState !== anime));
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("animes", JSON.stringify(animes));
    }
  }, [animes]);
  return (
    <ContextFavoriteAnime.Provider value={{ animes, addAnime, removeAnime }}>
      {children}
    </ContextFavoriteAnime.Provider>
  );
}
