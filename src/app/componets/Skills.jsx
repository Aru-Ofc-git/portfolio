import { Raleway } from "next/font/google";
import Image from "next/image";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "/svg/html.svg" },
    { name: "CSS", icon: "/svg/css.svg" },
    { name: "BOOTSTRAP", icon: "/svg/bootstrap.svg" },
    { name: "TAILWIND CSS", icon: "/svg/tailwind.svg" },
    { name: "JavaScript", icon: "/svg/javascript.svg" },
    { name: "jQuery", icon: "/svg/JQuery.svg" },
    { name: "Node JS", icon: "/svg/nodejs.svg" },
    { name: "EJS", icon: "/svg/ejs.svg" },
    { name: "React", icon: "/svg/react.svg" },
    { name: "NexJs", icon: "/svg/next.svg" },
    { name: "Python", icon: "/svg/python.svg" },
    { name: "MongoDB", icon: "/svg/mongodb.svg" },
    { name: "MySql", icon: "/svg/mysql.svg" },
    { name: "git", icon: "/svg/git.svg" }
  ];
  return (
    <>
      <div
        className={`bg-[#FAFAFA] flex justify-center flex-wrap ${raleway.className} pt-24`}
      >
        <div className="md:px-24 px-14 md:py-5 py-2 md:my-5 md:border-4 border-2 border-black font-bold md:text-2xl  block">
          SKILLS
        </div>
        <div className="text-[#050505] w-full py-5 mx-5 flex justify-center font-semibold" >
            <p>There are the fields where I have skills on</p>
        </div>
        <div className="text-[#050505] w-full py-5 mx-5 md:mx-100 ">
          
          <div className="w-full flex justify-center px-10 flex-wrap gap-6 ">
            {skills.map((skill, index) => (
              <div key={index} className="mx-2 my-3 text-center">
                <Image
                  height={50}
                  width={50}
                  src={skill.icon}
                  alt={skill.name}
                  className="m-1 h-15 w-15"
                />
                <p className="font-semibold uppercase m-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
