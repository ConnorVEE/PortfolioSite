import Container from "@/components/ui/Container";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main>
      <section>
        <Container>
          <Hero />
        </Container>
      </section>

      <section>
        <Container>
          <h2>About Me</h2>
        </Container>
      </section>

      <section>
        <Container>
          <h2>Projects</h2>
        </Container>
      </section>

      <section>
        <Container>
          <h2>Skills</h2>
        </Container>
      </section>

      <section>
        <Container>
          <h2>How I Build</h2>
        </Container>
      </section>

      <section>
        <Container>
          <h2>Experience</h2>
        </Container>
      </section>

      <section>
        <Container>
          <h2>Contact</h2>
        </Container>
      </section>
    </main>
  );
}