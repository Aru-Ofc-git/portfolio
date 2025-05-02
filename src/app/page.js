"use client";
import Nav from "./componets/Nav";
import Hero from "./componets/Hero";
import About from "./componets/About";
import Skills from "./componets/Skills";
import Contact from "./componets/Contact";
import Project from "./componets/Projects";
import Footer from "./componets/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
