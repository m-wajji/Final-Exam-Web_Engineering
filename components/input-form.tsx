"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IoAddOutline } from "react-icons/io5";
import { taskSchema } from "@/schemas/taskSchema";
import { createTask } from "@/actions/createTask";
import { useRouter } from "next/navigation";



export const InputForm = () => {
  const router = useRouter()
  // 1. Define your form.
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      task: "",
      isCompleted: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof taskSchema>) {
    createTask(values).then(() => {
      router.refresh();
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-x-2 items-start justify-center w-[665px] "
      >
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormControl>
                <Input
                  placeholder="Enter task here..."
                  {...field}
                  className="w-[530px] border border-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size={"default"}
          className="flex gap-2 items-center justify-center"
        >
          Add Task
          <IoAddOutline size={24} />
        </Button>
      </form>
    </Form>
  );
};
