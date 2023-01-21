import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  summary: string;
  technologyUsed: string[];
  selfImg: string;
  projImg: string;
};

function ProjCard({ title, summary, technologyUsed, selfImg, projImg }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
      {/* CARD PROJ IMAGE */}
      <motion.div
        initial={{ y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-32 h-32 "
      >
        <Image
          src={projImg}
          alt="Project FrontEnd"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-full hover:scale-110"
        />
      </motion.div>
      {/* CARD TITLE */}
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{title}</h4>
        <p className="font-bold text-2xl mt-1">By Felipe</p>
        <div className="flex space-x-2 my-2">
          <div className="relative h-10 w-10">
            <Image
              src={selfImg}
              alt="Tech Icon"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
          </div>
        </div>
        {/* SUMMARY */}
        <p className="py-5 text-gray-300 uppercase">{summary}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {technologyUsed.map((tech) => {
            return <li key={technologyUsed.indexOf(tech)}>{tech}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ProjCard;
