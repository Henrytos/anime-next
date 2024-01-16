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
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/text";
interface DetaislAnimeProps {
  params: {
    id: string;
  };
}

export default async function DetaislAnime({ params }: DetaislAnimeProps) {
  const anime = await fetchAnime(+params.id);
  const { charactesPoster, characterVoice } = await fetchCharacters(
    anime.mal_id
  );

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
      <div className="absolute top-1/2  max-w-[90%] space-y-4">
        <section className=" space-y-2">
          <Title className="flex justify-between ">
            <span>
              {anime.title}{" "}
              <span className="font-light text-sm ">({anime.year})</span>
            </span>
            <span className="text-base flex gap-1 items-end font-normal">
              {anime.score}
              <Star size={16} className="text-yellow-300 -translate-y-1" />
            </span>
          </Title>
          <div className="flex gap-1 ">
            {anime.genres.slice(0, 3).map((genre) => (
              <Badge key={genre.url} className="rounded">
                {genre.name}
              </Badge>
            ))}
          </div>
          <Text>{anime.episodes}</Text>
        </section>

        <Accordion type="single" collapsible className="">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              {anime.synopsis.slice(0, 100) + "..."}
            </AccordionTrigger>
            <AccordionContent>
              {anime.synopsis.slice(100, +anime.synopsis.length)}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {anime.trailer.embed_url && (
          <section className=" space-y-2 ">
            <SubTitle>Trailler</SubTitle>
            <Separator />

            <iframe
              className="w-full h-48  "
              src={anime.trailer.embed_url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </section>
        )}

        <section className="space-y-2">
          <SubTitle>Personagens:</SubTitle>
          <Separator />

          <CarouselCharacter posters={charactesPoster} />
        </section>

        <section className="space-y-2">
          <SubTitle>Dubladores Japoneses:</SubTitle>
          <Separator />

          <CarouselCharacter posters={characterVoice} />
        </section>
      </div>
    </Container>
  );
}
