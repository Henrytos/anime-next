"use client";

import { signIn, useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import clsx from "clsx";
import { useState } from "react";

export function CardSingIn() {
  const { data } = useSession();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickSingIn = () => signIn("google");
  const handleClickClose = () => {
    setIsOpen(true);
  };

  return (
    !data?.user && (
      <div
        className={clsx(
          "absolute top-0 right-0 w-screen h-screen bg-neutral-950/35",
          {
            hidden: isOpen,
          }
        )}
      >
        <div
          className="absolute  left-1/2 -translate-x-1/2  transition-all flex max-w-xs items-center h-40 gap-4 px-4 py-3 bg-neutral-900"
          id="drop-animation"
        >
          <img
            src="https://animefire.plus/img/lt/nekog.webp"
            alt=""
            className="h-full object-cover"
          />
          <div className="flex flex-col justify-between h-full  ">
            <p>Oie ツ, quer ter uma melhor experiencia?</p>
            <div className="grid grid-cols-2 gap-2">
              <Button onClick={handleClickSingIn} variant={"secondary"}>
                sim
              </Button>
              <Button onClick={handleClickClose} variant={"secondary"}>
                Não
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
