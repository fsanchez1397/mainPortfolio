import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute hidden sm:inline-block top-24  uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative -mb-10 mt-4 md:mb-0 flex-shrink-0 w-56 h-56  md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
      >
        <Image
          src={"/aboutPic.png"}
          alt="Headshot"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="rounded-full md:rounded-lg"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I am a Front End developer currently Freelancing, looking to grow my
          career. I started coding after a friend in the industry showed me the
          oppurtunities available. I then dedicated myself to learning the
          fundamentals of front end development. During this I realized the
          passion I had for the work I was doing and decided to go full time. As
          I learned I attended meetup groups, lectured others, and built
          projects along the way. Through coding I learned the values of
          discipline and collaboration. I constantly seek to improve my skills
          and am enthusiastic about the opportunity to work with other
          developers to expand my skill set. Below you can see the tools I have
          used along the way.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
