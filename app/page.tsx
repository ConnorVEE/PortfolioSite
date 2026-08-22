import Container from "@/components/ui/Container";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import HowIBuild from "@/components/how-i-build/HowIBuild";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HowIBuild />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}