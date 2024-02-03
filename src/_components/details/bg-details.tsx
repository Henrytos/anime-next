export function Bganime({ src }: { src: string }) {
  return (
    <div className="absolute w-full max-w-3xl md:left-1/2  md:-translate-x-1/2  h-2/3 lg:h-full top-0 left-0 ">
      <img
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
