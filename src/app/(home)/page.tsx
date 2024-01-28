import { CarouselPosters } from "@/components/carousel-poster";
import { Container } from "@/components/constainer";
import { Content } from "@/components/details/content";
import { SubTitle } from "@/components/sub-title";
import { fetchAnimes, fetchTopAnimes } from "@/services/fetch";
import { GenresType } from "@/types/geners-anime";

export default async function Home() {
  const animes = await fetchTopAnimes();
  const animeToAdventure = await fetchAnimes(GenresType.Adventure);
  const animeToIsekai = await fetchAnimes(GenresType.Isekai);
  const animeToRomance = await fetchAnimes(GenresType.Romance);
  const animeToAction = await fetchAnimes(GenresType.Action);
  const animeToSchool = await fetchAnimes(GenresType.School);
  const animeToComedy = await fetchAnimes(GenresType.Comedy);

  console.log(animes);
  return (
    <Container>
      <Content>
        <SubTitle>Em alta</SubTitle>
        <CarouselPosters type="anime" posters={animes} />
        <SubTitle>Isekai</SubTitle>
        <CarouselPosters type="anime" posters={animeToIsekai} />
        <SubTitle>Comedia</SubTitle>
        <CarouselPosters type="anime" posters={animeToComedy} />
        <SubTitle>Romance</SubTitle>
        <CarouselPosters type="anime" posters={animeToRomance} />
        <SubTitle>Ação</SubTitle>
        <CarouselPosters type="anime" posters={animeToAction} />
        <SubTitle>Aventura</SubTitle>
        <CarouselPosters type="anime" posters={animeToAdventure} />
        <SubTitle>Schol</SubTitle>
        <CarouselPosters type="anime" posters={animeToSchool} />
      </Content>
    </Container>
  );
}
