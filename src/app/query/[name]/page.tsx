import { Container } from "@/components/constainer";
import { SubTitle } from "@/components/sub-title";
import { queryAnime, queryManga } from "@/services/fetch";
import { Content } from "./components/content";
import { LinkItem } from "./components/link-item";
import { Separator } from "@/components/ui/separator";

interface QueryAnimeProps {
  params: {
    name: string;
  };
}
export default async function QueryAnime({ params }: QueryAnimeProps) {
  const name = decodeURIComponent(params.name);
  const animes = await queryAnime(name);
  const mangas = await queryManga(name);

  return (
    <Container>
      <main className="space-y-4">
        <SubTitle>Pesquisas sobre: {name}</SubTitle>
        <SubTitle>Animes</SubTitle>
        <Separator />
        <Content>
          {animes.map((anime) => (
            <LinkItem type="anime" anime={anime} key={anime.id} />
          ))}
        </Content>

        <SubTitle>Mangás</SubTitle>
        <Separator />
        <Content>
          {mangas.map((manga) => (
            <LinkItem type="manga" anime={manga} key={manga.id} />
          ))}
        </Content>
      </main>
    </Container>
  );
}
