import Container from "../ui/Container";

export default function HowIBuild() {
    return (
        <section id="how-i-build" className="py-18">
            <Container>
                <div>

                    <h2 className="text-2xl font-bold text-primary md:text-3xl py-4">How I Build</h2>

                    <div className="grid gap-4 py-4 md:grid-cols-3">
                        <div className="rounded-lg border border-secondary p-6">
                            <h3 className="text-lg font-semibold text-primary">Quality</h3>
                            <p className="py-2">
                            I believe quality comes from thoughtful architecture, attention to detail, and continuously 
                            refining software until it feels intuitive to use
                            </p>
                        </div>

                        <div className="rounded-lg border border-secondary p-6">
                            <h3 className="text-lg font-semibold text-primary">Thoughtful Architecture</h3>
                            <p className="py-2">
                            I enjoy designing scalable, adaptable software that stays maintainable as it grows and adapts 
                            to future needs
                            </p>
                        </div>

                        <div className="rounded-lg border border-secondary p-6">
                            <h3 className="text-lg font-semibold text-primary">Continuous Learning & Improvement</h3>
                            <p className="py-2">
                            I have a deep-rooted passion and commitment to improving my craft and learning as much as I 
                            can on my journey to becoming an expert engineer 
                            </p>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    )
}