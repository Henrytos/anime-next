import { Container } from "@/_components/constainer";
import { SubTitle } from "@/_components/sub-title";
import { queryAnime, queryManga } from "@/_services/fetch";
import { Content } from "./_components/content";
import { LinkItem } from "./_components/link-item";
import { Separator } from "@/_components/ui/separator";
import { redirect } from "next/navigation";
import { prototype } from "stream";
import { formaterTitle } from "@/_lib/formater";

//export default async function QueryAnime({ params }: QueryAnimeProps) {
//  if (params.name === "") redirect("/");
//
//  const name = decodeURIComponent(params.name);
//  const animes = await queryAnime(name);
//  const mangas = await queryManga(name);
//
//  return (
//    <Container>
//      <main className="space-y-4">
//        <SubTitle>Pesquisas sobre: {name}</SubTitle>
//        <SubTitle>Animes</SubTitle>
//        <Separator />
//        <Content>
//          {animes.map((anime) => (
//            <LinkItem type="anime" anime={anime} key={anime.id} />
//          ))}
//        </Content>
//
//        <SubTitle>Mangás</SubTitle>
//        <Separator />
//        <Content>
//          {mangas.map((manga) => (
//            <LinkItem type="manga" anime={manga} key={manga.id} />
//          ))}
//        </Content>
//      </main>
//    </Container>
//  );
//}

interface QueryAnimeProps {
  params: {};
  searchParams: {
    q: string;
  };
}

export default async function Page(props: QueryAnimeProps) {
  const query = props.searchParams.q.toString();
  if (query === "") redirect("/");
  const animes = await queryAnime(query);
  const mangas = await queryManga(query);

  return (
    <Container>
      <main className="space-y-6">
        <SubTitle>Pesquisas sobre: {formaterTitle(query, 30)}</SubTitle>
        <div className="space-y-2">
          <SubTitle>Animes</SubTitle>
          <Separator />
          <Content>
            {animes.map((anime) => (
              <LinkItem type="anime" anime={anime} key={anime.id} />
            ))}
          </Content>
        </div>
        <div className="space-y-2">
          <SubTitle>Mangás</SubTitle>
          <Separator />
          <Content>
            {mangas.map((manga) => (
              <LinkItem type="manga" anime={manga} key={manga.id} />
            ))}
          </Content>
        </div>
      </main>
    </Container>
  );
}
