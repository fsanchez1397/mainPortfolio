import Spline from "@splinetool/react-spline";
import { useEffect } from "react";
import { LINKEDIN_URL } from "../utils/constants";
import Heading from "./Heading";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Splice() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="h-[100vh]  bg-black">
      <div className="h-full">
        <Heading />
      </div>
      <a
        href={LINKEDIN_URL}
        className="absolute top-0 left-0 w-full z-0 h-full"
      >
        <Spline scene="https://prod.spline.design/5es-CeZs4L3oJFVc/scene.splinecode" />
      </a>
    </div>
  );
}
