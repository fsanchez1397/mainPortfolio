import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ProjCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-32 h-32"
      >
        <Image
          src={"/../public/airbnbProj.PNG"}
          alt="Project FrontEnd"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">AirBnB Clone Redesign</h4>
        <p className="font-bold text-2xl mt-1">By Felipe</p>
        <div className="flex space-x-2 my-2">
          <div className="relative h-10 w-10">
            <Image
              src={"/../public/pokeProj.PNG"}
              alt="Tech Icon"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
            <Image
              src={"/../public/pokeProj.PNG"}
              alt="Tech Icon"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
            <Image
              src={"/../public/pokeProj.PNG"}
              alt="Tech Icon"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
          </div>
          {/* TechUsed */}
          {/* TechUsed */}
          {/* TechUsed */}
        </div>
        <p className="py-5 text-gray-300 uppercase">StartedWorkEnded</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>SummaryOfPoints</li>
          <li>SummaryOfPoints</li>
          <li>SummaryOfPoints</li>
          <li>SummaryOfPoints</li>
        </ul>{" "}
      </div>
    </article>
  );
}

export default ProjCard;
