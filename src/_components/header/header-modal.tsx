"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "../ui/sheet";
import {
  AlignJustify,
  BookOpen,
  Heart,
  History,
  Home,
  LogIn,
  LogOut,
} from "lucide-react";
import { SubTitle } from "../sub-title";
import { Content } from "../details/content";
import { SideLink } from "../side-bar/side-link";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";

import { signIn, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

export function HeaderModal() {
  const { data } = useSession();

  const handleClickSingIn = () => signIn("google");
  const handleClickSingOut = () => signOut();

  return (
    <Sheet>
      <SheetTrigger id="btn-menu">
        {" "}
        <AlignJustify />{" "}
      </SheetTrigger>
      <SheetContent className="bg-neutral-900 flex flex-col justify-between">
        <Content className="space-y-6">
          <SubTitle className="flex gap-1 items-center">
            Next Anime
            <img
              src="/imgs/logo.webp"
              alt="logotiopo"
              width={100}
              height={100}
              className="h-full w-10   "
            />
          </SubTitle>
          <Separator />
          {data?.user && (
            <>
              <Content>
                <div className="flex gap-4 items-center">
                  <Avatar>
                    <AvatarImage
                      src={data?.user?.image?.toString()}
                      alt={data?.user?.name?.toString()}
                    />
                    <AvatarFallback>
                      {data.user.name?.slice(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-base font-normal">
                      {data?.user?.name}
                    </h2>
                    <h3 className="text-sm text-zinc-500 font-light underline">
                      {data.user.email}
                    </h3>
                  </div>
                </div>
              </Content>
              <Separator />
            </>
          )}
          <Content>
            <SheetDescription>
              <ul className="flex flex-col gap-4">
                <SideLink isInModalLink={true} icon={Home} href="/">
                  Home
                </SideLink>

                <SideLink isInModalLink={true} icon={BookOpen} href="/manga">
                  Mangás
                </SideLink>
                {data?.user && (
                  <SideLink isInModalLink={true} icon={Heart} href="/favorites">
                    Favoritos
                  </SideLink>
                )}
                <SideLink
                  isInModalLink={true}
                  icon={AlignJustify}
                  href="/random"
                >
                  Random
                </SideLink>
                {data?.user && (
                  <SideLink
                    isInModalLink
                    icon={History}
                    href={`/historic?pagination=0`}
                  >
                    Historic
                  </SideLink>
                )}
              </ul>
            </SheetDescription>
          </Content>{" "}
        </Content>
        {!data ? (
          <Button className="space-x-4 " onClick={handleClickSingIn}>
            {" "}
            <LogIn /> <span>Sing in</span>
          </Button>
        ) : (
          <Button className="space-x-4" onClick={handleClickSingOut}>
            <LogOut /> <span>Sing out</span>
          </Button>
        )}
      </SheetContent>
    </Sheet>
  );
}
