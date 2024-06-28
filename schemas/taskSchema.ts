import { z } from "zod";


export const taskSchema = z.object({
    task: z.string().min(10, {
      message: "Text must be at least 10 characters.",
    }),
    isCompleted: z.boolean(),
  });