import Link from "next/link"
import { Github, Mail, Heart, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold gradient-text glow-text">
              Dominik Janiak
            </Link>
            <p className="text-gray-400 mt-2">Software Developer</p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#about" className="text-gray-300 hover:text-cherry transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-gray-300 hover:text-cherry transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-cherry transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-gray-300 hover:text-cherry transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-cherry transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/8077541"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cherry transition-colors"
            >
              <Github className="h-5 w-5 hover:glow-icon" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/dominik-janiak-b71915295/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cherry transition-colors"
            >
              <Linkedin className="h-5 w-5 hover:glow-icon" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:dominikjaniakxyz@gmail.com"
              className="text-gray-300 hover:text-cherry transition-colors"
            >
              <Mail className="h-5 w-5 hover:glow-icon" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-cherry mx-1 glow-icon" /> by Dominik Janiak | &copy;{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
