"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ContextFavorite } from "@/contexts/context-favorites";
import { Anime } from "@/types/anime";
import { Check, Heart, LogIn } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useContext } from "react";

export function ButtonAddManga({ anime }: { anime: Anime }) {
  const { toast } = useToast();

  const { addFavorites, favorites } = useContext(ContextFavorite);

  const { data } = useSession();

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

  const handleClickSingIn = () => signIn("google");
  return (
    <>
      {data?.user && (
        <>
          {isFavorite ? (
            <Button
              className="space-x-2 w-full  bg-primary/50 text-secondary-foreground rounded cursor-not-allowed hover:bg-primary/50"
              disabled={true}
            >
              {" "}
              <Check /> <span>favorited</span>
            </Button>
          ) : (
            <Button
              className="space-x-2 w-full border border-primary bg-primary text-secondary-foreground rounded cursor-pointer  "
              onClick={() => handleClick()}
              id="btn-add-favorite"
            >
              {" "}
              <Heart /> <span>Add Favorites</span>
            </Button>
          )}
        </>
      )}

      {!data?.user && (
        <Button className="space-x-4 " onClick={handleClickSingIn}>
          {" "}
          <LogIn /> <span>Sing in</span>
        </Button>
      )}
    </>
  );
}
