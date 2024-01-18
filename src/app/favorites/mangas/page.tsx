"use client";

import { Container } from "@/components/constainer";
import { Content } from "@/components/details/content";
import { SubTitle } from "@/components/sub-title";
import { ContextFavorite } from "@/contexts/context-favorites";
import { Heart } from "lucide-react";

import { useContext } from "react";
import { FavoiteItem } from "../components/favorite-item";
import { MainContent } from "../components/main-content";
import { NavLinks } from "../components/nav-links";
import { NotFavorites } from "../components/not-favorites";

export default function FavoritesMangaPage() {
  const { favorites } = useContext(ContextFavorite);
  const mangas = favorites.filter((favorite) => favorite.isAnime === false);
  return (
    <Container>
      <MainContent>
        <SubTitle className="flex justify-between items-center -mb-2">
          <span> Favorite Mangás </span>
          <span className="flex items-center gap-1">
            <span className="font-light text-lg">{mangas.length}</span>
            <Heart className="w-5 h-5 text-primary translate-y-px" />{" "}
          </span>
        </SubTitle>
        <NavLinks />
        {mangas.length > 0 ? (
          <Content className="space-y-3">
            {mangas.map((manga) => (
              <FavoiteItem anime={manga} />
            ))}
          </Content>
        ) : (
          <NotFavorites />
        )}
      </MainContent>
    </Container>
  );
}
