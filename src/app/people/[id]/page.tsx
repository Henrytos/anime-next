import { ButtonLink } from "@/components/button-link";
import {
  PosterItem,
  PosterName,
  PosterimgLink,
  PostersRoot,
} from "@/components/carousel-character";
import { Poster } from "@/components/carousel-poster";
import { Container } from "@/components/constainer";
import { Content } from "@/components/content";
import { Galery, GaleryContent } from "@/components/galery";
import { SubTitle } from "@/components/sub-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { fetchOnePeople, fetchPeoplePictures } from "@/services/fetch";
import { Heart } from "lucide-react";

interface DetailsCharecterProps {
  params: {
    id: string;
  };
}
export default async function PageVoiceActors({
  params,
}: DetailsCharecterProps) {
  const characterId = +params.id;
  const charcterPictures = await fetchPeoplePictures(characterId);
  const {
    name,
    about,
    url,
    favorites,
    alternate_names,
    images,
    charactersPoster,
  } = await fetchOnePeople(characterId);

  return (
    <Container>
      <main className="space-y-4 ">
        <Content>
          <div className="flex justify-between items-end">
            <SubTitle>{name}</SubTitle>
            <span className="font-light text-sm flex gap-1 items-center">
              <Heart className="w-4 h-4 text-primary" />
              <span className="-translate-y-px">{favorites}</span>
            </span>
          </div>

          <img
            src={images.jpg.image_url}
            width={200}
            height={200}
            className="max-w-40  m-auto object-cover rounded"
            alt={name}
          />
          <p className="text-center text-xs font-light text-white/75 ">
            foto de {name}
          </p>
          {alternate_names.length > 0 && (
            <Content>
              <span className="text-sm font-medium">Alter names: </span>
              {alternate_names.map((nickname, i) => (
                <span className="text-sm font-light" key={i}>
                  {nickname} {alternate_names.length === i + 1 ? "" : ", "}
                </span>
              ))}
            </Content>
          )}
        </Content>
        {about && (
          <Content>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left pt-0 antialiased font-normal">
                  <SubTitle>About {name}</SubTitle>
                </AccordionTrigger>
                <AccordionContent className="antialiased font-light">
                  {about}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Content>
        )}
        {charcterPictures.length > 0 && (
          <Content>
            <GaleryContent>
              <Galery pictures={charcterPictures} />
            </GaleryContent>
          </Content>
        )}

        <Content>
          <SubTitle>Characters:</SubTitle>
          <Separator />

          <PostersRoot>
            {charactersPoster.map((character, i) => {
              return (
                <PosterItem key={i}>
                  {" "}
                  <PosterimgLink
                    img={character.img}
                    name={character.name}
                    href={`/anime/${character.id}`}
                  />{" "}
                  <PosterName i={i}>{character.name}</PosterName>{" "}
                </PosterItem>
              );
            })}
          </PostersRoot>
        </Content>

        <Content>
          <ButtonLink href={url}>ver mais</ButtonLink>
        </Content>
      </main>
    </Container>
  );
}
