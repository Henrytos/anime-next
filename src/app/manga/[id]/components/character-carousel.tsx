import {
  PosterItem,
  PosterName,
  PosterimgLink,
  PostersRoot,
} from "@/components/details/carousel-character";
import { Content } from "@/components/details/content";
import { SubTitle } from "@/components/sub-title";
import { Separator } from "@/components/ui/separator";
import { fetchCharactersManga } from "@/services/fetch";

export async function CharacterCarousel({ mangaId }: { mangaId: number }) {
  const { charactesPoster } = await fetchCharactersManga(mangaId);
  return (
    <>
      <Content>
        {charactesPoster.length > 0 && (
          <>
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
          </>
        )}
      </Content>
    </>
  );
}
