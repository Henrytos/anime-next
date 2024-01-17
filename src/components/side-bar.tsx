"use client";
import { AlignJustify, BookOpen, Heart, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ElementType, ReactNode } from "react";

interface SideLinkProps {
  icon: ElementType;
  children: ReactNode;
  href: string;
}

export function SideLink({ icon: Icon, children, href }: SideLinkProps) {
  const path = usePathname();
  const isActive = path === href;
  return (
    <Link
      href={href}
      className={`flex flex-col gap-1 items-center  ${
        isActive ? "text-white" : "text-neutral-500"
      } `}
    >
      <Icon />
      <span className="text-sm font-light">{children}</span>
    </Link>
  );
}

export function SideBar() {
  return (
    <aside className="flex px-6 py-2 h-16 justify-between bg-neutral-900">
      <SideLink icon={Home} href="/">
        Home
      </SideLink>
      <SideLink icon={BookOpen} href="/mangas">
        Mangás
      </SideLink>
      <SideLink icon={Heart} href="/favorites">
        Favoritos
      </SideLink>
      <SideLink icon={AlignJustify} href="/plus">
        Mais
      </SideLink>
    </aside>
  );
}
