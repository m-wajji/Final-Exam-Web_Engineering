import React from "react";
import { Button } from "./ui/button";
import { FaHandPointLeft } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between w-[665px]">
      <Button
        variant={"outline"}
        size={"lg"}
        className="flex items-center gap-2 justify-center border border-black"
      >
        <FaHandPointLeft color="yellow" size={24} /> Previuos
      </Button>
      <Button
        variant={"outline"}
        size={"lg"}
        className="flex items-center justify-center gap-2 border border-black"
      >
        Next <FaHandPointRight color="yellow" size={24} />
      </Button>
    </div>
  );
};
