import { useState } from "react";
import { Menu } from "./Menu";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};
export const Hamburger = ({ setIsOpen, isOpen }: Props) => {
  return (
    <>
      <div
        className="w-10 h-10 relative flex items-center justify-center cursor-pointer z-40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`absolute w-8 h-[2px] bg-gray-800 rounded transition-all duration-300
          ${
            isOpen ? "rotate-45 top-1/2 translate-y-[-50%]" : "top-[8px]"
          } z-50`}
        />
        <span
          className={`absolute w-8 h-[2px] bg-gray-800 rounded transition-all duration-300
          ${
            isOpen ? "-rotate-45 top-1/2 translate-y-[-50%]" : "top-[20px]"
          } z-50`}
        />
        <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </>
  );
};
