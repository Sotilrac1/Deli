"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gold bg-cream">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-playfair text-2xl text-charcoal">
          Mow&apos;s Deli
        </Link>

        <button
          type="button"
          className="font-lato text-sm uppercase tracking-widest text-charcoal md:hidden"
          onClick={handleToggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          Menu
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-lato text-sm uppercase tracking-widest text-charcoal transition-colors duration-300 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {isOpen ? (
        <div id="mobile-nav" className="border-t border-gold md:hidden">
          <div className="flex flex-col px-5 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 font-lato text-sm uppercase tracking-widest text-charcoal transition-colors duration-300 hover:text-gold"
                onClick={handleCloseMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
