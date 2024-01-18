import { Container } from "@/components/constainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SubTitle } from "@/components/sub-title";
import { fetchAnime } from "@/services/fetch";
import { Separator } from "@/components/ui/separator";
import { ButtonAddAnime } from "./components/button-add-anime";
import { Bganime } from "./components/bg-anime";
import { RankAnime } from "./components/rank-anime";
import { Content } from "../../../components/content";
import { MainContent } from "../../../components/main-content";
import { DetailsAnime } from "./components/details-anime";
import { ButtonLink } from "@/components/button-link";
import { RecommendationsAnimes } from "./components/recommendations-anime";
import { Suspense } from "react";
import { CharacterCarousel } from "./components/character-carousel";
import { GaleryAnime } from "./components/galery-anime";
interface DetaislAnimeProps {
  params: {
    id: string;
  };
}

export default async function DetaislAnimePage({ params }: DetaislAnimeProps) {
  const animeId = +params.id;
  const anime = await fetchAnime(animeId);

  return (
    <Container>
      <Bganime src={anime.images.jpg.large_image_url} />
      <MainContent>
        <Content>
          <DetailsAnime anime={anime} />
        </Content>
        <Content>
          <ButtonAddAnime anime={anime} />
          <ButtonLink href={anime.url} target="_blank">
            Ver mais
          </ButtonLink>
        </Content>
        {anime.synopsis && (
          <Content>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left pt-0 antialiased font-normal">
                  <SubTitle>Sinopse</SubTitle>
                </AccordionTrigger>
                <AccordionContent className="antialiased font-light">
                  {anime.synopsis}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Content>
        )}
        <Suspense fallback={<p>carregando...</p>}>
          <GaleryAnime animeId={animeId} />
        </Suspense>

        {anime.trailer.embed_url && (
          <Content>
            <SubTitle>Trailler</SubTitle>
            <Separator />

            <iframe
              className="w-full h-48  "
              src={anime.trailer.embed_url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Content>
        )}

        <Suspense fallback={<p>carregando...</p>}>
          <CharacterCarousel animeId={animeId} />
        </Suspense>

        <Suspense fallback={<p>carregando...</p>}>
          <RecommendationsAnimes animeId={animeId} />
        </Suspense>
      </MainContent>
      <RankAnime># {anime.rank} </RankAnime>
    </Container>
  );
}
