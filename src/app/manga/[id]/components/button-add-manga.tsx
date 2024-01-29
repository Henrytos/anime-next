"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ContextFavorite } from "@/contexts/context-favorites";
import { Anime } from "@/types/anime";
import { Check, Heart } from "lucide-react";
import { useContext } from "react";

export function ButtonAddManga({ anime }: { anime: Anime }) {
  const { toast } = useToast();

  const { addFavorites, favorites } = useContext(ContextFavorite);

  function handleClick() {
    toast({
      title: `${anime.title} adicionado `,
      color: "#232323",
      className: "bg-neutral-900 ",
    });

    const newAnime = { ...anime, isAnime: false };
    addFavorites(newAnime);
  }

  const isFavorite = favorites.some(
    (animeFavorite) => animeFavorite.mal_id === anime.mal_id
  );

  return (
    <>
      {isFavorite ? (
        <Button
          asChild
          className=" w-full  bg-primary/50 text-secondary-foreground rounded cursor-not-allowed hover:bg-primary/50"
          disabled={true}
          id="btn-add-favorite"
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
          id="btn-add-favorite"
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
