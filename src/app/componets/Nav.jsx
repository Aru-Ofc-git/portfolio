"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const Nav = () => {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const navHandle = () => {
    setNavIsOpened(!navIsOpened);
  };

  const navArray = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Me",
      url: "/about",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Contact Me",
      url: "/contact",
    },
    {
      name: "Hire Me",
      url: "https://www.fiverr.com/arman_ofc/",
    },
  ];
  return (
    <nav className="fixed w-full z-50">
      <div className={`${montserrat.className} hidden md:block`}>
        <div className="h-[67px] bg-black text-white w-full flex items-center justify-end px-8 ">
          <div className="flex space-x-8 mr-6">
            {navArray.map((items, index) => (
              <Link
                key={index}
                href={items.url}
                className={`px-6 py-1 font-semibold ease-in-out duration-300 ${
                  index == 4
                    ? "bg-white text-black hover:bg-orange-600 rounded-full hover:text-white"
                    : "hover:bg-white rounded-md hover:text-black "
                } `}
              >
                {items.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
{/* mobile menu */}
<div className={`mobileMenu w-full md:hidden ease-in-out duration-300`}>
  <div className="w-full h-[3.5rem] bg-black flex justify-end ">
    {navIsOpened ? (
      <FaTimes
        className="fill-white text-3xl m-3 cursor-pointer hover:fill-[#ff9151]"
        onClick={navHandle}
        aria-expanded={navIsOpened}
      />
    ) : (
      <FaBars
        className="fill-white text-3xl m-3 cursor-pointer hover:fill-[#ff9151]"
        onClick={navHandle}
        aria-expanded={navIsOpened}
      />
    )}
  </div>
  <div
    className={`${montserrat.className} ${
      navIsOpened ? "scale-y-100" : "scale-y-0 hidden"
    } ease-in-out duration-300 origin-top overflow-hidden`}
  >
    <div className="bg-black text-white opacity-90 flex justify-center flex-wrap">
      {navArray.map((items, index) => (
        <div
          className="h-[57px] w-full flex items-center justify-center hover:bg-white hover:text-black font-semibold"
          key={index}
        >
          <Link
            href={items.url}
            className="w-full h-full flex items-center justify-center"
          >
            {items.name}
          </Link>
        </div>
      ))}
    </div>
  </div>
</div>

    </nav>
  );
};
export default Nav;
