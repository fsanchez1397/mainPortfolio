import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Header from "./global/Header";

type Props = {};

const Hero = ({}: Props) => {
  const [text, helper] = useTypewriter({
    words: [
      "<Fullstack Developer />",
      "<React />",
      "<Next.js />",
      "<TypeScript />",
      "<WordPress />",
      "<Shopify />",
    ],
    loop: true,
    delaySpeed: 1750,
  });
  return (
    <>
      <div
        className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <h2 className="text-[32px] uppercase tracking-[8px] text-black pb-2 p-5  absolute top-0 font-spaceGrotesk">
          Felipe Sanchez
        </h2>

        <Header text="Software Engineer" />
        {/* <h2
          className="text-[32px] uppercase tracking-[8px] text-[#b33009] pb-2"
          data-aos="fade-up"
        >
          Software Engineer
        </h2> */}
        <div className="relative h-40 w-40 mx-auto">
          <Image
            src={"/profilePic.jpeg"}
            alt="Headshot"
            fill
            priority
            style={{ objectFit: "cover" }}
            className="rounded-full border-black border-4"
          />
        </div>
        <h1 className="text-3xl lg:text-6xl font-semibold text-[#b33009] px-4 h-20 flex flex-col justify-center">
          <div>
            <span> {text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </div>
        </h1>
        <div className="z-10 absolute bottom-0 w-full p-5" data-aos="fade-up">
          {/*Page Navigation */}
          <div className="flex justify-center gap-4">
            <Link
              href="#about"
              className="w-1/3 min-w-[160px] md:min-w-[180px]"
            >
              <button className="heroButton text-[#b33009] w-full p-3 hover:border-[#b33009] hover:bg-[#b33009] hover:text-black">
                About Me
              </button>
            </Link>
            {/* <Link href="#experience">
              <button className="heroButton">Experience</button>
              </Link>
              <Link href="#skills">
              <button className="heroButton">Skills</button>
              </Link> */}
            <Link
              href="#projects"
              className="w-1/3 min-w-[160px] md:min-w-[180px]"
            >
              <button className="heroButton text-[#b33009] w-full p-3 hover:border-[#b33009] hover:bg-[#b33009] hover:text-black">
                Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
