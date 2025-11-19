import React from "react";
import ProjCard from "./ProjCard";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      title: "Elite Spaces - Tenant Portal",
      summary:
        "A portal website for tenants to manage their properties, leases and complaints.",
      technologyUsed: ["React", "Node", "Tailwind", "TypeScript"],
      projImg: "/eliteSpace.jpg",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7317636647511023618/",
    },
    {
      title: "Facial Plastics",
      summary:
        "Facial Plastics is a website that is built using WordPress. It is a beautiful and responsive website that is used to showcase the services and products of the company.",
      technologyUsed: ["WordPress", "CSS", "JavaScript"],
      projImg: "/facialPlastics.JPG",
      url: "https://facialplasticsbh.com/",
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
      title: "BLKSWN",
      summary:
        "I handled the development from the ground up for this project. I was responsible for the design, development, and deployment of the website. I used the Shopify and Liquid platform to build the website.",
      technologyUsed: ["Shopify", "Liquid", "JavaScript"],

      projImg: "/blkswn.JPG",
      url: "https://blkswn.com/",
    },
    {
      title: "Capital Tuluum",
      summary:
        "Capital Tuluum was made using webflows CMS and its visual editor.",
      technologyUsed: ["Webflow", "CMS", "CSS", "JavaScript"],

      projImg: "/tuluum.JPG",
      url: "https://www.capitaltuluum.com/",
    },
    {
      title: "Porfolio Website",
      summary:
        "Main Website showcasing my work. Implents a SPA layout using the newest software development tools currentyl available such as Next & Tailwind!",
      technologyUsed: ["Next.js", "Framer Motion", "Tailwind", "Redux"],

      projImg: "/portfolioProj.PNG",
      url: "https://felipe-sanchez-portfolio.vercel.app/",
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
