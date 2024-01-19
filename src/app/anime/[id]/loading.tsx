"use client";
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

export default function LoadingANimeDetails() {
  return (
    <Container>
      <Content>
        <Skeleton className="w-full h-1/2" />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left pt-0 antialiased font-normal">
              <SubTitle>Sinopse</SubTitle>
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
        <SkeletonCarousel title="Characters" />
        <SkeletonCarousel title="Vozes" />
        <SkeletonCarousel title="Recommendations" />
        <SkeletonCarousel title="romance" />
      </Content>
    </Container>
  );
}
