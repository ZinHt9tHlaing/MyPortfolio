import Link from "next/link";
import React from "react";
import { SkillCard } from "./Helper";

const AboutMe = () => {
  return (
    <div className=" mt-[-3rem] bg-black pb-[3rem] pt-[5rem]">
      <div className="grid w-[80%] grid-cols-1 lg:grid-cols-7 gap-[2rem] mx-auto items-center">
        <div className=" col-span-3">
          <p className="heading-mini">My Skills</p>
          <h1 className="heading-primary">
            Let's Explore Popular{" "}
            <span className=" text-yellow-300 font-secondary">Skills</span> & Experiences
          </h1>
          <p className=" text-lg mb-6 text-white opacity-70 mt-6">
            Lorem ipsum dolor, s it amet consectetur adipisicing elit. Vero
            exercitationem veniam provident magni, non voluptatibus saepe nobis.
            Eius, praesentium veniam ad obcaecati cupiditate similique odio.
          </p>
          <Link
            href="https://github.com/ZinHt9tHlaing"
            target="_blank"
            className="relative flex h-12 w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 active:scale-95 active:duration-200"
          >
            <span className=" relative z-10">Learn More</span>
          </Link>
        </div>
        <div className="col-span-4">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center">
            <div>
              <SkillCard title="HTML5" image="/images/html.svg" percent="90%" />
            </div>
            <div>
              <SkillCard title="CSS" image="/images/css.svg" percent="80%" />
            </div>
            <div>
              <SkillCard
                title="Tailwind CSS"
                image="/images/tw.svg"
                percent="85%"
              />
            </div>
            <div>
              <SkillCard
                title="JavaScript"
                image="/images/js.svg"
                percent="77%"
              />
            </div>
            <div>
              <SkillCard
                title="TypeScript"
                image="/images/ts.svg"
                percent="67%"
              />
            </div>
            <div>
              <SkillCard
                title="React"
                image="/images/react.svg"
                percent="88%"
              />
            </div>
            <div>
              <SkillCard
                title="NextJS"
                image="/images/next.svg"
                percent="80%"
              />
            </div>
            <div>
              <SkillCard
                title="PostgreSQL"
                image="/images/postgresql.svg"
                percent="67%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
