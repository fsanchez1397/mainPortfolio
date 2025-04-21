import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Splice from "@/components/Splice/Splice";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Header />
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
  );
}
