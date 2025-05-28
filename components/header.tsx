"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-900 bg-black/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold gradient-text glow-text">
            Dominik Janiak
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-cherry transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-cherry transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-cherry transition-colors">
            Projects
          </Link>
          <Link href="#experience" className="text-sm font-medium hover:text-cherry transition-colors">
            Experience
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-cherry transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="https://github.com/8077541" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/dominik-janiak-b71915295/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Button className="bg-cherry hover:bg-cherry-dark glow-sm hover-glow">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-sm z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <Link
              href="#about"
              className="text-xl font-medium hover:text-cherry transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-xl font-medium hover:text-cherry transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-xl font-medium hover:text-cherry transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="text-xl font-medium hover:text-cherry transition-colors"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-xl font-medium hover:text-cherry transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex items-center gap-4 mt-4">
              <Link href="https://github.com/8077541" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/dominik-janiak-b71915295/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
            <Button className="bg-cherry hover:bg-cherry-dark glow-sm hover-glow mt-4">
              <Link href="#contact" onClick={toggleMenu}>
                Get in Touch
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
