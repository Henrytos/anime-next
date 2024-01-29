import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/constainer";
import { Content } from "@/components/details/content";
import { Galery } from "@/components/details/galery";
import { SubTitle } from "@/components/sub-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fetchCharacterPictures, fetchOneCharacter } from "@/services/fetch";
import { Heart } from "lucide-react";

interface DetailsCharecterProps {
  params: {
    id: string;
  };
}
export default async function DetailsCharecter({
  params,
}: DetailsCharecterProps) {
  const characterId = +params.id;
  const charcterPictures = await fetchCharacterPictures(characterId);
  const { name, about, name_kanji, url, favorites, nicknames, images } =
    await fetchOneCharacter(characterId);

  return (
    <Container>
      <main className="space-y-4 ">
        <Content>
          <div className="flex justify-between items-end">
            <SubTitle>
              {name} <span className="text-xs font-light">({name_kanji})</span>
            </SubTitle>
            <span className="font-light text-sm flex gap-1 items-center">
              <Heart className="w-4 h-4 text-primary" />
              <span className="-translate-y-px">{favorites}</span>
            </span>
          </div>

          <img
            src={images.jpg.image_url}
            width={200}
            height={200}
            className="max-w-40 sm:max-w-64 md:max-w-72  m-auto object-cover rounded"
            alt={name}
          />
          <p className="text-center text-xs font-light text-white/75 ">
            foto de {name}
          </p>

          {nicknames.length > 0 && (
            <Content>
              <span className="text-sm font-medium">Nicknames: </span>
              {nicknames.map((nickname, i) => (
                <span className="text-sm font-light" key={i}>
                  {nickname} {nicknames.length === i + 1 ? "" : ", "}
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
        {charcterPictures.length > 0 && <Galery pictures={charcterPictures} />}

        <Content>
          <ButtonLink href={url}>ver mais</ButtonLink>
        </Content>
      </main>
    </Container>
  );
}
