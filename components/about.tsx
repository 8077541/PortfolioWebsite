import { Card, CardContent } from "@/components/ui/card"
import { User, Code, GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-center glow-text animate-fade-in">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: User,
              title: "Who I Am",
              description: "A software developer with a passion for creating efficient, user-friendly applications.",
            },
            {
              icon: Code,
              title: "What I Do",
              description: "Develop full-stack applications using .NET, React, and various database technologies.",
            },
            {
              icon: GraduationCap,
              title: "My Background",
              description:
                "Currently pursuing an Engineer's Degree in IT with experience in customer care and IT support.",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="card-gradient animate-slide-up group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-cherry/20 p-3 rounded-full mb-4 glow-sm group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-8 w-8 text-cherry glow-icon group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cherry transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 backdrop-blur-sm animate-fade-in-delay hover:border-cherry/30 transition-all duration-300">
          <p className="text-lg leading-relaxed mb-4">
            Hello there! I'm a software developer with a penchant for C#, JavaScript, and TypeScript, and I thrive in
            the .NET ecosystem with frameworks like ASP.NET and ReactJS. My database adventures take me through
            PostgreSQL and SQL Server, while I navigate the DevOps landscape with tools like Git, Azure, and VPS
            hosting.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I'm a calm and meticulous individual—think of me as the Zen master of debugging. I might start off a bit
            shy, but once I get to know you, prepare for an avalanche of unfunny jokes that will leave you questioning
            your life choices!
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I'm also a bit stubborn (okay, maybe a lot), which means when I encounter a challenge, I dive deep into
            analysis and problem-solving before I consider asking for help. While this might slow me down at times, it's
            a fantastic way to learn and grow.
          </p>
          <p className="text-lg leading-relaxed">
            If you're looking for a dedicated developer who can bring a touch of humor to the team (even if it's the
            dad-joke kind), I might just be the perfect fit!
          </p>
        </div>
      </div>
    </section>
  )
}
