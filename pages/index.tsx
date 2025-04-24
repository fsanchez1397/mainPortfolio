import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Splice from "@/components/Splice/Splice";
import PageNum from "../../mainPortfolio/components/global/PageNum";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/space-grotesk";
import { Skills } from "@/components/Skills";

export default function Home() {
  useEffect(() => {
    AOS.init();
    once: true;
  }, []);
  return (
    <>
      <Header />
      <>
        <section className="mt-[80px]" id="hero">
          <Hero />
        </section>
        {/* <section className="relative">
      <Splice />
    </section> */}
        <section
          id="about"
          className="relative pt-[80px] bg-slate-600  p-5 pb-0"
        >
          <About />
          <PageNum page={1} color={"black"} />
        </section>
        <section className="relative pt-[80px] bg-white p-5 border-black border-b-[1px]">
          <Skills />
          <PageNum page={2} />
        </section>

        <section id="projects" className="relative pt-[80px] p-5">
          <Projects />
          <PageNum page={3} />
        </section>
        {/* <section id="projects" className="snap-center">
      <Projects />
    </section>  */}
      </>
    </>
  );
}
