"use client";
import { Container } from "@/components/constainer";
import { Content } from "@/components/details/content";
import { SubTitle } from "@/components/sub-title";
import { ContextFavorite } from "@/contexts/context-favorites";
import { Heart } from "lucide-react";

import { useContext } from "react";
import { FavoiteItem } from "./components/favorite-item";
import { NavLinks } from "./components/nav-links";
import { MainContent } from "./components/main-content";
import { NotFavorites } from "./components/not-favorites";

export default function FavoritesPage() {
  const { favorites } = useContext(ContextFavorite);
  return (
    <Container>
      <MainContent>
        <SubTitle className="flex justify-between items-center -mb-2">
          <span> Favorites All </span>
          <span className="flex items-center gap-1">
            <span className="font-light text-lg">{favorites.length}</span>
            <Heart className="w-5 h-5 text-primary translate-y-px" />{" "}
          </span>
        </SubTitle>
        <NavLinks />
        {favorites.length > 0 ? (
          <Content className="space-y-3 grid lg:grid-cols-2 lg:gap-x-6">
            {favorites.map((anime) => (
              <FavoiteItem anime={anime} key={anime.url} />
            ))}
          </Content>
        ) : (
          <NotFavorites />
        )}
      </MainContent>
    </Container>
  );
}
