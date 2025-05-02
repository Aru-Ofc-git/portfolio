import Nav from "../componets/Nav";
import Projects from "../componets/Projects";
import Footer from "../componets/Footer";


export const metadata = {
  title: "My Projects | MERN Stack Web Applications by Ariful Islam Arman",
  description: "Explore the web applications I’ve built using MongoDB, Express.js, React, and Node.js. From dynamic dashboards to full-stack solutions—check out my latest work.",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <Projects />
      <Footer />
    </>
  );
}
