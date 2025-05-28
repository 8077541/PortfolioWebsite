"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto">
        <h2 className="section-title text-center glow-text">Get In Touch</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Feel free to reach out if you have any questions or if you'd like to work together on a project.
        </p>

        <div className="max-w-2xl mx-auto">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-xl">Contact Information</CardTitle>
              <CardDescription>Here's how you can reach me</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center">
                <div className="bg-cherry/20 p-2 rounded-full mr-4 glow-sm">
                  <Mail className="h-5 w-5 text-cherry glow-icon" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:dominikjaniakxyz@gmail.com" className="text-white hover:text-cherry">
                    dominikjaniakxyz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-cherry/20 p-2 rounded-full mr-4 glow-sm">
                  <MapPin className="h-5 w-5 text-cherry glow-icon" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Poland</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-cherry/20 p-2 rounded-full mr-4 glow-sm">
                  <Github className="h-5 w-5 text-cherry glow-icon" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a
                    href="https://github.com/8077541"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cherry"
                  >
                    github.com/8077541
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-cherry/20 p-2 rounded-full mr-4 glow-sm">
                  <Linkedin className="h-5 w-5 text-cherry glow-icon" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/dominik-janiak-b71915295/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cherry"
                  >
                    linkedin.com/in/dominik-janiak-b71915295
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
