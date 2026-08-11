import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contribute from "@/components/Contribute";
import Direction from "@/components/Direction";
import About from "@/components/About";
import ResumeCta from "@/components/ResumeCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contribute />
        <Direction />
        <About />
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
