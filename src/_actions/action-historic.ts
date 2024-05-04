"use server";

import { db } from "../_lib/prisma";

export async function userSearchList(userId: string): Promise<Search[]> {
  const querys = await db.historic.findMany({ where: { userId: userId } });
  return querys;
}

export interface Search {
  id?: string;
  query: string;
  createdAt: Date;
  userId: string;
}

export async function newUserQuery(search: Search) {
  await db.historic.create({
    data: {
      createdAt: search.createdAt,
      query: search.query,
      userId: search.userId,
    },
  });
}

export async function deleteAllQuerysUser(userId: string): Promise<void> {
  await db.historic.deleteMany({
    where: { userId },
  });
}

export async function deleteOneQuerycUser(queryId: string): Promise<void> {
  await db.historic.delete({
    where: { id: queryId },
  });
}
