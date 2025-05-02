"use client";

import Image from "next/image";
import Link from "next/link";
import {
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";
import { TbBrandFiverr } from "react-icons/tb";
import { Raleway } from "next/font/google";
import { Advent_Pro } from "next/font/google";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const adventpro = Advent_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Hero = () => {
  return (
    <>
      <div className="h-[90vh] w-full bg-[#D7D7D7] hidden md:block">
        <div className="h-[90vh] w-[40%] flex justify-center align-middle items-center">
          <div className={`${raleway.className} `}>
            <div>
              <span className={`font-bold text-[40px]`}>Hi, I'm </span>
            </div>
            <div>
              <span className={`font-bold text-[60px]`}>
                Ariful Islam Arman
              </span>
            </div>
            <div>
              <span className="text-[#909090] font-extrabold text-[26px]">
                MERN Stack Developer
              </span>
            </div>
            <div className="flex justify-center flex-wrap my-7">
            <Link href='https://www.linkedin.com/in/arman-ofc/' target="_blank">
                <RiLinkedinFill className="h-10 w-10 p-2 bg-[#C4C4C4] text-black shadow-lg shadow-gray-400 rounded-xs hover:bg-orange-600 m-5 hover:text-[#C4C4C4]" />
              
              </Link>


              <Link href='https://github.com/Aru-Ofc-git' target="_blank">
                <RiGithubFill  className="h-10 w-10 p-2 bg-[#C4C4C4] text-black shadow-lg shadow-gray-400 rounded-xs hover:bg-orange-600 m-5 hover:text-[#C4C4C4]"/>
              
              </Link>

              <Link href='https://www.fiverr.com/arman_ofc/' target="_blank">
                <TbBrandFiverr className="h-10 w-10 p-2 bg-[#C4C4C4] text-black shadow-lg shadow-gray-400 rounded-xs hover:bg-orange-600 m-5 hover:text-[#C4C4C4]" />
              
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[90vh] w-[60%] bg-[url('/images/hero_bg_2.png')] bg-no-repeat absolute right-0 top-0 z-0 overflow-hidden">
          <Image
            src="/images/ariful_islam_arman.png"
            height={877}
            width={783}
            className="h-[877px] w-[783px] my-30 relative left-[10%]"
            alt="Ariful Islam Arman"
          />
        </div>
      </div>

      <div className="relative h-[95vh] w-full md:hidden">
        <div className="absolute top-0 left-0 h-full w-full">

          
          <Image
            src="/images/background.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="h-[95vh] w-full absolute top-0 left-0 bg-black opacity-70"></div>
        </div>
        <div className="elemet h-[95vh] w-full absolute top-0 left-0">
          <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white">
          <div className="w-full text-2xl font-semibold float-left pl-10">
              <h1 className={adventpro.className}>Hey, I'm </h1>
            </div>
            <div className="w-full text-5xl font-semibold text-left pl-10">
              <h1 className={adventpro.className}>Ariful Islam Arman</h1>
            </div>
            <div className="text-2xl my-5"><h3 className={raleway.className}>MERN Stack Developer</h3></div>

            <div className="flex justify-center flex-wrap">



              <Link href='https://www.linkedin.com/in/arman-ofc/' target="_blank">
                <RiLinkedinFill className="h-10 w-10 p-2 bg-white text-black rounded-full shadow-lg hover:bg-orange-600 m-5" />
              
              </Link>


              <Link href='https://github.com/Aru-Ofc-git' target="_blank">
                <RiGithubFill  className="h-10 w-10 p-2 bg-white text-black rounded-full shadow-lg hover:bg-orange-600 m-5"/>
              
              </Link>

              <Link href='https://www.fiverr.com/arman_ofc/' target="_blank">
                <TbBrandFiverr className="h-10 w-10 p-2 bg-white text-black rounded-full shadow-lg hover:bg-orange-600 m-5" />
              
              </Link>

            </div>
          </div>
            
        </div>
      </div>
    </>
  );
};

export default Hero;
