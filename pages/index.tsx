import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Splice from "@/components/Splice/Splice";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/space-grotesk";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <div>
        <section className="snap-start" id="hero">
          <Hero />
        </section>
        {/* <section className="relative">
      <Splice />
    </section> */}
        <section id="about" className="snap-center">
          <About />
        </section>

        {/* <section id="projects" className="snap-center">
      <Projects />
    </section>  */}
      </div>
    </>
  );
}
