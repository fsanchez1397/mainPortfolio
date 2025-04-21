import { useState } from "react";
import { Menu } from "./Menu";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="w-10 h-10 relative flex items-center justify-center cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`absolute w-8 h-1 bg-gray-800 rounded transition-all duration-300
          ${isOpen ? "rotate-45 top-1/2 translate-y-[-50%]" : "top-[8px]"}`}
        />
        <span
          className={`absolute w-8 h-1 bg-gray-800 rounded transition-all duration-300
          ${isOpen ? "-rotate-45 top-1/2 translate-y-[-50%]" : "top-[20px]"}`}
        />
      </div>
      {isOpen && <Menu />}
    </>
  );
};
