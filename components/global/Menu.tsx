import { MENU_ITEMS } from "../utils/constants";
import { useEffect } from "react";

export const Menu = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  useEffect(() => {
    const body = document.querySelector("body");

    isOpen
      ? body?.classList.add("overflow-hidden")
      : body?.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 w-full h-full bg-white flex items-center justify-center z-40 bg-transparent backdrop-blur-md ${
        isOpen ? "flex" : "hidden"
      }`}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <ul>
        {MENU_ITEMS.map((item, index) => {
          return (
            <li
              key={index}
              className={`font-[Inter] text-sm sm:text-base uppercase p-1 ${
                index % 2 === 0 ? "text-[#b33009]" : ""
              }`}
            >
              <a href={item.url}>{item.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
