"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary-900 shadow-lg">
      {/* Top bar */}
      <div className="bg-primary-950 py-1.5 text-center text-xs text-primary-200 hidden sm:block">
        Mon-Fri 8am-6:30pm &nbsp;|&nbsp; Sat 9am-3pm &nbsp;|&nbsp; Fully
        Licensed &amp; Insured
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-white rounded-lg px-3 py-1.5">
              <Image
                src="/assets/logo-transparent.png"
                alt="Seal Tech Pro"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-white/75 rounded-md hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + phone */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:1300888123"
              className="flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent-300 transition-colors"
            >
              <Phone className="h-4 w-4" />
              1300 888 123
            </a>
            <Button href="/contact" variant="contained" color="accent" size="sm">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-md p-2 text-white/75 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-white/75 rounded-md hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1 flex flex-col gap-2 border-t border-white/10 mt-2">
              <a
                href="tel:1300888123"
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4 text-accent-400" />
                Call 1300 888 123
              </a>
              <Button
                href="/contact"
                variant="contained"
                color="accent"
                size="md"
                fullWidth
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
