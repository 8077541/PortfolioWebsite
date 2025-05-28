import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto">
        <h2 className="section-title text-center glow-text animate-fade-in">Experience & Education</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professional Experience */}
          <div className="space-y-6 animate-slide-left">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-cherry glow-icon" />
              Professional Experience
            </h3>

            <Card className="card-gradient group hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl group-hover:text-cherry transition-colors duration-300">
                  Customer Care Representative
                </CardTitle>
                <p className="text-sm text-gray-400">FedEx</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Provide front-line customer support across 20 different countries.</li>
                  <li>Utilize various internal software systems to solve complex customer issues.</li>
                  <li>Develop efficient workflows to improve customer satisfaction rates.</li>
                  <li>Collaborate with international teams to resolve cross-border shipping challenges.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gradient group hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl group-hover:text-cherry transition-colors duration-300">Intern</CardTitle>
                <p className="text-sm text-gray-400">Aski sp. z. o. o (Department of Computer Systems)</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Assisted in managing hardware and cable infrastructure at Anwil Włocławek.</li>
                  <li>Gained practical experience in network management and system maintenance.</li>
                  <li>Supported IT staff with infrastructure maintenance and troubleshooting.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <div className="space-y-6 animate-slide-right">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-cherry glow-icon" />
              Education
            </h3>

            <Card className="card-gradient group hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl group-hover:text-cherry transition-colors duration-300">
                  Engineer's Degree in IT
                </CardTitle>
                <p className="text-sm text-gray-400">Akademia Slaska (Currently Pursuing)</p>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">Key Modules:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Designing and Programming</li>
                  <li>Mobile Applications and Web Platforms</li>
                  <li>Software Testing</li>
                  <li>Cloud Computing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gradient group hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl group-hover:text-cherry transition-colors duration-300">
                  IT Technician Diploma
                </CardTitle>
                <p className="text-sm text-gray-400">Electric High School (Zespół Szkół Elektrycznych we Włocławku)</p>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">Key Modules:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Operating Systems</li>
                  <li>Networking</li>
                  <li>Programming</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
