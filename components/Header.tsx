import React from "react";
import { SocialIcon } from "react-social-icons";
import { Hamburger } from "./global/Hamburger";
import { useState } from "react";
type Props = {};

const Header = ({}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed p-5 top-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center w-full z-50"
      style={{ marginTop: "0px" }}
    >
      <h1 className="uppercase text-xl z-50 font-spaceGrotesk">Portfolio</h1>
      <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />

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
