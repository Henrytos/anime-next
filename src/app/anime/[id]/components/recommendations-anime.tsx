import { CarouselPosters } from "@/components/carousel-poster";
import { Content } from "@/components/content";
import { SubTitle } from "@/components/sub-title";
import { Separator } from "@/components/ui/separator";
import { fetchAnimeRecommendations } from "@/services/fetch";

export async function RecommendationsAnimes({ animeId }: { animeId: number }) {
  const animesRecommendations = await fetchAnimeRecommendations(animeId);
  return (
    <Content>
      <SubTitle>Recommendations:</SubTitle>
      <Separator />
      <CarouselPosters posters={animesRecommendations} />
    </Content>
  );
}
