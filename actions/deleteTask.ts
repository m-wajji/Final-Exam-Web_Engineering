"use server";

import prisma from "@/lib/db";

export const deleteTask = async (id: string) => {
  const deleted = await prisma.tasks.delete({
    where: { id: id },
  });

  if (deleted) {
    return { message: "Successfully deleted." };
  }
};
