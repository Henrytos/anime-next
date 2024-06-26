"use client";
import { useSession } from "next-auth/react";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchFavoritesUser } from "./action";
import {
  addToFavoriteAction,
  removeFromFavoriteAction,
} from "@/_actions/action-favorite";

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

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorites,
        removeFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorites = () => {
  return useContext(FavoriteContext);
};
