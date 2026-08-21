import Container from "@/components/ui/Container";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import HowIBuild from "@/components/how-i-build/HowIBuild";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HowIBuild />
      <Projects />
      <Skills />

      <section id="experience">
        <Container>
          <h2>Experience</h2>
        </Container>
      </section>

      <section id="contact">
        <Container>
          <h2>Contact</h2>
        </Container>
      </section>
    </main>
  );
}