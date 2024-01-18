import { Container } from "@/components/constainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  PosterImage,
  PosterImageLink,
  PosterItem,
  PosterName,
  PostersRoot,
} from "./components/carousel-character";
import { SubTitle } from "@/components/sub-title";
import {
  fetchAnime,
  fetchAnimePictures,
  fetchAnimeRecommendations,
  fetchCharacters,
} from "@/services/fetch";
import { Separator } from "@/components/ui/separator";
import { ButtonAddAnime } from "./components/button-add-anime";
import { Galery, GaleryContent } from "../../../components/galery";
import { Bganime } from "./components/bg-anime";
import { RankAnime } from "./components/rank-anime";
import { Content } from "../../../components/content";
import { MainContent } from "../../../components/main-content";
import { DetailsAnime } from "./components/details-anime";
import { ButtonLink } from "@/components/button-link";
import { CarouselPosters } from "@/components/carousel-poster";
interface DetaislAnimeProps {
  params: {
    id: string;
  };
}

export default async function DetaislAnimePage({ params }: DetaislAnimeProps) {
  const animeId = +params.id;
  const anime = await fetchAnime(animeId);
  const { charactesPoster, characterVoice } = await fetchCharacters(
    anime.mal_id
  );
  const pictures = await fetchAnimePictures(animeId);

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
        <GaleryContent>
          <Galery pictures={pictures} />
        </GaleryContent>
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
        <Content>
          <SubTitle>Personagens:</SubTitle>
          <Separator />

          <PostersRoot>
            {charactesPoster.map((character, i) => {
              return (
                <PosterItem key={i}>
                  {" "}
                  <PosterImageLink
                    img={character.img}
                    name={character.name}
                    href={character.id}
                  />{" "}
                  <PosterName i={i}>{character.name}</PosterName>{" "}
                </PosterItem>
              );
            })}
          </PostersRoot>
        </Content>
        <Content>
          <SubTitle>Vozes:</SubTitle>
          <Separator />

          <PostersRoot>
            {characterVoice.map((character, i) => {
              return (
                <PosterItem key={i}>
                  {" "}
                  <PosterImage img={character.img} name={character.name} />{" "}
                  <PosterName i={i}>{character.name}</PosterName>{" "}
                </PosterItem>
              );
            })}
          </PostersRoot>
        </Content>
      </MainContent>
      <RankAnime># {anime.rank} </RankAnime>
    </Container>
  );
}
