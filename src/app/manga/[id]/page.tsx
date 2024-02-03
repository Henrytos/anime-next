import { ButtonLink } from "@/_components/button-link";
import { Container } from "@/_components/constainer";
import { DetailsAnime } from "@/_components/details-anime";
import { Bganime } from "@/_components/details/bg-details";
import { Content } from "@/_components/details/content";
import { Galery } from "@/_components/details/galery";
import { MainContent } from "@/_components/details/main-content";
import { RankAnime } from "@/_components/details/rank";
import { SkeletonCarousel } from "@/_components/details/skeleton-carousel";
import { SubTitle } from "@/_components/sub-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/_components/ui/accordion";
import { fetchManga, fetchPictures } from "@/_services/fetch";
import { Suspense } from "react";
import { CharacterCarousel } from "./components/character-carousel";
import { RecommendationsManga } from "./components/recommendations-manga";
import { ButtonAddManga } from "./components/button-add-manga";

interface DetaislMangaProps {
  params: { id: number };
  searchParams: { type: "anime" | "manga" };
}

export default async function DetaislMangaPage({
  params,
  searchParams,
}: DetaislMangaProps) {
  const mangaId = params.id;
  const manga = await fetchManga(mangaId);
  const pictures = await fetchPictures(mangaId, searchParams.type);

  return (
    <Container>
      <Bganime src={manga.images.jpg.large_image_url} />

      <MainContent>
        <Content>
          <DetailsAnime anime={manga} />
        </Content>
        <Content className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:space-y-0">
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
          <Galery pictures={pictures} />
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
