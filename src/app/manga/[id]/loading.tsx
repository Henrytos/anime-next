import { Container } from "@/components/constainer";
import { Content } from "@/components/details/content";
import { SkeletonCarousel } from "@/components/details/skeleton-carousel";
import { Skeleton } from "@/components/skeleton";
import { SubTitle } from "@/components/sub-title";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ButtonLink } from "@/components/button-link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function LoadingANimeDetails() {
  return (
    <Container>
      <Skeleton className="w-full h-1/2 mb-4" />

      <main className="space-y-2 mb-4">
        <Button className="w-full rounded flex gap-2">
          <Heart /> <span>Add Favorites</span>
        </Button>
        <ButtonLink href={""} target="_blank">
          Ver mais
        </ButtonLink>
      </main>
      <main className="space-y-2">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left pt-0 antialiased font-normal">
              <SubTitle>Sinopse</SubTitle>
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left pt-0 antialiased font-normal">
              <SubTitle>Galery</SubTitle>
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
        <SkeletonCarousel title="Characters" />
        <SkeletonCarousel title="Vozes" />
        <SkeletonCarousel title="Recommendations" />
      </main>
    </Container>
  );
}
