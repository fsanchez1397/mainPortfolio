import React from "react";

import { Text } from "./global/Text";
type Props = {};

function About({}: Props) {
  return (
    <>
      <div className="text-left p-7">
        <p className="text-3xl text-black uppercase font-extrabold">Hey, I'm</p>
        <p className="text-3xl  text-[#b33009] uppercase font-extrabold">
          Felipe Sanchez.
        </p>
        <p className="text-3xl text-black uppercase font-extrabold">
          Here you can check out what I've worked on. I build things I ❤️
        </p>

        <Text text="I am a software engineer with a passion for creating innovative solutions that make a difference. I have experience in full-stack development, specializing in React, Next.js, and TypeScript. I am always eager to learn new technologies and improve my skills." />
      </div>
    </>
  );
}

export default About;
