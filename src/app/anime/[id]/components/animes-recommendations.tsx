import { CarouselPosters } from "@/components/carousel-poster";
import { Content } from "@/components/content";
import { SubTitle } from "@/components/sub-title";
import { fetchAnimeRecommendations } from "@/services/fetch";

export async function AnimesRecommendations({ animeId }: { animeId: number }) {
  const data = await fetchAnimeRecommendations(animeId);
  return (
    <Content>
      <SubTitle>Recommendations:</SubTitle>
      <CarouselPosters posters={data} />
    </Content>
  );
}
