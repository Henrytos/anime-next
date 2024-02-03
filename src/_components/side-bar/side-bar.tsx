"use client";
import { AlignJustify, BookOpen, Heart, Home } from "lucide-react";
import { SideLink } from "./side-link";

export function SideBar() {
  return (
    <aside className="flex px-6 py-2 h-16 justify-between bg-neutral-900 sm:hidden">
      <SideLink icon={Home} href="/">
        Home
      </SideLink>
      <SideLink icon={BookOpen} href="/manga">
        Mangás
      </SideLink>
      <SideLink icon={Heart} href="/favorites">
        Favoritos
      </SideLink>
      <SideLink icon={AlignJustify} href="/random">
        Random
      </SideLink>
    </aside>
  );
}
