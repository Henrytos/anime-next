import Link from "next/link";
import { SearchAnime } from "./search-anime";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { AlignJustify } from "lucide-react";

export function Header() {
  return (
    <header className="dark:bg-neutral-900 flex items-center justify-between px-4 py-2 h-14 gap-2">
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

      <Sheet>
        <SheetTrigger>
          {" "}
          <AlignJustify />{" "}
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}
