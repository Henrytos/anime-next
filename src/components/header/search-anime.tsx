"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export function SearchAnime() {
  interface SchemaSearch {
    q: string;
  }

  const { handleSubmit, register, reset } = useForm<SchemaSearch>({
    defaultValues: { q: "" },
  });
  const router = useRouter();

  function handleSearch(data: SchemaSearch) {
    router.push(`/query?q=${data.q}`);
    reset();
  }

  return (
    <form
      className="flex gap-2 lg:gap-4 items-center flex-1 max-w-md"
      onSubmit={handleSubmit(handleSearch)}
    >
      <input
        type="text"
        id="input-query"
        {...register("q")}
        placeholder="..."
        className="px-2 py-1 rounded border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
        min={2}
        required
      />
      <button type="submit" id="btn-search">
        <Search className="font-bold  cursor-pointer " size={28} />
      </button>
    </form>
  );
}
