import { AnimePicture } from "@/_services/fetch";
import { GaleryContent } from "./galey-content";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ButtonLink } from "../button-link";

export async function Galery({ pictures }: { pictures: AnimePicture[] }) {
  return (
    <GaleryContent>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {pictures?.map((picture, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <img
                src={picture.img}
                key={index}
                width={200}
                height={200}
                className="w-full h-56 sm:h-72 lg:h-80 object-cover rounded  shadow"
                alt={`${index}-`}
              />
            </DialogTrigger>
            <DialogContent className="bg-neutral-900 p-2">
              <img
                src={picture.img}
                key={index}
                width={400}
                height={600}
                className="w-full h-full object-cover rounded  shadow"
                alt={`${index}-`}
              />
              <ButtonLink href={picture.img}>Ver</ButtonLink>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </GaleryContent>
  );
}
