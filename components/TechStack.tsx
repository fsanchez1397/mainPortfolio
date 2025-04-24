import { TECHSTACK } from "./utils/constants";

export const TechStack = () => {
  return (
    <div className="flex flex-wrap">
      {TECHSTACK.map(({ name, icon }, index) => {
        return (
          <div className="w-1/3 pl-2 pb-2">
            <img
              key={index}
              src={icon}
              className="object-contain h-[100px] hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center font-inter text-lg uppercase font-bold">
              {name}
            </p>
          </div>
        );
      })}
    </div>
  );
};
