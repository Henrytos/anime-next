"use client";
import { Button } from "@/_components/ui/button";
import { useToast } from "@/_components/ui/use-toast";
import { FavoriteContext, Favorite } from "@/_contexts/context-favorites";
import { Anime } from "@/_types/anime";
import { Check, Heart, LogIn } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useContext } from "react";

export function ButtonAddAnime({ anime }: { anime: Anime }) {
  const { toast } = useToast();
  const { favorites, addFavorites } = useContext(FavoriteContext);
  const { data } = useSession();

  const handleClickSingIn = () => signIn("google");

  function handleClick() {
    toast({
      title: `${anime.title} adicionado `,
      color: "#232323",
      className: "bg-neutral-900 ",
    });

    const favorite: Favorite = {
      id: anime.mal_id.toString(),
      imageUrl: anime.images.jpg.large_image_url,
      name: anime.title,
      synopsis: anime.synopsis,
      type: "anime",
      userId: (data?.user as any).id,
      score: anime.score,
    };

    addFavorites(favorite);
  }

  const isFavorite = favorites.some(
    (favoriteCurrent) =>
      favoriteCurrent.id.toString() == anime.mal_id.toString()
  );

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
