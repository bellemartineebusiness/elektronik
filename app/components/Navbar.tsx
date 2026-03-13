"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#varfor-oss", label: "Varför oss" },
  { href: "#recensioner", label: "Recensioner" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <svg
              className="w-7 h-7 text-[#f59e0b]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M13 2L4.09 12.97A1 1 0 0 0 5 14.5h6.5L10 22l9.91-10.97A1 1 0 0 0 19 9.5H12.5L13 2z" />
            </svg>
            <span className="text-white font-bold text-lg tracking-tight group-hover:text-[#fbbf24] transition-colors">
              Voltex El AB
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+46701234567"
              className="ml-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0f172a] font-bold text-sm px-4 py-2 rounded-md transition-colors"
            >
              Ring oss
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Stäng meny" : "Öppna meny"}
            aria-expanded={open}
          >
            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f172a] border-t border-[#1e3a5f]">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-[#1e3a5f] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+46701234567"
              className="mt-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0f172a] font-bold text-sm px-4 py-2 rounded-md text-center transition-colors"
            >
              Ring oss
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
