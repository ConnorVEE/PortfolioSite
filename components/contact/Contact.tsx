"use client"
import Container from "../ui/Container";
import { useState } from 'react';

export default function Contact () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState< "idle" | "sending" | "success" | "error" >("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage(null);
        setStatus("sending");

        if (!name.trim() || !email.trim() || !message.trim()) {
            setErrorMessage("All fields are required");
            setStatus("error");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.trim())) {
            setErrorMessage("Invalid email address");
            setStatus("error");
            return;
        }

        if (name.length > 30) {
            setErrorMessage("Name is too long");
            setStatus("error");
            return;
        }

        if (email.length > 40) {
            setErrorMessage("Email is too long");
            setStatus("error");
            return;
        }
    
        if (message.length > 600) {
            setErrorMessage("Message is too long");
            setStatus("error");
            return;
        }
    
        try {

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setErrorMessage(data.error);
                throw new Error("Failed to submit form");
            }

            setStatus("success");

            setName("");
            setEmail("");
            setMessage("");

        } catch (error) {
            setStatus("error");
        }
    };

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
                            
                            <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>

                                <label
                                htmlFor="name" 
                                className="font-medium font-secondary flex flex-col gap-2" 
                                >
                                    Name
                                    <input 
                                    id="name"
                                    required
                                    className="w-full p-2 border-2 border-secondary rounded focus:outline-none focus:ring-accent focus:border-accent"
                                    type="text" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)}
                                    maxLength={30} 
                                    />
                                </label>

                                <label
                                htmlFor="email" 
                                className="font-medium font-secondary flex flex-col gap-2" 
                                >
                                    Email
                                    <input
                                    id="email"
                                    required 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    maxLength={40} 
                                    className="w-full p-2 border-2 border-secondary rounded focus:outline-none focus:ring-accent focus:border-accent"
                                    />
                                </label>

                                <label 
                                htmlFor="message"
                                className="font-medium font-secondary flex flex-col gap-2" 
                                >
                                    Message
                                    <textarea
                                        id="message"
                                        required
                                        name="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        maxLength={600}
                                        className="w-full min-h-32 p-2 border-2 border-secondary rounded focus:outline-none focus:ring-accent focus:border-accent"
                                    />
                                </label>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="self-start px-6 py-1 rounded-xl border-2 border-primary bg-primary p-2 text-lg text-surface transition-colors hover:bg-accent hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                    {status === "sending" ? "Sending..." : "Submit"}
                                </button>

                                {status === "success" && (
                                    <p>
                                        Message sent successfully! Thanks for reaching out.
                                    </p>
                                )}

                                {status === "error" && (
                                    <p className="text-red-500">
                                        Error: {errorMessage}! Please try again or contact me directly by email
                                    </p>
                                )}
                            </form>

                        </div>
                    </div>

                </div>

            </Container>
        </section>
    )
}