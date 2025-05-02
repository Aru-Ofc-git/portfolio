"use client";
import Link from "next/link";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";
import { TbBrandUpwork, TbBrandFiverr } from "react-icons/tb";

import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});


const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="w-full bg-[#1A1A1A] h-xl text-white">
        <div
          onClick={scrollToTop}
          className="flex flex-col items-center justify-center cursor-pointer hover:text-orange-600 "
        >
          <MdKeyboardDoubleArrowUp className="w-6 h-6 mb-1 mt-10" />
          <p className="text-sm font-medium">BACK TO TOP</p>
        </div>

        {/* social */}
        <div className="flex justify-center flex-wrap mx-20 mD:mx-80 mt-10">
          <Link href="https://www.facebook.com/1R13A14" target="_blank">
            <RiFacebookLine className="h-9 w-9 border-2 border-white rounded-sm my-5 mx-2 md:m-5 p-1 font-semibold hover:bg-white hover:text-[#1A1A1A] ease-in-out duration-300" />
          </Link>

          <Link href="https://www.instagram.com/aru.ofc.ins/" target="_blank">
            <RiInstagramLine className="h-9 w-9 border-2 border-white rounded-sm my-5 mx-2 md:m-5 p-1 font-semibold hover:bg-white hover:text-[#1A1A1A] ease-in-out duration-300" />
          </Link>

          <Link href="https://x.com/1r13a14" target="_blank">
            <RiTwitterXLine className="h-9 w-9 border-2 border-white rounded-sm my-5 mx-2 md:m-5 p-1 font-semibold hover:bg-white hover:text-[#1A1A1A] ease-in-out duration-300" />
          </Link>

          <Link href="https://www.linkedin.com/in/arman-ofc/" target="_blank">
            <RiLinkedinLine className="h-9 w-9 border-2 border-white rounded-sm my-5 mx-2 md:m-5 p-1 font-semibold hover:bg-white hover:text-[#1A1A1A] ease-in-out duration-300" />
          </Link>

          <Link href="https://github.com/Aru-Ofc-git" target="_blank">
            <RiGithubLine className="h-9 w-9 border-2 border-white rounded-sm my-5 mx-2 md:m-5 p-1 font-semibold hover:bg-white hover:text-[#1A1A1A] ease-in-out duration-300" />
          </Link>

          <Link href="https://www.fiverr.com/arman_ofc/" target="_blank">
            <TbBrandFiverr className="h-9 w-9 border-2 border-white rounded-sm my-5 mx-2 md:m-5 p-1 font-semibold hover:bg-white hover:text-[#1A1A1A] ease-in-out duration-300" />
          </Link>
{/* 
          <Link href="">
            <TbBrandUpwork className="h-9 w-9 border-2 border-white rounded-sm my-5 mx-2 md:m-5 p-1 font-semibold hover:bg-white hover:text-[#1A1A1A] ease-in-out duration-300" />
          </Link> */}
        </div>
        {/* copyright */}
        <div className="flex justify-center">
            <p className={nunito.className}>&copy; <b>2025 <span className="text-orange-600">Ariful Islam Arman</span></b> All Rights Reserved.</p>
        </div>
        
      </div>
    </>
  );
};
export default Footer;
