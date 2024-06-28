"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Button } from "./ui/button";
import { HiEmojiSad } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { getTasks } from "@/actions/getTasks";
import { deleteTask } from "@/actions/deleteTask";
import { useRouter } from "next/navigation";
import { updateTask } from "@/actions/updateTask";

export const Tasks = () => {
  const router = useRouter();
  const [tasks, setTasks] = useState<any>();

  useEffect(() => {
    getTasks()
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tasks]);

  const handleDelete = useCallback((id: string) => {
    deleteTask(id).then(() => {
      router.refresh();
    });
  }, []);
  const handleComplete = useCallback((id: string) => {
    updateTask(id, true).then(() => {
      router.refresh();
    });
  }, []);
  const handleIncomplete = useCallback((id: string) => {
    updateTask(id, false).then(() => {
        router.refresh();
      });
  }, []);
  return (
    <div className="flex flex-col gap-5">
      {tasks?.map((data: any) => {
        return (
          <Card
            key={data.id}
            className="flex justify-between items-center p-2 rounded-lg w-[665px] border border-black "
          >
            <CardContent>
              <p className="text-xl mt-4">{data.task}</p>
            </CardContent>
            <CardFooter className="flex gap-3 mt-4">
              {data.isCompleted ? (
                <Button
                  size={"sm"}
                  className="flex gap-2 items-center justify-center bg-orange-500"
                  onClick={() => handleIncomplete(data.id)}
                >
                  <HiEmojiSad size={20} /> Mark as InComplete
                </Button>
              ) : (
                <Button
                  size={"sm"}
                  className="flex gap-2 items-center justify-center bg-green-500"
                  onClick={() => handleComplete(data.id)}
                >
                  <FaHeart size={20} color="red" /> Mark as Completed
                </Button>
              )}
              <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() => {
                  handleDelete(data.id);
                }}
              >
                <MdOutlineDeleteOutline size={30} color="red" />
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};
