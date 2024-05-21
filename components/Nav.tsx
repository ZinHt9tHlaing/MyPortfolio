import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      } else if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const stickStyle = navSticky ? "bg-[#212428] shadow-sm shadow-gray-900" : "";

  return (
    <div
      className={`fixed w-full z-[1000] ${stickStyle} transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-[12vh] w-[80%] mx-auto">
        <div className=" font-logo text-white text-lg">
          <span className=" text-3xl md:text-4xl text-yellow-400">ZH</span>H
        </div>
        <ul className=" md:flex hidden items-center space-x-10">
          <li>
            <Link className="nav_link" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav_link" href="#">
              About
            </Link>
          </li>
          <li>
            <Link className="nav_link" href="#">
              Projects
            </Link>
          </li>
          <li>
            <Link className="nav_link" href="#">
              Contact
            </Link>
          </li>
        </ul>
        <Bars3CenterLeftIcon
          onClick={openNav}
          className="md:hidden w-[2.3rem] h-[2.3rem] text-white rotate-180"
        />
      </div>
    </div>
  );
};

export default Nav;
