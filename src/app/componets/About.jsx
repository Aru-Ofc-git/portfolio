import { LiaPencilRulerSolid } from "react-icons/lia";
import { FaLaptopCode } from "react-icons/fa";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { Raleway } from "next/font/google";
import Image from "next/image";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const About = () => {
  var servicesArray = [
    {
      name: "DESIGN",
      des: "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
      icon: LiaPencilRulerSolid,
    },
    {
      name: "DEVELOPMENT",
      des: " I can develop a fully functional, responsive website based on your requirements. Whether building from scratch or improving existing features, I’ll ensure clean, scalable code and collaborate with you throughout the process.",
      icon: FaLaptopCode,
    },
    {
      name: "MAINTENANCE",
      des: "I can maintain and update your website regularly to ensure optimal performance and security. From fixing bugs to implementing updates, I’ll keep everything running smoothly and consult with you as needed.",
      icon: HiWrenchScrewdriver,
    },
  ];

  return (
    <>
      <div
        className={`bg-[#e7e7e7] flex justify-center ${raleway.className} flex-wrap pt-14 md:pt-24`}
      >
        <div className="md:px-24 px-14 md:py-5 py-2 md:my-10 md:border-4 border-2 border-black font-bold md:text-2xl m-6">
          ABOUT ME
        </div>
        <div className="text-[#050505] md:mx-80 mx-10 my-5">
          <div className="leading-[2rem] ">
            <p>
              Hi! I'm a passionate MERN Stack Developer from Bangladesh. I
              started my coding journey in 2022, and since then, I’ve been
              building dynamic and responsive web applications using MongoDB,
              Express.js, React, and Node.js.
            </p>

            <p>
              I enjoy turning complex problems into clean, efficient code and
              bringing ideas to life on the web. My focus is on writing clean,
              maintainable code and delivering high-quality user experiences.
            </p>
            <p>
              I'm always eager to learn new technologies and take on exciting
              projects. Let’s build something amazing together!
            </p>
          </div>
        </div>
        <div className="px-12 text-2xl border-4 border-y-0 border-black my-10">
          EXPLORE
        </div>

        <div className="w-full flex justify-center my-5">
          <Image
            height={12}
            width={170}
            src={`/images/separatorBlack 1.png`}
            alt="Separtor"
          />
        </div>

        <div className="w-full flex justify-center md:mx-120 flex-wrap">
          {servicesArray.map((data, index) => (
            <div key={index} className="flex mx-5 my-5 md:w-5/12">
              <div>
                <div>
                  <data.icon className="h-20 w-20 absolute opacity-25" />
                </div>
                <div>
                  <h3 className="mx-15 text-xl md:text-3xl tracking-widest font-extrabold my-5">
                    {data.name}
                  </h3>
                </div>
                <div>
                  <p>{data.des}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center my-5">
          <Image
            height={12}
            width={170}
            src={`/images/separatorBlack 1.png`}
            alt="Separtor"
          />
        </div>
      </div>
    </>
  );
};

export default About;
