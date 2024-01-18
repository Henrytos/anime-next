import { Content } from "@/components/content";
import { SubTitle } from "@/components/sub-title";
import { Separator } from "@/components/ui/separator";
import {
  PosterItem,
  PosterName,
  Posterimg,
  PosterimgLink,
  PostersRoot,
} from "./carousel-character";
import { fetchCharacters } from "@/services/fetch";

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
                <Posterimg img={character.img} name={character.name} />{" "}
                <PosterName i={i}>{character.name}</PosterName>{" "}
              </PosterItem>
            );
          })}
        </PostersRoot>
      </Content>
    </>
  );
}
