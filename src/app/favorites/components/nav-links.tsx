import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const path = usePathname();
  return (
    <nav className="flex gap-3 text-sm font-light ">
      <Link
        className={`${path == "/favorites" ? "font-semibold underline" : ""}`}
        href="/favorites"
      >
        All
      </Link>
      <Link
        className={`${
          path == "/favorites/animes" ? "font-semibold underline" : ""
        }`}
        href="/favorites/animes"
      >
        Animes
      </Link>
      <Link
        className={`${
          path == "/favorites/mangas" ? "font-semibold underline" : ""
        }`}
        href="/favorites/mangas"
      >
        Mangás
      </Link>
    </nav>
  );
}
