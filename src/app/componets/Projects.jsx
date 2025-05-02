import { Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const Project = () => {
  return (
    <>
      <div
        className={`bg-[#ffffff] flex justify-center flex-wrap ${raleway.className} pt-24`}
      >
        <div className="md:px-24 px-14 md:py-5 py-2 md:my-5 md:border-4 border-2 border-black font-bold md:text-2xl block">
          PROJECTS
        </div>
        <div className="text-[#050505] w-full py-5 mx-5 flex justify-center">
          <p>Here are some projects I have build.</p>
        </div>

        {/* projects */}
        <div className="flex justify-center flex-wrap">
          <div className="flex justify-center flex-wrap md:mx-80 mx-5 my-7 md:my-15">
            <div className="my-3 py-4 px-6 shadow-xl rounded-lg md:w-1/2">
              <Image
                src="/images/prime.png"
                height={200}
                width={500}
                className="h-2xl w-6xl"
                alt="Prime Kitchen and Aluminum "
              />
            </div>
            <div className="md:w-1/2">
              <div className="md:text-4xl text-2xl font-extrabold mx-5 mt-4">
                <h3>Prime Kitchen Aluminum Glass And UPVC</h3>
              </div>
              <div className="text-lg font-semibold mx-5">
                <p>Aluminium and uPVC Fabrication Manufacturer</p>
              </div>
              <div className="md:text-base mx-5 my-7 font-semibold">
                <span>
                  Prime Kitchen Aluminum Glass And UPVC is a leading
                  manufacturer and installer of premium aluminum, glass, and
                  uPVC solutions. Specializing in modern architectural needs,
                  the company delivers high-quality doors, windows, partitions,
                  and kitchen fittings tailored for both residential and
                  commercial projects.
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center flex-wrap md:mx-80 mx-5 md:flex-row-reverse my-7 md:my-15">
            <div className="my-3 py-4 px-6 shadow-xl rounded-lg md:w-1/2">
              <Image
                src="/images/ncw.png"
                height={200}
                width={500}
                className="h-2xl w-6xl"
                alt="Prime Kitchen and Aluminum "
              />
            </div>
            <div className="md:w-1/2">
              <div className="md:text-4xl font-extrabold text-2xl mx-5 mt-4">
                <h3>Report to NCW</h3>
              </div>
              <div className="text-lg font-semibold mx-5">
                <p>Cybersecurity Awareness & Support Platform</p>
              </div>
              <div className="md:text-base mx-5 my-7 font-semibold">
                <span>
                  Report to NCW (Noakhali Cyber Warriors) is a dedicated cyber
                  problem-solving platform committed to helping individuals
                  tackle online threats such as hacking, scams, cyberbullying,
                  and digital harassment. With a focus on community-based
                  digital safety, the platform offers guidance, awareness, and
                  reporting tools to empower users and create a safer online
                  environment for all.
                </span>
              </div>
              <div>
                <Link
                  href="https://report-to-ncw.com"
                  className="px-7 py-2 bg-gray-100 md:mx-10 rounded-lg cursor-pointer shadow-lg text-[#0D9488] font-extrabold"
                >
                  Live Link
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center flex-wrap md:mx-80 mx-5 my-7 md:my-15">
            <div className="my-3 py-4 px-6 shadow-xl rounded-lg md:w-1/2">
              <Image
                src="/images/knowledge.png"
                height={200}
                width={500}
                className="h-2xl w-6xl"
                alt="Knowledge Haunter"
              />
            </div>
            <div className="md:w-1/2">
              <div className="md:text-4xl text-2xl font-extrabold mx-5 mt-4">
                <h3>Knowledge Haunter</h3>
              </div>
              <div className="text-lg font-semibold mx-5">
                <p>Educational Blog & Informational Content Platform</p>
              </div>
              <div className="md:text-base mx-5 my-7 font-semibold">
                <span>
                  Knowledge Haunter is an educational blog platform that
                  delivers well-researched articles, insightful guides, and
                  trending updates across a wide range of topics including
                  technology, science, education, and digital lifestyle. With a
                  focus on clarity and relevance, the site aims to empower
                  readers through knowledge that’s easy to understand and apply
                  in real life.
                </span>
              </div>
              <div>
                <Link
                  href="https://knowledgehaunter.com/"
                  className="px-7 py-2 bg-gray-100 md:mx-10 rounded-lg cursor-pointer shadow-lg text-[#0D9488] font-extrabold"
                >
                  Live Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
