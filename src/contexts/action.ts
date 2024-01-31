"use server";

import { db } from "@/lib/prisma";
import { User } from "@prisma/client";

export async function fetchFavoritesUser(emailUser: string) {
  const user = await db.user.findUnique({
    where: { email: emailUser },
    include: {
      favorites: true,
    },
  });

  if (!user) {
    // Lidar com o caso em que nenhum usuário é encontrado
    return [];
  }

  return user.favorites;
}
