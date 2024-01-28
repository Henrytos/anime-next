export function Container({ ...props }) {
  return (
    <main
      className="w-full h-[calc(100svh_-_7.5rem)]  sm:h-[calc(100svh_-_5rem)] overflow-auto relative px-4 bg-neutral-900 lg:max-w-6xl lg:m-auto "
      id="main"
      {...props}
    />
  );
}
