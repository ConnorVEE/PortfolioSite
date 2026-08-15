"use client";

import { useState } from "react";
import Container from "../ui/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "How I Build", href: "#how-i-build" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-surface">

      <Container>

        <div className="flex items-center justify-between py-4">
          <a
            href="/"
            className="font-semibold text-primary"
          >
            Connor VanTress
          </a>

          <div className="hidden gap-8 md:flex">

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-secondary transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                {item.label}
              </a>
            ))}
            
          </div>

          <button
            className="md:hidden"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

        </div>

        {isOpen && (
          <div className="flex flex-col gap-4 border-t border-border py-4 md:hidden">

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-2 text-secondary"
              >
                {item.label}
              </a>
            ))}

          </div>
        )}

      </Container>

    </nav>
  );
}