"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ContextFavoriteAnime } from "@/contexts/context-favorite-anime";
import { Anime } from "@/types/anime";
import { Check, Heart } from "lucide-react";
import { useContext } from "react";

export function ButtonAddAnime({ anime }: { anime: Anime }) {
  const { toast } = useToast();

  const { addAnime, animes } = useContext(ContextFavoriteAnime);

  function handleClick() {
    toast({
      title: `${anime.title} adicionado `,
      color: "#232323",
      className: "bg-neutral-900 ",
    });

    addAnime(anime);
  }

  const isFavorite = animes.some(
    (animeFavorite) => animeFavorite.mal_id === anime.mal_id
  );

  return (
    <>
      {isFavorite ? (
        <Button
          asChild
          className=" w-full  bg-primary/50 text-secondary-foreground rounded cursor-not-allowed hover:bg-primary/50"
          disabled={true}
        >
          <span className="flex gap-2">
            {" "}
            <Check /> <span>favorited</span>
          </span>
        </Button>
      ) : (
        <Button
          asChild
          className=" w-full border border-primary bg-primary text-secondary-foreground rounded cursor-pointer  "
          onClick={() => handleClick()}
        >
          <span className="flex gap-2">
            {" "}
            <Heart /> <span>Add Favorites</span>
          </span>
        </Button>
      )}
    </>
  );
}
