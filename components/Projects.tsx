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
      technologyUsed: ["Redux-toolkit", "React Router", "React", "Tailwind"],
      projImg: "/pokeProj.PNG",
      url: "https://poketeams.vercel.app/addteam",
    },
    {
      title: "Marli New York",
      summary:
        "Currently managing the main website of one of our companies largest clients. Marli is a luxury jewelry website that is built using Shopify. Notable tasks included updating theme to Showcase version 6.0, creating new landing pages, migrating to Google Analytics 4 and updating the homepage",
      technologyUsed: ["Shopify", "Image Compression", "CSS"],

      projImg: "/marli.JPG",
      url: "https://marlinewyork.com/",
    },
    {
      title: "Airbnb Remake",
      summary:
        "Clone of Airbnb website. Used and implemented various resources to create a functionally similair website to Airbnb. Opens up a map with location of houses near search area.",
      technologyUsed: [
        "Next.js",
        "Rest APIs",
        "Github Repos",
        "Hero Icons",
        "Tailwind",
      ],
      projImg: "/airbnbProj.PNG",
      url: "https://airbnb-clone-psi-dun.vercel.app/",
    },
    {
      title: "Individual Porfolio Website",
      summary:
        "Main Website used to attract and display my coding ability to other developers and recruiters. Implents a SPA layout with scrolling and links to some of my profiles on the top left :)",
      technologyUsed: [
        "Smooth-Scrolling",
        "Next.js",
        "Framer Motion",
        "Tailwind",
        "TypeWriter",
      ],

      projImg: "/portfolioProj.PNG",
      url: "https://main-portfolio-xnex.vercel.app/",
    },
    {
      title: "Capital Tuluum",
      summary:
        "One of my early projcets. Capital Tuluum was in hiatus as the old developer left the company. I wac able to learn webflows CMS and its visual editor. I implemented many CSS changes as the site had many bugs. After going through the site we were able to succesfuly push it live while still meeting our deadline!",
      technologyUsed: ["Webflow", "CMS", "CSS"],

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
