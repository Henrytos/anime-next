import { CarouselPosters } from "@/components/carousel-poster";
import { Content } from "@/components/details/content";
import { SubTitle } from "@/components/sub-title";
import { Separator } from "@/components/ui/separator";
import { fetchMangaRecommendations } from "@/services/fetch";

export async function RecommendationsManga({ mangaId }: { mangaId: number }) {
  const animesRecommendations = await fetchMangaRecommendations(mangaId);
  return (
    <Content>
      <SubTitle>Recommendations:</SubTitle>
      <Separator />
      <CarouselPosters type="manga" posters={animesRecommendations} />
    </Content>
  );
}
