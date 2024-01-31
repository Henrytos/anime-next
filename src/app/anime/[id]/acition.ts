"use server";

import { db } from "@/lib/prisma";

export async function addToFavoriteAction(favorite: any, email: string) {
  const user = await db.user.findUnique({ where: { email: email } });
  await db.favorite.create({
    data: {
      id: favorite.id,
      imageUrl: favorite.imageUrl,
      name: favorite.name,
      synopsis: favorite.synopsis,
      type: favorite.type,
      userId: user.id,
    },
  });
}
