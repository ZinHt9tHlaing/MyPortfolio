import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-b-2 pb-5 border-gray-600 border-opacity-40">
        <div>
          <div className=" font-logo text-white text-lg">
            <span className="text-3xl md:text-4xl text-yellow-400">ZH</span>H
          </div>
          <h1 className=" text-sm mt-2 text-white opacity-70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nisi
            culpa dolorem reiciendis vel delectus praesentium ab corrupti.
            Aliquid voluptatem facere temporibus velit voluptatum repellat
            incidunt numquam est quasi natus.
          </h1>
          <p className=" mt-5 text-yellow-300 underline font-semibold">
            example@gmail.com
          </p>
        </div>
        <div className="md:mx-auto">
          <h1 className=" text-white font-semibold mb-6 text-lg">Quick Link</h1>
          <p className=" text-lg text-white opacity-80 mb-4 cursor-pointer hover:text-yellow-300">
            About
          </p>
          <p className=" text-lg text-white opacity-80 mb-4 cursor-pointer hover:text-yellow-300">
            Projects
          </p>
          <p className=" text-lg text-white opacity-80 mb-4 cursor-pointer hover:text-yellow-300">
            Contact
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-6 text-lg">Address</h1>
          <div className="flex items-center mt-4 space-x-2">
            <MapIcon className="w-4 h-4 text-yellow-300" />
            <p className=" text-lg font-normal text-white opacity-75">
              Yangon, Myanmar
            </p>
          </div>
          <div className="flex items-center mt-4 space-x-2">
            <EnvelopeIcon className="w-4 h-4 text-yellow-300" />
            <p className=" text-lg font-normal text-white opacity-75">
              example@gmail.com
            </p>
          </div>
          <div className="flex items-center mt-4 space-x-2">
            <PhoneIcon className="w-4 h-4 text-yellow-300" />
            <p className=" text-lg font-normal text-white opacity-75">
              +959 965 664 813
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-6 w-[80%] mx-auto text-white opacity-70">
        &#169; Copyright 2024{" "}
        <span className=" text-yellow-300 text-lg font-secondary">
          Zin Htet
        </span>
      </div>
    </div>
  );
};

export default Footer;
