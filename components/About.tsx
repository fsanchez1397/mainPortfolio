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
        className="relative -mb-10 mt-4 md:mb-0 flex-shrink-0 w-48 h-48  md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
      >
        <Image
          src={"/aboutPic.jpg"}
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
          I am a Front End developer currently working the primary Web Developer
          at a luxury marketing agency. I have experience working with many
          clients and building out websties that exceed there needs! I
          constantly seek to improve my skills and am enthusiastic about the
          opportunity to work with other developers to expand my skill set.
          Below you can see the tools I have used along the way.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
