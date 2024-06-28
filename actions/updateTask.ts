"use server";

import prisma from "@/lib/db";

export const updateTask = async (id: string, isCompleted: boolean) => {
  const updated = await prisma.tasks.update({
    where: { id: id },
    data: { isCompleted: isCompleted },
  });

  if (updated) return { message: "Updated" };
};
