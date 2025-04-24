import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  summary: string;
  technologyUsed: string[];
  projImg: string;
  url: string;
};

function ProjCard({ title, summary, technologyUsed, projImg, url }: Props) {
  console.log(projImg);
  return (
    <article className="flex flex-col rounded-lg border-2 border-[#b33009] p-2 items-center h-screen">
      {/* CARD PROJ IMAGE */}

      <img
        src={projImg}
        alt="Project FrontEnd"
        className="object-cover h-1/3 w-full rounded-lg"
      />

      {/* CARD TITLE */}
      <div className="px-0 md:px-10 pt-4 pb-2">
        <h4 className="text-3xl font-spaceGrotesk mb-4">{title}</h4>
        <a
          href={url}
          className="font-medium text-sm text-white uppercase p-2 bg-orange-500 rounded-lg"
        >
          View Project
        </a>
        {/* SUMMARY */}
        <p className="py-5 text-gray-700 uppercase font-inter">{summary}</p>
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
