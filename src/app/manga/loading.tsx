"use client";
import { Container } from "@/components/constainer";
import { SkeletonCarousel } from "@/components/details/skeleton-carousel";

export default function Loading() {
  return (
    <Container>
      <SkeletonCarousel title="em alta" />
      <SkeletonCarousel title="Isekai" />
      <SkeletonCarousel title="em Comedia" />
      <SkeletonCarousel title="romance" />
    </Container>
  );
}
