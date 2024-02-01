"use server";

import { Favorite } from "@/contexts/context-favorites";
import { db } from "@/lib/prisma";

export async function addToFavoriteAction(favorite: Favorite, email: string) {
  const user = await db.user.findUnique({ where: { email: email } });
  await db.favorite.create({
    data: {
      id: favorite.id,
      imageUrl: favorite.imageUrl,
      name: favorite.name,
      synopsis: favorite.synopsis,
      type: favorite.type,
      userId: user.id,
      score: favorite.score,
    },
  });
}

export async function removeFromFavoriteAction(favoriteId: string) {
  await db.favorite.delete({
    where: {
      id: favoriteId,
    },
  });
}
