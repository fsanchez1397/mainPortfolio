import React from "react";

import { Cta } from "./global/Cta";
import { DEV_URL } from "./utils/constants";
type Props = {};

function About({}: Props) {
  return (
    <>
      <h2 className="text-3xl  text-orange-500 uppercase font-extrabold font-spaceGrotesk mb-8">
        About The Author
      </h2>
      <div className="text-left pt-0">
        <p className="text-xl text-white uppercase font-extrabold font-inter">
          Hey, I'm
        </p>
        <p className="text-3xl  text-orange-500 uppercase font-extrabold font-spaceGrotesk">
          Felipe Sanchez.
        </p>
        <p className="text-xl text-white uppercase font-extrabold font-inter">
          I’m a Fullstack Software Engineer with 3+ years of experience crafting
          modern web apps. I love clean design, solid code, and bringing ideas
          to life. Take a look at my projects — hope you enjoy them as much as I
          enjoyed building them. ❤️
        </p>

        <Cta text={"View Projects"} url={`${DEV_URL}#projects`} />
      </div>
    </>
  );
}

export default About;
