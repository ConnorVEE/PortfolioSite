import Container from "@/components/ui/Container";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import HowIBuild from "@/components/how-i-build/HowIBuild";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HowIBuild />
      <Projects />

      <section id="skills">
        <Container>
          <h2>Skills</h2>
        </Container>
      </section>

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