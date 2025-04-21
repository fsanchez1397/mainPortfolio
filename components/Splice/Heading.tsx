export default function Heading() {
  return (
    <div className="flex flex-col justify-center h-full">
      <h1 className="z-20 relative text-white uppercase text-center text-3xl">
        About Me
      </h1>
      <p className="text-sm md:text-lg z-20 text-white" data-aos="fade-left">
        I'm a full-stack developer, my tech stack is React, TypeScript, Next.js,
        and Electron. Some cool features ive worked on is an AI-powered system
        to prioritize tenant complaints, a desktop app that transcribes audio
        and summarizes it using AI, and a bunch of e-commerce and business
        websites. I’m always up for a challenge and love working with people who
        are curious and always learning something new.
      </p>
    </div>
  );
}
