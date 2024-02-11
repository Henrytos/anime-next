import { ButtonLink } from "@/_components/button-link";
import {
  PosterItem,
  PosterName,
  PosterimgLink,
  PostersRoot,
} from "@/_components/details/carousel-character";
import { Container } from "@/_components/constainer";
import { Content } from "@/_components/details/content";
import { SubTitle } from "@/_components/sub-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/_components/ui/accordion";
import { Separator } from "@/_components/ui/separator";
import { fetchOnePeople, fetchPeoplePictures } from "@/_services/fetch";
import { Heart } from "lucide-react";
import { peopleCharacterPoster } from "@/_services/sorts";
import { Galery } from "@/_components/details/galery";

interface DetailsCharecterProps {
  params: {
    id: string;
  };
}
export default async function PageVoiceActors({
  params,
}: DetailsCharecterProps) {
  const peopleId = +params.id;

  const [people, pictures] = await Promise.all([
    fetchOnePeople(peopleId),
    fetchPeoplePictures(peopleId),
  ]).then((res) => res);
  const { name, about, url, favorites, alternate_names, images } = people;
  const charactersPoster = peopleCharacterPoster(people.voices);

  const charcterPictures = pictures;
  return (
    <Container>
      <main className="space-y-4  grid xl:grid-cols-8 xl:gap-8">
        <Content className="xl:col-span-3 xl:sticky xl:top-0 xl:h-96 ">
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
              <Content className="hidden xl:block">
                <ButtonLink href={url}>ver mais</ButtonLink>
              </Content>
            </Content>
          )}
        </Content>
        <main className="h-auto xl:col-span-5">
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
            <Galery pictures={charcterPictures} />
          )}

          <Content>
            <SubTitle>Characters:</SubTitle>
            <Separator />

            <PostersRoot>
              {charactersPoster.map((character, i) => {
                return (
                  <PosterItem key={character.id}>
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

          <Content className="xl:hidden mt-4">
            <ButtonLink href={url}>ver mais</ButtonLink>
          </Content>
        </main>
      </main>
    </Container>
  );
}
