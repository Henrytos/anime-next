import { CarouselPosters } from "@/components/carousel-poster";
import { Container } from "@/components/constainer";
import { Title } from "@/components/title";
import { fetchTopAnimes } from "@/services/fetch";
import { ApiResponseAnime } from "@/types/anime";

export default async function Home() {
  const animes = await fetchTopAnimes();

  return (
    <Container>
      <Title>Em alta</Title>
      <CarouselPosters posters={animes.slice(0, 5)} />
      <CarouselPosters posters={animes.slice(5, 10)} />
      <CarouselPosters posters={animes.slice(10, 15)} />
      <CarouselPosters posters={animes.slice(15, 20)} />
      <CarouselPosters posters={animes.slice(20, 25)} />
    </Container>
  );
}
