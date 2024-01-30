import { Container } from "@/components/constainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SubTitle } from "@/components/sub-title";
import { fetchAnime, fetchPictures } from "@/services/fetch";
import { Separator } from "@/components/ui/separator";
import { ButtonAddAnime } from "./components/button-add-anime";
import { Bganime } from "@/components/details/bg-details";
import { RankAnime } from "@/components/details/rank";
import { Content } from "@/components/details/content";
import { MainContent } from "@/components/details/main-content";
import { DetailsAnime } from "@/components/details-anime";
import { ButtonLink } from "@/components/button-link";
import { RecommendationsAnimes } from "./components/recommendations-anime";
import { CharacterCarousel } from "./components/character-carousel";
import { Suspense } from "react";
import { SkeletonCarousel } from "@/components/details/skeleton-carousel";
import { Galery } from "@/components/details/galery";
import { Text } from "@/components/text";
import { Metadata } from "next";
interface DetaislAnimeProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: DetaislAnimeProps): Promise<Metadata> {
  const anime = await fetchAnime(+params.id);

  return {
    title: anime.title,
  };
}

export default async function DetaislAnimePage({ params }: DetaislAnimeProps) {
  const animeId = +params.id;
  const anime = await fetchAnime(animeId);
  const pictures = await fetchPictures(animeId, "anime");

  return (
    <Container>
      <Bganime src={anime.images.jpg.large_image_url} />
      <MainContent>
        <Content>
          <DetailsAnime anime={anime} />
        </Content>
        <Content className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:space-y-0">
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
                <AccordionContent className="antialiased font-light ">
                  <Text isDifferent>{anime.synopsis}</Text>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Content>
        )}
        <Galery pictures={pictures} />
        {anime.trailer.embed_url && (
          <Content>
            <SubTitle>Trailler</SubTitle>
            <Separator />

            <iframe
              className="w-full max-w-2xl m-auto  max-[400px]:h-40 h-64 sm:h-80  md:h-96"
              src={anime.trailer.embed_url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Content>
        )}
        <CharacterCarousel animeId={animeId} />
        <Suspense fallback={<SkeletonCarousel title="Recommendations" />}>
          <RecommendationsAnimes animeId={animeId} />
        </Suspense>
      </MainContent>
      <RankAnime># {anime.rank} </RankAnime>
    </Container>
  );
}
