export const formaterDate = new Intl.DateTimeFormat("pt-br", {
  year: "numeric",
  day: "numeric",
  month: "numeric",
});

export const formaterTime = new Intl.DateTimeFormat("pt-br", {
  timeStyle: "medium",
});

export const formaterTitle = (title: string, size: number) => {
  if (title.length > size) return title.slice(0, size) + "...";
  return title;
};
