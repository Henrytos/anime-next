"use client";
import { useSession } from "next-auth/react";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  Search,
  deleteAllQuerysUser,
  deleteOneQuerycUser,
  newUserQuery,
  userSearchList,
} from "@/_lib/action-historic";

interface ContextQuerysType {
  name: string;
  querys: Search[];
  handleNewQuery: (query: Search) => void;
  deleteOneQuery: (queryId: string) => void;
  deleteAllQuery: (userId: string) => void;
}

export const ContextQuerys = createContext({} as ContextQuerysType);

export function QuerysProvider({ children }: { children: ReactNode }) {
  const [querys, setQuerys] = useState<Search[]>([]);
  const { data } = useSession();

  const name = data?.user?.name?.toString() ?? "";
  useEffect(() => {
    if (data != undefined) {
      userSearchList((data?.user as any).id).then((querys) => {
        setQuerys(querys.toReversed());
      });
    }
  }, [data]);

  const handleNewQuery = (query: Search) => {
    setQuerys((state) => [query, ...state]);
    newUserQuery(query);
  };

  const deleteOneQuery = (queryId: string) => {
    const newQuerys = querys.filter((query) => query.id != queryId);
    setQuerys(newQuerys);
    deleteOneQuerycUser(queryId);
  };

  const deleteAllQuery = (userId: string) => {
    setQuerys([]);
    deleteAllQuerysUser(userId);
  };

  return (
    <ContextQuerys.Provider
      value={{ name, querys, handleNewQuery, deleteOneQuery, deleteAllQuery }}
    >
      {children}
    </ContextQuerys.Provider>
  );
}

export const useQuerys = () => useContext(ContextQuerys);
