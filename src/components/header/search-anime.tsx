"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function SearchAnime() {
  const [query, setQuery] = useState<string>("");

  function hadleQuery(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
  }

  return (
    <form
      className="flex gap-2 lg:gap-4 items-center flex-1 max-w-md"
      onSubmit={hadleQuery}
    >
      <input
        type="text"
        name=""
        id=""
        onChange={(ev) => setQuery(ev.target.value)}
        value={query}
        placeholder="..."
        className="px-2 py-1 rounded border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
        required
      />
      <button type="submit" disabled={true}>
        {query.length > 0 ? (
          <Link href={`/query/${query}`}>
            <Search
              className="font-bold  cursor-pointer disabled:cursor-not-allowed"
              size={28}
            />
          </Link>
        ) : (
          <Search
            className="font-bold  cursor-pointer disabled:cursor-not-allowed text-zinc-700"
            size={28}
          />
        )}
      </button>
    </form>
  );
}
