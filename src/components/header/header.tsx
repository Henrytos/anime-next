import Link from "next/link";
import { SearchAnime } from "./search-anime";

export function Header() {
  return (
    <header className="dark:bg-neutral-900 flex items-center justify-between px-4 py-2 h-14">
      <Link href={"/"}>
        <img
          src="/imgs/logo.webp"
          alt="logotiopo"
          width={100}
          height={100}
          className="h-full w-10  "
        />
      </Link>
      <SearchAnime />
      <img
        src="/imgs/eu.jpg"
        alt="logotiopo"
        width={100}
        height={100}
        className="h-full w-10  rounded-full"
      />
    </header>
  );
}
