import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeWriterEffect } from "./Helper";

const Hero = () => {
  return (
    <div className=" w-screen pt-[4vh] md:pt-[12vh] h-[85vh] md:h-screen custom-bg">
      <div className="flex flex-col justify-center w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[#c4cfde] mb-[1.3rem] uppercase">
              Welcome to My World
            </h1>
            <div>
              <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white">
                Hi,I'm <span className=" text-yellow-300 font-secondary">Zin Htet,</span>
              </h1>
              {/* react-type-animation */}
              <TypeWriterEffect />
            </div>
            <p className=" mt-5 text-[15px] md:text-lg text-[#c4cfde]">
              I am a Frontend Developer at heart and create features that are
              best suited for the job at hand.
            </p>
            <div className="mt-8">
              {/* flex items-center space-x-6 */}
              {/* <Link
                href="mailto:zinhtethlaing4@gmail.com"
                target="_blank"
                className="relative flex h-12 w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 active:scale-95 active:duration-200"
              >
                <span className=" relative z-10">Hire Me</span>
              </Link> */}
              <Link
                href="/vercel.svg"
                download="MyCV"
                target="_blank"
                className="relative flex items-center justify-center before:ease-in-out h-12 w-40 overflow-hidden bg-green-700 text-white font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-orange-600 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 active:scale-95 active:duration-200"
              >
                <span className=" relative z-10">Download CV</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              priority
              src="/images/hero.png"
              alt="hero"
              width={600}
              height={600}
              className=" object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
