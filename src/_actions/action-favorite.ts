"use server";

import { Favorite } from "@/_contexts/context-favorites";
import { db } from "@/_lib/prisma";

export async function addToFavoriteAction(favorite: Favorite) {
  await db.favorite.create({
    data: {
      id: favorite.id,
      imageUrl: favorite.imageUrl,
      name: favorite.name,
      synopsis: favorite.synopsis,
      type: favorite.type,
      userId: favorite.userId,
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
