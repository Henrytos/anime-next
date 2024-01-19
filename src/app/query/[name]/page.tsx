import { Container } from "@/components/constainer";
import { SubTitle } from "@/components/sub-title";
import { queryAnime, queryManga } from "@/services/fetch";
import Link from "next/link";
import { Content } from "./components/content";
import { LinkItem } from "./components/link-item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface QueryAnimeProps {
  params: {
    name: string;
  };
}
export default async function QueryAnime({ params }: QueryAnimeProps) {
  const name = decodeURIComponent(params.name);
  const animes = await queryAnime(name);
  const mangas = await queryManga(name);

  return (
    <Container>
      <main className="space-y-4">
        <SubTitle>Pesquisas sobre: {name}</SubTitle>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <SubTitle>Animes about {name}</SubTitle>
            </AccordionTrigger>
            <AccordionContent>
              <Content>
                {animes.map((anime) => (
                  <LinkItem type="anime" anime={anime} key={anime.id} />
                ))}
              </Content>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <SubTitle>Mangás about {name}</SubTitle>
            </AccordionTrigger>
            <AccordionContent>
              <Content>
                {mangas.map((manga) => (
                  <LinkItem type="manga" anime={manga} key={manga.id} />
                ))}
              </Content>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </Container>
  );
}
