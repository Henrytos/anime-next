import { ReactNode } from "react";
import { SubTitle } from "../sub-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function GaleryContent({ children }: { children: ReactNode }) {
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
