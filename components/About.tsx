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
        <h4 className="text-3xl font-semibold text-[#b33009]">About Me</h4>
        <p className="text-sm md:text-lg">
          I am a Fullstack developer with 4 years of experience. I have
          experience working directly with clients & stakeholders to build their
          vision. I have built various websites and webapps using various
          different tech stacks such as React, Node, Wordpress and Shopify I
          enjoy working with a passionate and driven team and am always looking
          for new challenges and opportunities to help improve our internal
          processes. Below you can see the tools I have used along the way.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
