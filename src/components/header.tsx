import { Search } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="dark:bg-neutral-900 flex items-center justify-between px-4 py-2 h-14">
      <Image
        src="/imgs/logo.webp"
        alt="logotiopo"
        width={100}
        height={100}
        className="h-full w-10  "
      />
      <div className="flex gap-4 items-center">
        <Search className="font-bold " size={28} />
        <Image
          src="/imgs/eu.jpg"
          alt="logotiopo"
          width={100}
          height={100}
          className="h-full w-10  rounded-full"
        />
      </div>
    </header>
  );
}
