"use client"
import Container from "../ui/Container";
import { useState } from 'react';

export default function Contact () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(message)
    }

    return (
        <section id="contact" className="py-18">
            <Container>
                <h2 className="text-2xl font-bold text-primary md:text-3xl py-4">Contact Me</h2>

                <div className="flex flex-col gap-10">

                    <div className="flex flex-col gap-4">
                        <p>
                            Thanks for taking the time to learn about me
                        </p>
                        <p>
                            I'm always excited to discuss software,
                            new opportunities, or interesting problems
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 md:flex-row">

                        <div className="flex flex-col gap-8 w-full md:w-1/2 md:border-r-2 border-secondary">

                            <a 
                            href="mailto:12cvantress@gmail.com"
                            className="text-lg text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                12cvantress@gmail.com →
                            </a>

                            <a 
                            href="https://www.linkedin.com/in/connor-vantress"
                            className="text-lg text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                LinkedIn →
                            </a>

                            <a 
                            href="https://github.com/ConnorVEE"
                            className="text-lg text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                Github →
                            </a>

                            <a
                            href={""}
                            className="text-lg text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                Resume ↓
                            </a>
                        </div>

                        <div className="w-full md:w-1/2 border-t border-secondary md:border-t-0 py-8 md:py-0">
                            
                            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                                <label>
                                    Name
                                    <input 
                                    className="flex flex-col gap-2 w-full p-2 border-2 border-secondary rounded focus:outline-none focus:ring-accent focus:border-accent"
                                    type="text" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    />
                                </label>

                                <label>
                                    Email
                                    <input 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="flex flex-col gap-2 w-full p-2 border-2 border-secondary rounded focus:outline-none focus:ring-accent focus:border-accent"
                                    />
                                </label>

                                <label>
                                    Message
                                    <textarea
                                        name="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="flex flex-col gap-2 w-full p-2 border-2 border-secondary rounded focus:outline-none focus:ring-accent focus:border-accent"
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="self-start px-6 py-1 rounded-xl border-2 border-primary bg-primary p-2 text-lg text-surface transition-colors hover:bg-accent hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                    Submit
                                </button>
                            </form>

                        </div>
                    </div>

                </div>

            </Container>
        </section>
    )
}