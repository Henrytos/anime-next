"use client";

import { Container } from "@/components/constainer";
import { Content } from "@/components/content";
import { SubTitle } from "@/components/sub-title";
import { ContextFavoriteAnime } from "@/contexts/context-favorite-anime";
import { Heart, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function FavoritesPage() {
  const { animes, removeAnime } = useContext(ContextFavoriteAnime);
  return (
    <Container>
      <SubTitle className="flex justify-between items-center mb-4">
        <span> Favorite animes </span>
        <span className="flex items-center gap-1">
          <span className="font-light text-lg">{animes.length}</span>
          <Heart className="w-5 h-5 text-primary translate-y-px" />{" "}
        </span>
      </SubTitle>
      <Content className="space-y-3">
        {animes.map((anime) => (
          <div className="relative w-full" key={anime.mal_id}>
            <Link
              href={`/anime/${anime.mal_id}`}
              className="flex gap-2 items-center "
            >
              <Image
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                width={200}
                height={200}
                className="w-1/3 h-36 rounded object-cover"
              />

              <div className="w-2/3 space-y-1">
                <h2 className="text-sm font-semibold">{anime.title}</h2>
                <p className="text-xs font-light ">
                  {anime.synopsis.slice(0, 100)}...
                </p>
              </div>
            </Link>

            <div className="absolute top-0 right-0 flex gap-2">
              <span className=" text-xs font-light text-white/75 flex gap-1 items-center">
                {anime.score} <Star size={10} className="text-yellow-300" />
              </span>
              <span>
                <X
                  className="text-primary/75 cursor-pointer"
                  size={18}
                  onClick={() => removeAnime(anime)}
                />
              </span>
            </div>
          </div>
        ))}
      </Content>
    </Container>
  );
}
