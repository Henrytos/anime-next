"use client";

import { Container } from "@/_components/constainer";
import { Content } from "@/_components/details/content";
import { SubTitle } from "@/_components/sub-title";
import { ContextFavorite } from "@/_contexts/context-favorites";
import { Heart } from "lucide-react";

import { useContext } from "react";
import { FavoiteItem } from "../_components/favorite-item";
import { MainContent } from "../_components/main-content";
import { NavLinks } from "../_components/nav-links";
import { NotFavorites } from "../_components/not-favorites";

export default function FavoritesMangaPage() {
  const { favorites } = useContext(ContextFavorite);
  const favoritesMagas = favorites.filter(
    (favorite) => favorite.type == "manga"
  );
  return (
    <Container>
      <MainContent>
        <SubTitle className="flex justify-between items-center -mb-2">
          <span> Favorite Mangás</span>
          <span className="flex items-center gap-1">
            <span className="font-light text-lg">{favoritesMagas.length}</span>
            <Heart className="w-5 h-5 text-primary translate-y-px" />{" "}
          </span>
        </SubTitle>
        <NavLinks />
        {favoritesMagas.length > 0 ? (
          <Content className="space-y-3 grid sm:grid-cols-2 lg:gap-x-6">
            {favoritesMagas.map((favorite) => (
              <FavoiteItem favorite={favorite} />
            ))}
          </Content>
        ) : (
          <NotFavorites />
        )}
      </MainContent>
    </Container>
  );
}
