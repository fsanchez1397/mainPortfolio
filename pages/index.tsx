import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[#3a434c] text-white h-screen snap-y snap-mandatory overflow-auto z-0">
      <Head>
        <title>Felipe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/*Header */}
      <Header />
      {/*Hero */}
      <section className="snap-start" id="hero">
        <Hero />
      </section>
      {/*About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/*Exp */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/*Skills*/}

      {/*Projects */}

      {/*Contact Me*/}
    </div>
  );
}
