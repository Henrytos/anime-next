import { Container } from "@/components/constainer";
import { Title } from "@/components/title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";
import { CarouselCharacter } from "./components/carousel-character";
import { SubTitle } from "@/components/sub-title";
import { fetchAnime, fetchCharacters } from "@/services/fetch";
interface DetaislAnimeProps {
  params: {
    id: string;
  };
}

export default async function DetaislAnime({ params }: DetaislAnimeProps) {
  const anime = await fetchAnime(+params.id);
  const { charactesPoster } = await fetchCharacters(anime.mal_id);

  return (
    <Container>
      <div className="absolute w-full h-2/3 top-0 left-0 ">
        <Image
          src={anime.images.jpg.large_image_url}
          alt="Picture of the author"
          width={500}
          height={500}
          className="absolute w-full h-full object-cover "
        />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-neutral-900  to-neutral-transparent" />
      </div>
      <div className="absolute top-1/2  ">
        <section className="mb-4 space-y-2">
          <Title className="flex justify-between pr-3">
            <span>{anime.title} </span>
            <span className="text-base flex gap-1 items-center">
              {anime.score}
              <Star size={16} className="text-yellow-300" />
            </span>
          </Title>
          <div className="flex gap-1 ">
            {anime.genres.map((genre) => (
              <Badge key={genre.url} className="rounded">
                {genre.name}
              </Badge>
            ))}
          </div>
        </section>
        <Accordion type="single" collapsible className="mb-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {anime.synopsis.slice(0, 100) + "..."}
            </AccordionTrigger>
            <AccordionContent>
              {anime.synopsis.slice(100, +anime.synopsis.length)}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <section className="mb-4 space-y-2">
          <SubTitle>Trailler</SubTitle>
        </section>

        <section className="space-y-2">
          <SubTitle>Personagens:</SubTitle>
          <CarouselCharacter posters={charactesPoster} />
        </section>
      </div>
    </Container>
  );
}
