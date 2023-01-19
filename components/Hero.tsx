import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = ({}: Props) => {
  const [text, helper] = useTypewriter({
    words: [
      "Hello, my name is Felipe",
      "<KeepRaisingTheBar />",
      "Self Taugh Dev",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative h-32 w-32 mx-auto ">
        <Image
          src="/../public/profilePic.jpg"
          alt="Handsome Face?"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </div>
      <div className="z-10">
        {/* SelfTypingText */}
        <h2 className="text-sm uppercase tracking-[15px] text-gray-800 pb-2">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span> {text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        {/*Page Navigation */}
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
