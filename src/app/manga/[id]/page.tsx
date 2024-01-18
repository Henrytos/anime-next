import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/constainer";
import { DetailsAnime } from "@/components/details-anime";
import { Bganime } from "@/components/details/bg-details";
import { Content } from "@/components/details/content";
import { GaleryManga } from "@/components/details/galery";
import { MainContent } from "@/components/details/main-content";
import { RankAnime } from "@/components/details/rank";
import { SkeletonCarousel } from "@/components/details/skeleton-carousel";
import { SubTitle } from "@/components/sub-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fetchManga } from "@/services/fetch";
import { Suspense } from "react";
import { CharacterCarousel } from "./components/character-carousel";
import { RecommendationsManga } from "./components/recommendations-manga";
import { ButtonAddManga } from "./components/button-add-manga";

interface DetaislMangaProps {
  params: {
    id: number;
  };
}

export default async function DetaislMangaPage({ params }: DetaislMangaProps) {
  const mangaId = +params.id;
  const manga = await fetchManga(mangaId);

  return (
    <Container>
      <Bganime src={manga.images.jpg.large_image_url} />

      <MainContent>
        <Content>
          <DetailsAnime anime={manga} />
        </Content>
        <Content>
          <ButtonAddManga anime={manga} />
          <ButtonLink href={manga.url} target="_blank">
            Ver mais
          </ButtonLink>
        </Content>
        {manga.synopsis && (
          <Content>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left pt-0 antialiased font-normal">
                  <SubTitle>Sinopse</SubTitle>
                </AccordionTrigger>
                <AccordionContent className="antialiased font-light">
                  {manga.synopsis}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Content>
        )}
        <Suspense fallback={<SkeletonCarousel title="GaleryAnime" />}>
          <GaleryManga mangaId={mangaId} />
        </Suspense>
        <Suspense fallback={<SkeletonCarousel title="Characters" />}>
          <CharacterCarousel mangaId={mangaId} />
        </Suspense>
        <Suspense fallback={<SkeletonCarousel title="Recommendations" />}>
          <RecommendationsManga mangaId={mangaId} />
        </Suspense>
      </MainContent>
      <RankAnime># {manga.rank} </RankAnime>
    </Container>
  );
}
