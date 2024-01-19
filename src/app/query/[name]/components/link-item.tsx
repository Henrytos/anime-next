import { Poster } from "@/components/carousel-poster";
import Link from "next/link";

export function LinkItem({
  anime,
  type,
}: {
  anime: Poster;
  type: "anime" | "manga";
}) {
  function formaterTitle(name: string) {
    return name.length > 15 ? name.slice(0, 15) + "..." : name;
  }
  return (
    <Link
      href={`/${type}/${anime.id}`}
      className="relative w-full rounde h-48"
      key={anime.id}
    >
      <img src={anime.img} alt={anime.name} className="w-full h-full rounded" />
      <div className="absolute top-0 text-xs bg-neutral-900/50 w-full px-2 py-1">
        {formaterTitle(anime.name)}
      </div>
    </Link>
  );
}
