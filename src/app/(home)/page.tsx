import { CarouselPosters } from "@/_components/carousel-poster";
import { Container } from "@/_components/constainer";
import { Content } from "@/_components/details/content";
import { SubTitle } from "@/_components/sub-title";
import { Separator } from "@/_components/ui/separator";
import { fetchAnimes, fetchTopAnimes } from "@/_services/fetch";
import { GenresType } from "@/_types/geners-anime";

export default async function Home() {
  const animes = await fetchTopAnimes();
  const animeToAdventure = await fetchAnimes(GenresType.Adventure);
  const animeToIsekai = await fetchAnimes(GenresType.Isekai);
  const animeToRomance = await fetchAnimes(GenresType.Romance);
  const animeToAction = await fetchAnimes(GenresType.Action);
  const animeToSchool = await fetchAnimes(GenresType.School);
  const animeToComedy = await fetchAnimes(GenresType.Comedy);

  return (
    <Container>
      <Content>
        <Content className="space-y-2 lg:space-y-2">
          <SubTitle>Em alta</SubTitle>
          <Separator />
          <CarouselPosters type="anime" posters={animes} />
        </Content>
        <Content className="space-y-2 lg:space-y-2">
          <SubTitle>Isekai</SubTitle>
          <Separator />
          <CarouselPosters type="anime" posters={animeToIsekai} />
        </Content>
        <Content className="space-y-2 lg:space-y-2">
          <SubTitle>Comedia</SubTitle>
          <Separator />
          <CarouselPosters type="anime" posters={animeToComedy} />
        </Content>
        <Content className="space-y-2 lg:space-y-2">
          <SubTitle>Romance</SubTitle>
          <Separator />
          <CarouselPosters type="anime" posters={animeToRomance} />
        </Content>
        <Content className="space-y-2 lg:space-y-2">
          <SubTitle>Ação</SubTitle>
          <Separator />
          <CarouselPosters type="anime" posters={animeToAction} />
        </Content>
        <Content className="space-y-2 lg:space-y-2">
          <SubTitle>Aventura</SubTitle>
          <Separator />
          <CarouselPosters type="anime" posters={animeToAdventure} />
        </Content>
        <Content className="space-y-2 lg:space-y-2">
          <SubTitle>Shool</SubTitle>
          <Separator />
          <CarouselPosters type="anime" posters={animeToSchool} />
        </Content>
      </Content>
    </Container>
  );
}
