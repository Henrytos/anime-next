import {
  PosterItem,
  PosterName,
  PosterimgLink,
  PostersRoot,
} from "@/_components/details/carousel-character";
import { Content } from "@/_components/details/content";
import { SubTitle } from "@/_components/sub-title";
import { Separator } from "@/_components/ui/separator";
import { fetchCharacters } from "@/_services/fetch";

export async function CharacterCarousel({ animeId }: { animeId: number }) {
  const { charactesPoster, characterVoice } = await fetchCharacters(animeId);
  return (
    <>
      <Content>
        <SubTitle>Characters:</SubTitle>
        <Separator />

        <PostersRoot>
          {charactesPoster.map((character, i) => {
            return (
              <PosterItem key={i}>
                {" "}
                <PosterimgLink
                  img={character.img}
                  name={character.name}
                  href={`/character/${character.id}`}
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
                <PosterimgLink
                  img={character.img}
                  name={character.name}
                  href={`/people/${character.id}`}
                />{" "}
                <PosterName i={i}>{character.name}</PosterName>{" "}
              </PosterItem>
            );
          })}
        </PostersRoot>
      </Content>
    </>
  );
}
