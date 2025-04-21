import React from "react";
import { SocialIcon } from "react-social-icons";
import { Hamburger } from "./global/Hamburger";
type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-50">
      <h1 className="uppercase text-xl">Felipe Sanchez Portfolio</h1>
      <Hamburger />
      {/*SocialIcons  */}
      {/* <SocialIcon
        url="https://www.linkedin.com/in/felipe-s-a893bb252/"
        fgColor="#b33009"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://github.com/fsanchez1397"
        fgColor="#b33009"
        bgColor="transparent"
      /> */}
    </header>
  );
};

export default Header;
