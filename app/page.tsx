import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <div className="mb-8">
          <Projects />
        </div>
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
