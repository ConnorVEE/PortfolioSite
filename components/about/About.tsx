import Container from "../ui/Container";

export default function About() {

    return (
        <section id="about" className="py-18">
            <Container>
                <div className="max-w-4xl">

                    <h2 className="text-2xl font-bold text-primary md:text-3xl py-4">About me</h2>

                    <div className="flex flex-col gap-4 py-4">
                        <p>
                            Hi, I’m Connor VanTress. I’m an Information Technology graduate based in Atlanta, GA,
                            passionate about building efficient, practical software solutions.
                        </p>
                        <p>
                            My approach to development is driven by curiosity and optimization, whether that means
                            architecting personal full-stack web applications, refactoring complex code bases, and
                            thoughtfully incorporating modern tools, such as AI, when they genuinely improve the
                            developmental process. Beyond software, my background as a shift supervisor at Starbucks
                            has sharpened my abilities in real-time communication, rapid problem-solving, and leading
                            teams through fast-paced, high-volume operations.
                        </p>
                        <p>
                            When I’m away from my screen, you’ll usually find me working out, reading, or painting
                            Warhammer miniatures.
                        </p>
                    </div>
                </div>

            </Container>
        </section>
    );
}