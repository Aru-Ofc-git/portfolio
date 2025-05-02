import Nav from "../componets/Nav";
import About from "../componets/About";
import Skills from "../componets/Skills";
import Footer from "../componets/Footer";


export const metadata = {
  title: "About Ariful Islam Arman | MERN Stack Developer",
  description: "I'm a dedicated MERN Stack Developer from Bangladesh with a passion for clean code, modern design, and building powerful web apps since 2022. Learn more about my journey.",
};

export default function AboutMe() {
  return (
    <>
      <Nav />
      <About />
      <Skills />
      <Footer />
    </>
  );
}
