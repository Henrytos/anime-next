import { HeaderModal } from "./header-modal";
import { SearchAnime } from "./search-anime";

import Link from "next/link";

export function Header() {
  return (
    <header className="dark:bg-neutral-900 flex items-center justify-between px-4 py-2 h-14 lg:h-20 gap-2 border-b border-zinc-300/10 shadow-inner">
      <Link href={"/"}>
        <img
          src="/imgs/logo.webp"
          alt="logotiopo"
          width={100}
          height={100}
          className="h-full w-10   "
        />
      </Link>
      <SearchAnime />
      <HeaderModal />
    </header>
  );
}
