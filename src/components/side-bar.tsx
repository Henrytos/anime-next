import { BookOpen, Heart, Home } from "lucide-react";
import Link from "next/link";

export function SideBar() {
  return (
    <aside className="flex px-6 py-2 h-16 justify-between bg-neutral-900">
      <Link href="/" className="flex flex-col gap-1 items-center text-white">
        <Home />
        <span className="text-sm font-light">Home</span>
      </Link>
      <Link
        href="/mangas"
        className="flex flex-col gap-1 items-center text-white"
      >
        <BookOpen />
        <span className="text-sm font-light">mangas</span>
      </Link>
      <Link
        href="/favorites"
        className="flex flex-col gap-1 items-center text-white"
      >
        <Heart />
        <span className="text-sm font-light">favoritos</span>
      </Link>
      <Link
        href="/plus"
        className="flex flex-col gap-1 items-center text-white"
      >
        <Home />
        <span className="text-sm font-light">mais</span>
      </Link>
    </aside>
  );
}
