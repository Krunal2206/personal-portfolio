import React from "react";
import { HiOutlineSparkles } from "react-icons/hi2";
import { HoverBorderGradient } from "../UI/hover-border-gradient";
import TypewriterEffectLoop from "../UI/TypewriterEffectLoop";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section id="home" className="px-6 pt-40">
      <div className="flex flex-col lg:flex-row items-center w-full gap-10 mx-auto lg:max-w-6xl justify-center">
        <div className="flex flex-col gap-5 justify-center max-w-3xl w-full lg:w-1/2">
          <HoverBorderGradient
            containerClassName="rounded-full w-fit"
            as="div"
            className="flex items-center space-x-2 px-4 py-2 bg-black text-white dark:bg-black"
          >
            <HiOutlineSparkles size={20} className="text-[#b49bff]" />
            <span className="text-sm Welcome-text">Fullstack Developer</span>
          </HoverBorderGradient>
          <div className="flex flex-col gap-4 mt-4">
            <h2 className="hero-title text-4xl sm:text-5xl font-bold">
              Krunal Thakar
            </h2>
            <div className="text-3xl sm:text-4xl font-bold">
              I'm <TypewriterEffectLoop />
            </div>
          </div>

          <p className="text-lg text-[var(--tertiary-color)] my-5 max-w-[600px]">
            I'm a Full Stack Software Engineer with experience in Website,
            Mobile, and Software development. Check out my projects and skills.
          </p>

          <a
            href="#about"
            className="w-max relative overflow-hidden px-6 py-3 rounded-full transition-all duration-200 hover:bg-gray-800 text-center bg-white/10 backdrop-blur-md border border-white/20"
          >
            Get Resume
          </a>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <Image src={"/Programmer.gif"} alt="" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
