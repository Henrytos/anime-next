import { Container } from "@/_components/constainer";
import { Content } from "@/_components/details/content";
import { SkeletonCarousel } from "@/_components/details/skeleton-carousel";
import { Skeleton } from "@/_components/skeleton";
import { SubTitle } from "@/_components/sub-title";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/_components/ui/accordion";
import { ButtonLink } from "@/_components/button-link";
import { Button } from "@/_components/ui/button";
import { Heart } from "lucide-react";

export default function LoadingANimeDetails() {
  return (
    <Container>
      <Skeleton className="w-full h-1/2 mb-4" />
      <Content className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:space-y-0 mb-4">
        <Button className="w-full rounded flex gap-2">
          <Heart /> <span>Add Favorites</span>
        </Button>
        <ButtonLink href={""} target="_blank">
          Ver mais
        </ButtonLink>
      </Content>
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
