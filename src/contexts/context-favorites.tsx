"use client";
import { useSession } from "next-auth/react";
import { ReactNode, createContext, useEffect, useState } from "react";
import { fetchFavoritesUser } from "./action";
import {
  addToFavoriteAction,
  removeFromFavoriteAction,
} from "@/lib/action-favorite";

export interface Favorite {
  id: string;
  userId?: string;
  name: string;
  synopsis: string;
  type: string;
  imageUrl: string;
  score: number;
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
    addToFavoriteAction(favorite, data?.user?.email as string);
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
