import { MENU_ITEMS } from "../utils/constants";
import { useEffect } from "react";

export const Menu = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  return (
    <div
      className="fixed inset-0 w-full h-full bg-white flex items-center justify-center z-40 bg-transparent backdrop-blur-md"
      onClick={() => setIsOpen(!isOpen)}
    >
      <ul>
        {MENU_ITEMS.map((item, index) => {
          return (
            <li
              key={index}
              className={`font-[Inter] text-sm sm:text-base uppercase p-1 ${
                index % 2 === 0 ? "text-[#b33009]" : ""
              }`}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={`${index * 100}`}
            >
              <a href={item.url}>{item.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
