import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, FileJson, Braces, Database, GitBranch, Cloud, Server, Bot } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C#", icon: <Code2 className="h-4 w-4 mr-1" /> },
        { name: "JavaScript", icon: <Braces className="h-4 w-4 mr-1" /> },
        { name: "TypeScript", icon: <FileJson className="h-4 w-4 mr-1" /> },
        { name: "Python", icon: <Code2 className="h-4 w-4 mr-1" /> },
      ],
      color: "bg-cherry",
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: ".NET Core", icon: <Code2 className="h-4 w-4 mr-1" /> },
        { name: "ASP.NET", icon: <Server className="h-4 w-4 mr-1" /> },
        { name: "Entity Framework", icon: <Database className="h-4 w-4 mr-1" /> },
        { name: "React JS", icon: <Braces className="h-4 w-4 mr-1" /> },
        { name: "Next.js", icon: <Braces className="h-4 w-4 mr-1" /> },
        { name: "Node.js", icon: <Server className="h-4 w-4 mr-1" /> },
      ],
      color: "bg-cherry",
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: <Database className="h-4 w-4 mr-1" /> },
        { name: "SQL Server", icon: <Database className="h-4 w-4 mr-1" /> },
      ],
      color: "bg-cherry",
    },
    {
      title: "DevOps & Other Tools",
      skills: [
        { name: "Git", icon: <GitBranch className="h-4 w-4 mr-1" /> },
        { name: "Azure", icon: <Cloud className="h-4 w-4 mr-1" /> },
        { name: "VPS hosting", icon: <Server className="h-4 w-4 mr-1" /> },
        { name: "LLMs", icon: <Bot className="h-4 w-4 mr-1" /> },
      ],
      color: "bg-cherry",
    },
  ]

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto">
        <h2 className="section-title text-center glow-text animate-fade-in">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="card-gradient overflow-hidden animate-slide-up group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-2 w-full ${category.color} glow-sm transition-all duration-300 group-hover:h-3`}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-cherry transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-gray-800 hover:bg-cherry text-white py-1.5 px-3 text-sm flex items-center hover-glow cursor-pointer hover:scale-110 transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 150 + skillIndex * 50}ms` }}
                    >
                      <span className="hover:rotate-12 transition-transform duration-300">{skill.icon}</span>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-delay">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm constantly learning and expanding my skill set to stay current with the latest technologies and best
            practices in software development.
          </p>
        </div>
      </div>
    </section>
  )
}
