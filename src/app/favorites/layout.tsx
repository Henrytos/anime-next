"use client";
import { Container } from "@/_components/constainer";
import { ReactNode, useContext } from "react";
import { MainContent } from "./_components/main-content";
import { SubTitle } from "@/_components/sub-title";
import { Heart } from "lucide-react";
import { NavLinks } from "./_components/nav-links";
import { FavoriteContext } from "@/_contexts/context-favorites";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LayoutPagesFavorites({
  children,
}: {
  children: ReactNode;
}) {
  const { favorites } = useContext(FavoriteContext);
  const router = useRouter();
  const user = useSession();
  if (!user) {
    router.push("/");
  }
  return (
    <Container>
      <MainContent>
        <SubTitle className="flex justify-between items-center -mb-2">
          <span> Favorites All </span>
          <span className="flex items-center gap-1">
            <span className="font-light text-lg">{favorites.length}</span>
            <Heart className="w-5 h-5 text-primary translate-y-px" />{" "}
          </span>
        </SubTitle>
        <NavLinks />
        {children}
      </MainContent>
    </Container>
  );
}
