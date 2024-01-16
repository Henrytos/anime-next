import { SubTitle } from "@/components/sub-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AnimePicture } from "@/services/fetch";
import Image from "next/image";
import { ReactNode } from "react";

export async function GaleryContent({ children }: { children: ReactNode }) {
  return (
    <section className="space-y-2">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left pt-0 antialiased font-normal">
            <SubTitle>Galery</SubTitle>
          </AccordionTrigger>
          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export function Galery({ pictures }: { pictures: AnimePicture[] | undefined }) {
  return (
    <div className="w-full grid grid-cols-2 gap-2">
      {pictures?.map((picture, index) => (
        <Dialog key={index}>
          <DialogTrigger>
            <Image
              src={picture.img}
              key={index}
              width={200}
              height={200}
              className="w-full h-56 object-cover rounded  shadow"
              alt={`${index}-`}
            />
          </DialogTrigger>
          <DialogContent className="bg-neutral-900 p-2">
            <Image
              src={picture.img}
              key={index}
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded  shadow"
              alt={`${index}-`}
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
