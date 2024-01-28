"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { AlignJustify, BookOpen, Heart, Home } from "lucide-react";
import { SubTitle } from "../sub-title";
import { Content } from "../details/content";
import { SideLink } from "../side-bar/side-link";

export function HeaderModal() {
  return (
    <Sheet>
      <SheetTrigger className="hidden sm:block">
        {" "}
        <AlignJustify />{" "}
      </SheetTrigger>
      <SheetContent className="bg-neutral-900">
        <SheetHeader>
          <SubTitle className="flex gap-2 items-center">
            Next Anime
            <img
              src="/imgs/logo.webp"
              alt="logotiopo"
              width={100}
              height={100}
              className="h-full w-10   "
            />
          </SubTitle>
          <Content>
            <SheetDescription>
              <ul className="flex flex-col gap-4">
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
              </ul>
            </SheetDescription>
          </Content>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
