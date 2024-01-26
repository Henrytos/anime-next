import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

import Link from "next/link";
import { ReactNode } from "react";

const formaterName = (name: string) => {
  if (name.length > 7) return name.slice(0, 7) + "...";
  return name;
};

export function PosterName({ children, i }: { children: string; i: number }) {
  return (
    <div className=" w-full   absolute bottom-0 pl-1 pb-1 z-20 block text-white  text-sm font-semibold bg-gradient-to-t  from-neutral-900 to-neutral-transparent ">
      {i + 1} - {formaterName(children)}
    </div>
  );
}

export function PosterTitle({ children }: { children: ReactNode }) {
  return (
    <div className="absolute top-0 h-4 bg-neutral-900/50  w-[calc(100%_-_8px)] flex items-center  rounded-t px-1">
      <h3 className="text-xs font-bold block ">{children}</h3>
    </div>
  );
}

export function PostersRoot({ children }: { children: ReactNode }) {
  return (
    <Carousel className="w-full ">
      <CarouselContent className="-space-x-2 relative">
        {children}
      </CarouselContent>
    </Carousel>
  );
}

export function PosterItem({ children }: { children: ReactNode }) {
  return <CarouselItem className=" basis-1/3  h-44">{children}</CarouselItem>;
}

export function PosterimgLink({
  img,
  name,
  href,
}: {
  img: string;
  name: string;
  href: string;
}) {
  return (
    <div className="w-full h-full relative">
      <Link className="w-full " href={href}>
        <Image
          src={`${img}`}
          alt={`capa de mangá de ${name}`}
          width={150}
          height={160}
          className=" w-full h-full object-cover rounded  shadow "
        />
      </Link>
    </div>
  );
}
