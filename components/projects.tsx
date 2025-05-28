import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Ivy Scans",
      description:
        "A web comic reader website with JWT authentication that allows users to read, bookmark, and track their reading progress across various comics.",
      technologies: ["Next.js", "C#", ".NET", "SQL", "JWT", "RESTful API"],
      github: "https://github.com/8077541/IvyScansBack",
      live: "https://app.dominikjaniakc.om",
      features: [
        "Implemented secure JWT authentication and authorization system",
        "Created a responsive comic reader interface with customizable settings",
        "Built a SQL database to store user bookmarks and reading progress",
        "Developed a RESTful API with .NET to handle user data and comic content",
        "Designed an admin panel for content management and user analytics",
      ],
    },
    {
      title: "League of Legends Profile Viewer",
      description:
        "A serverless Next.js application that provides comprehensive League of Legends player statistics, match history, and champion performance analysis using the Riot Games API with optimized caching strategies.",
      technologies: ["Next.js", "TypeScript", "Serverless", "Riot Games API", "Vercel", "React"],
      github: "https://github.com/8077541/LeagueProfileViewer",
      live: "https://lol.dominikjaniak.com",
      features: [
        "Built as a fully serverless Next.js application deployed on Vercel",
        "Integrated with Riot Games API to fetch real-time player data and statistics",
        "Implemented serverless functions for optimized API calls and caching",
        "Created an intuitive dashboard for visualizing player performance metrics",
        "Developed a responsive design with TypeScript for type safety and better DX",
      ],
    },
  ]

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h2 className="section-title text-center glow-text animate-fade-in">Projects</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-delay">
          Here are some of the projects I've worked on. Most of them are available on my
          <Link
            href="https://github.com/8077541"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cherry hover:underline ml-1 hover:glow-text transition-all duration-300"
          >
            GitHub
          </Link>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-gradient flex flex-col h-full animate-slide-up group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-cherry glow-text group-hover:scale-105 transition-transform duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="bg-gray-800 text-gray-200 hover:bg-cherry hover:text-white transition-all duration-300 cursor-default hover:scale-110"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div>
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 200 + featureIndex * 100}ms` }}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" className="flex-1 hover-glow group/btn">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Code
                  </Link>
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1 bg-cherry hover:bg-cherry-dark glow-sm hover-glow group/btn"
                >
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
