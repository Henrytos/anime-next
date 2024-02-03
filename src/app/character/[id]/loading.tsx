"use client";
import { ButtonLink } from "@/_components/button-link";
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
import { Heart } from "lucide-react";

export default function PeopleLoading() {
  return (
    <Container>
      <main className="space-y-4">
        <Content>
          <div className="flex justify-between items-end">
            <SubTitle>Lorem, ipsum.</SubTitle>
            <span className="font-light text-sm flex gap-1 items-center">
              <Heart className="w-4 h-4 text-primary" />
              <span className="-translate-y-px">...</span>
            </span>
          </div>
          <Skeleton className="w-full  max-w-40  m-auto  rounded h-60" />
          <p className="text-center text-xs font-light text-white/75 ">
            foto de ...
          </p>
        </Content>
        <Content>
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
          <ButtonLink href="/">ver mais</ButtonLink>
        </Content>
      </main>
    </Container>
  );
}
