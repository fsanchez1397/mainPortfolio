import Image from "next/image";
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
          alt=""
          fill
          priority
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </div>
      <div>
        <h1>
          <span> {text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
