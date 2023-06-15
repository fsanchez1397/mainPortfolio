import React from "react";
import ProjCard from "./ProjCard";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      title: "Pokemon Team Tracker",
      summary:
        "A website used to register pokemon teams. Each team has a trainer and a set amount of pokemon they can add. After submission you can view the teams in the teams page.",
      technologyUsed: ["Redux-toolkit", "React Router", "Tailwind"],
      projImg: "/pokeProj.PNG",
      url: "https://poketeams.vercel.app/addteam",
    },
    {
      title: "Marli New York",
      summary:
        "Marli is a luxury jewelry website that is built using Shopify. Notable tasks included updating theme to Showcase version 6.0, creating new landing pages, migrating to Google Analytics 4 and updating the homepage.",
      technologyUsed: ["Shopify Platform", "Javascript", "CSS"],

      projImg: "/marli.JPG",
      url: "https://marlinewyork.com/",
    },
    {
      title: "Airbnb Remake",
      summary:
        "Clone of Airbnb's main pages. Implemented 3rd party packages and mobile responsiveness as seen with the map integration on desktop.",
      technologyUsed: ["Next.js", "Rest APIs", "Github", "Tailwind"],
      projImg: "/airbnbProj.PNG",
      url: "https://felipe-airbnb-clone.vercel.app/",
    },
    {
      title: "Porfolio Website",
      summary:
        "Main Website showcasing my work. Implents a SPA layout using the newest software development tools currentyl available such as Next & Tailwind!",
      technologyUsed: ["Next.js", "Framer Motion", "Tailwind", "Redux"],

      projImg: "/portfolioProj.PNG",
      url: "https://felipe-sanchez-portfolio.vercel.app/",
    },
    {
      title: "Capital Tuluum",
      summary:
        "Capital Tuluum was made using webflows CMS and its visual editor.",
      technologyUsed: ["Webflow", "CMS", "CSS", "JavaScript"],

      projImg: "/tuluum.JPG",
      url: "https://www.capitaltuluum.com/",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-8 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute hidden sm:inline-block top-24  uppercase tracking-[20px] text-gray-400 text-2xl">
        Project Experience
      </h3>
      <div className="mt-4 w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory">
        {projects.map((project) => {
          return (
            <ProjCard
              key={project.title}
              title={project.title}
              summary={project.summary}
              technologyUsed={project.technologyUsed}
              projImg={project.projImg}
              url={project.url}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
