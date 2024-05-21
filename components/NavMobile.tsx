import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile = ({ showNav, closeNav }: Props) => {

    const navOpenStyle = showNav ? "translate-x-0": "-translate-x-full"; 

  return (
    <div className="">
      <div
        className={`fixed top-0 ${navOpenStyle} transform transition-all duration-200 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-screen h-screen `}
      ></div>
      <ul
        className={`text-white ${navOpenStyle} fixed flex flex-col items-center justify-center h-full transform transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[10006]`}
      >
        <li>
          <Link className="nav_link text-2xl sm:text-3xl" href="#">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav_link text-2xl sm:text-3xl" href="#">
            About
          </Link>
        </li>
        <li>
          <Link className="nav_link text-2xl sm:text-3xl" href="#">
            Projects
          </Link>
        </li>
        <li>
          <Link className="nav_link text-2xl sm:text-3xl" href="#">
            Contact
          </Link>
        </li>
        <XMarkIcon
          onClick={closeNav}
          className=" absolute top-[1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white"
        />
      </ul>
    </div>
  );
};

export default NavMobile;
