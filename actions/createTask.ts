'use server'
import prisma from "@/lib/db";
import { taskSchema } from "@/schemas/taskSchema";
import { z } from "zod";

export const createTask = async (values: z.infer<typeof taskSchema>) => {
  const validatedValues = taskSchema.safeParse(values);

  if (!validatedValues.success) {
    return { err: "Invalid Values" };
  }

  try {
    await prisma.tasks.create({
      data: {
        task: validatedValues.data?.task,
        isCompleted: validatedValues.data?.isCompleted,
      },
    });
    return {
      message: "Task Added!",
    };
  } catch (err) {
    return err;
  }
};
