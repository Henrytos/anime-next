import { CarouselPosters } from "@/components/carousel-poster";
import { Container } from "@/components/constainer";
import { Content } from "@/components/content";
import { SubTitle } from "@/components/sub-title";
import { fetchTopAnimes } from "@/services/fetch";
export default async function Home() {
  const animes = await fetchTopAnimes();

  return (
    <Container>
      <Content>
        <SubTitle>Em alta</SubTitle>
        <CarouselPosters posters={animes.slice(0, 5)} />
        <SubTitle>Em alta</SubTitle>
        <CarouselPosters posters={animes.slice(5, 10)} />
        <SubTitle>Em alta</SubTitle>
        <CarouselPosters posters={animes.slice(10, 15)} />
        <SubTitle>Em alta</SubTitle>
        <CarouselPosters posters={animes.slice(15, 20)} />
        <SubTitle>Em alta</SubTitle>
        <CarouselPosters posters={animes.slice(20, 25)} />
      </Content>
    </Container>
  );
}
