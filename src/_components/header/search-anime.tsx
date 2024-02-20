"use client";
import { useQuerys } from "@/_contexts/context-querys";
import { Search } from "@/_lib/action-historic";
import { Search as SearchIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface SchemaSearch {
  q: string;
}

export function SearchAnime() {
  const { handleSubmit, register, reset } = useForm<SchemaSearch>({
    defaultValues: { q: "" },
  });

  const router = useRouter();
  const { handleNewQuery } = useQuerys();

  const { data } = useSession();

  function handleSearch(dataFom: SchemaSearch) {
    try {
      const userId = (data?.user as any).id;
      router.push(`/query?q=${dataFom.q}`);
      const newQuery: Search = {
        userId: userId,
        createdAt: new Date(),
        query: dataFom.q,
      };
      handleNewQuery(newQuery);
      reset();
    } catch (error) {
      console.log(error);
      router.push(`/query?q=${dataFom.q}`);

      reset();
    }
  }

  return (
    <form
      className="h-full flex gap-2 lg:gap-4 items-center flex-1 max-w-md relative"
      onSubmit={handleSubmit(handleSearch)}
    >
      <input
        type="text"
        id="input-query"
        {...register("q", { required: true })}
        placeholder="..."
        className="px-2 py-1 rounded border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full bg-neutral-900 "
      />

      <button type="submit" id="btn-search">
        <SearchIcon className="font-bold  cursor-pointer " size={28} />
      </button>
    </form>
  );
}
