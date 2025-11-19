import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative h-32 w-32 mx-auto ">
        <Image
          src={"/profilePic.jpeg"}
          alt="Headshot"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </div>
      <div className="z-10 max-w-sm md:max-w-md">
        {/* SelfTypingText */}
        <h2 className="text-sm uppercase tracking-[8px] text-[#b33009] pb-2">
          Software Engineer
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-4 h-20 flex flex-col justify-center">
          <div>
            <span> {text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </div>
        </h1>
        {/*Page Navigation */}
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton text-[#b33009]">About Me</button>
          </Link>
          {/* <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link> */}
          <Link href="#projects">
            <button className="heroButton text-[#b33009]">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
