"use client";
import { Container } from "@/components/constainer";
import { SubTitle } from "@/components/sub-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error() {
  return (
    <Container>
      <div className="h-full flex justify-center items-center flex-col gap-4">
        <SubTitle className="text-center">
          ops! houve um erro ao carregar o anime
        </SubTitle>
        <img
          src="/imgs/404.webp"
          alt="imagem de error"
          width={500}
          height={500}
          className="w-2/3 h-1/3 object-cover rounded"
        />
        <Button
          variant={"outline"}
          className="bg-primary text-foreground rounded"
          asChild
        >
          <Link href="/" className="underline">
            {" "}
            Voltar ao início
          </Link>
        </Button>
      </div>
    </Container>
  );
}
