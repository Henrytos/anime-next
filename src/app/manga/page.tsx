import { CarouselPosters } from "@/components/carousel-poster";
import { Container } from "@/components/constainer";
import { Content } from "@/components/details/content";
import { SubTitle } from "@/components/sub-title";
import { Separator } from "@/components/ui/separator";
import { fetchMangas, fetchTopMangas } from "@/services/fetch";
import { GenresType } from "@/types/geners-anime";

export default async function MangasPage() {
  const mangas = await fetchTopMangas();
  const mangaToIsekai = await fetchMangas(GenresType.Isekai);
  const mangaToComedy = await fetchMangas(GenresType.Comedy);
  const mangaToRomance = await fetchMangas(GenresType.Romance);
  const mangaToAction = await fetchMangas(GenresType.Action);
  const mangaToAdventure = await fetchMangas(GenresType.Adventure);
  const mangaToSchool = await fetchMangas(GenresType.School);
  console.log(mangas);
  return (
    <Container>
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
