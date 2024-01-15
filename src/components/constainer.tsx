export function Container({ ...props }) {
  return (
    <main
      className="w-full h-[calc(100vh_-_7rem)] overflow-auto relative px-4 bg-neutral-900"
      {...props}
    />
  );
}
