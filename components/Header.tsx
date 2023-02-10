import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-50">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/*SocialIcons  */}
        <SocialIcon
          url="https://www.linkedin.com/in/felipe-sanchez-a893bb252/"
          fgColor="#b33009"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/fsanchez1397"
          fgColor="#b33009"
          bgColor="transparent"
        />
        {/* <SocialIcon
          url="https://www.linkedin.com/in/felipe-sanchez-a893bb252/"
          fgColor="#b33009"
          bgColor="transparent"
        /> */}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#b33009"
          bgColor="transparent"
          // onClick={} open contact form component
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#af5c5c]">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
