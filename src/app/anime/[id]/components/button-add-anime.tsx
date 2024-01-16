"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Heart } from "lucide-react";

export function ButtonAddAnime({
  animeId,
  name,
}: {
  animeId: number;
  name: string;
}) {
  const { toast } = useToast();

  return (
    <Button
      asChild
      className=" w-full border border-primary bg-primary text-secondary-foreground rounded cursor-pointer  "
      onClick={() => {
        toast({
          title: `${name} adicionado `,
          description: `${new Date().toLocaleDateString()}`,
          color: "#232323",
          className: "bg-neutral-900 ",
        });
      }}
    >
      <span className="flex gap-2">
        {" "}
        <Heart /> <span>Add Favorites</span>
      </span>
    </Button>
  );
}
