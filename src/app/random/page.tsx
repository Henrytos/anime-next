"use client";
import { Container } from "@/components/constainer";
import { Content } from "@/components/details/content";
import { SubTitle } from "@/components/sub-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Recomendation, recomendations } from "@/services/data";
import Link from "next/link";
import { useState } from "react";

export default function PageRandomRecommendation() {
  const [target, setTarget] = useState<Recomendation>(recomendations[0]);

  const handleClick = () => {
    const time = setInterval(() => {
      const numberRandom = Math.floor(Math.random() * recomendations.length);
      setTarget(recomendations[numberRandom]);
    }, 100);
    setTimeout(() => clearInterval(time), 2000);
  };

  const formaterName = (name: string) => {
    if (name.length > 20) return name.slice(0, 20) + "...";
    return name;
  };

  return (
    <Container>
      <Content>
        <SubTitle>Anime random</SubTitle>
        <main className="flex flex-col gap-6  max-w-xs   m-auto ">
          <Link
            href={`${target.type}/${target.id}?type=${target.type}`}
            className="space-y-2 block transition-all"
          >
            <h2 className="text-xl font-semibold underline flex justify-between items-center">
              <span>{formaterName(target.name)}</span>
              <Badge variant={"secondary"} className="rounded">
                {target.type}
              </Badge>
            </h2>
            <img
              src={target.img}
              alt={target.name}
              className="w-full h-96  shadow-lg object-cover  "
              width={320}
              height={384}
            />
          </Link>
          <Button onClick={handleClick} className="max-w-xs w-full">
            Start
          </Button>
        </main>
      </Content>
    </Container>
  );
}
