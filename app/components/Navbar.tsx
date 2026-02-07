"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "sb-ceii", label: "Service" },
  { id: "contact", label: "Contact" },
];

// STYLE TOKENS: update these if you want different sizing/spacing
const base =
  "relative px-3 py-1 text-base md:text-lg font-medium text-ink-secondary hover:text-ink-primary transition";
const active =
  "text-ink-primary after:absolute after:left-0 after:-bottom-1 after:h-[4px] after:w-full after:bg-[#D9C6DB] after:rounded-full after:transition-all after:duration-200";

export default function Navbar() {
  const [activeSection, setActive] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          rootMargin: "-40% 0px -50% 0px", // controls when section counts as active
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left logo */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-semibold tracking-tight text-[#C8A9D2] transition hover:opacity-85"
        >
          AM
        </a>

        {/* Right nav */}
        <nav className="hidden gap-6 md:flex" aria-label="Main navigation">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${base} ${activeSection === id ? active : ""}`}
              aria-current={activeSection === id ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
