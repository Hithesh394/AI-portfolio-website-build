"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-purple-500/30 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          HG
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden md:flex gap-4">
          <a
            href="https://github.com/Hithesh394"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-400 transition"
          >
            GitHub
          </a>
          <a
            href="http://www.linkedin.com/in/hithesh3336"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-400 transition"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-purple-500/30 py-4">
          <div className="flex flex-col gap-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Hithesh394"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-400 transition"
              >
                GitHub
              </a>
              <a
                href="http://www.linkedin.com/in/hithesh3336"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
