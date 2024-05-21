import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  image: string;
  tech1: string;
  tech2: string;
  tech3: string;
}

const ProjectCard = ({ title, image, tech1, tech2, tech3 }: Props) => {
  return (
    <div className=" grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 text-center">
      <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md active:scale-95 active:duration-200">
        <Image
          src={`${image}`}
          alt="title"
          width={500}
          height={500}
          className=" object-contain rounded-xl shadow-md mx-auto"
        />
      </div>
      <div>
        <h1 className=" text-[25px] text-white">{title}</h1>
        <p className=" text-white opacity-65 text-[15px] mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad
          voluptate repudiandae, ratione qui veritatis! Accusantium ipsa
          consectetur nam blanditiis, facilis, reprehenderit quos ea ex esse
          voluptatem animi! Repudiandae, iusto! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Harum, enim.
        </p>
        <div className=" mt-5 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8">
          <h1 className="px-6 py-3 bg-blue-700 text-white rounded-lg text-center">
            {tech1}
          </h1>
          <h1 className="px-6 py-3 bg-white text-black rounded-lg text-center">
            {tech2}
          </h1>
          <h1 className="px-6 py-3 bg-sky-500 text-white rounded-lg text-center">
            {tech3}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
