"use client";
import { Container } from "@/_components/constainer";
import { Content } from "@/_components/details/content";
import { SubTitle } from "@/_components/sub-title";
import { Badge } from "@/_components/ui/badge";
import { Button } from "@/_components/ui/button";
import { formaterTitle } from "@/_lib/formater";
import { Recomendation, recomendations } from "@/_services/data";
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
              <span>{formaterTitle(target.name, 13)}</span>
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
