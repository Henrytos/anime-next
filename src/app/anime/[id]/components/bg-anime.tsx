import Image from "next/image";

export function Bganime({ src }: { src: string }) {
  return (
    <div className="absolute w-full h-2/3 top-0 left-0 ">
      <Image
        src={src}
        alt="Picture of the author"
        width={1000}
        height={1000}
        className="absolute w-full h-full object-cover "
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-neutral-900  to-neutral-transparent" />
    </div>
  );
}
