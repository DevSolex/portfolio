"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="#hero" className="text-sm font-semibold tracking-tight">
          Samaila Solomon Monday
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground focus-visible:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/Samaila-Solomon-Monday-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-surface"
          >
            Download CV
          </Link>
        </div>
        <button
          type="button"
          className="md:hidden rounded-md border border-border px-3 py-2 text-sm"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>
      </nav>
      {open ? (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-background">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/Samaila-Solomon-Monday-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground"
              onClick={() => setOpen(false)}
            >
              Download CV
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
