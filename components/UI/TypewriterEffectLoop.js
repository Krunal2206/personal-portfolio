"use client";

import { TypeAnimation } from "react-type-animation";

const TypewriterEffectLoop = () => {
  return (
    <TypeAnimation
      sequence={[
        "Web Developer",
        2000,
        "",
        500,
        "MERN Stack Developer",
        2000,
        "",
        500,
        "Full Stack Engineer",
        2000,
        "",
        500,
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={40}
      repeat={Infinity}
      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl sm:text-4xl font-bold"
    />
  );
};

export default TypewriterEffectLoop;
