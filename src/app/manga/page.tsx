import { CarouselPosters } from "@/_components/carousel-poster";
import { Container } from "@/_components/constainer";
import { Content } from "@/_components/details/content";
import ShowPosters from "@/_components/show-posters";
import { SubTitle } from "@/_components/sub-title";
import { Separator } from "@/_components/ui/separator";
import {
  fetchMangas,
  fetchTopMangas,
  fetchTopMangasPoster,
} from "@/_services/fetch";
import { GenresType } from "@/_types/geners-anime";

export default async function MangasPage() {
  const mangas = await fetchTopMangas();
  const mangaToIsekai = await fetchMangas(GenresType.Isekai);
  const mangaToComedy = await fetchMangas(GenresType.Comedy);
  const mangaToRomance = await fetchMangas(GenresType.Romance);
  const mangaToAction = await fetchMangas(GenresType.Action);
  const mangaToAdventure = await fetchMangas(GenresType.Adventure);
  const mangaToSchool = await fetchMangas(GenresType.School);
  const mangaPoster = await fetchTopMangasPoster();

  return (
    <Container>
      <ShowPosters posters={mangaPoster} type="manga" />
      <Content>
        <Content className="space-y-2 lg:space-y-2">
          <SubTitle>Em alta</SubTitle>
          <Separator />
          <CarouselPosters type="manga" posters={mangas} />
        </Content>
        <Content className="space-y-2 lg:space-y-2">
          <SubTitle>Isekai</SubTitle>
          <Separator />
          <CarouselPosters type="manga" posters={mangaToIsekai} />
        </Content>
        <Content className="space-y-2 lg:space-y-2">
          <SubTitle>Comedia</SubTitle>
          <Separator />
          <CarouselPosters type="manga" posters={mangaToComedy} />
        </Content>
        <Content className="space-y-2 lg:space-y-2">
          <SubTitle>Romance</SubTitle>
          <Separator />
          <CarouselPosters type="manga" posters={mangaToRomance} />
        </Content>
        <Content className="space-y-2 lg:space-y-2">
          <SubTitle>Ação</SubTitle>
          <Separator />
          <CarouselPosters type="manga" posters={mangaToAction} />
        </Content>
        <Content className="space-y-2 lg:space-y-2">
          <SubTitle>Aventura</SubTitle>
          <Separator />
          <CarouselPosters type="manga" posters={mangaToAdventure} />
        </Content>
        <Content className="space-y-2 lg:space-y-2">
          <SubTitle>Shool</SubTitle>
          <Separator />
          <CarouselPosters type="manga" posters={mangaToSchool} />
        </Content>
      </Content>
    </Container>
  );
}
