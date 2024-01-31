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
      <SheetTrigger className="hidden sm:block" id="btn-menu">
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
          {data?.user ? (
            <>
              <Content>
                <div className="flex gap-4 items-center">
                  <Avatar>
                    <AvatarImage
                      src={data?.user?.image?.toString()}
                      alt={data?.user?.name?.toString()}
                    />
                    <AvatarFallback>{data.user.name}</AvatarFallback>
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
          ) : (
            <>
              <Content>
                <div className="flex gap-4 items-center">
                  <Avatar>
                    <AvatarImage
                      src={data?.user?.image?.toString()}
                      alt={data?.user?.name?.toString()}
                      className="animate-pulse"
                    />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-base font-normal">Lorem, ipsum.</h2>
                    <h3 className="text-sm text-zinc-500 font-light">
                      Lorem, ipsum.
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
