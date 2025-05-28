"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { SnakeGame } from "./snake-game"

export function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Software Developer"
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center relative overflow-hidden">
      {/* Snake Game Background */}
      <div className="absolute inset-0 w-full h-full">
        <SnakeGame />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="gradient-text glow-text">Dominik Janiak</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 h-10">
          {typedText}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto backdrop-blur-sm bg-gray-900/30 p-4 rounded-lg">
          Specializing in C#, JavaScript, and TypeScript with expertise in .NET and React. Building robust applications
          with clean code and creative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-cherry hover:bg-cherry-dark text-white px-8 py-6 backdrop-blur-sm glow-sm hover-glow">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button
            variant="outline"
            className="border-cherry text-white hover:bg-cherry/10 px-8 py-6 backdrop-blur-sm hover-glow"
          >
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <Link href="#about">
          <Button variant="ghost" size="icon" className="rounded-full backdrop-blur-sm">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </Link>
      </div>
    </section>
  )
}
