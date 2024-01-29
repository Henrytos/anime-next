import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

import Link from "next/link";
import { ReactNode } from "react";

const formaterName = (name: string) => {
  if (name.length > 10) return name.slice(0, 10) + "...";
  return name;
};

export function PosterName({ children, i }: { children: string; i: number }) {
  return (
    <div className=" w-full   absolute bottom-0 pl-1 pb-1 z-20 block text-white  text-sm font-semibold bg-gradient-to-t  from-neutral-900 to-neutral-transparent lg:text-xl ">
      {i + 1} - {formaterName(children)}
    </div>
  );
}

export function PosterTitle({ children }: { children: ReactNode }) {
  return (
    <div className="absolute top-0 h-4 lg:h-8 bg-neutral-900/50  w-full flex items-center  rounded-t px-1">
      <h3 className="text-xs font-bold block lg:text-xl ">{children}</h3>
    </div>
  );
}

export function PostersRoot({ children }: { children: ReactNode }) {
  return (
    <Carousel className="w-full ">
      <CarouselContent className="-space-x-2 lg:space-x-0 relative">
        {children}
      </CarouselContent>
    </Carousel>
  );
}

export function PosterItem({ children }: { children: ReactNode }) {
  return (
    <CarouselItem className=" basis-1/3  h-44 min-[400px]:h-52  sm:h-72 md:h-80 md:basis-1/4 lg:basis-1/5">
      {children}
    </CarouselItem>
  );
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
