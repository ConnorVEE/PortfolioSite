"use client";

import { useState } from "react";
import Container from "../ui/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "How I Build", href: "#how-i-build" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
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

          {/* <button
            className="md:hidden"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button> */}
          <button
            type="button"
            className="p-2 text-secondary hover:text-primary md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}                                                    
          </button>

        </div>

        <div
          id="mobile-menu" // ADDED: ID for aria-controls
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 border-t border-border"
              : "grid-rows-[0fr] opacity-0 border-t-0"
          }`}
        >

          <div className="overflow-hidden">

            <div className="flex flex-col gap-1 pb-4 pt-2">
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

          </div>

        </div>

      </Container>

    </nav>
  );
}