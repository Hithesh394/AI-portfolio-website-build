import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"

const featuredProjects = [
  {
    slug: "data-science-course",
    title: "Data Science Course (Harvard/MIT Labs)",
    description: "Submitted ratings and feedback for advanced Data Science labs.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%203%20photo-98xMYCSZ12jguNE7KvsfN16mbV5Yve.jpg",
  },
  {
    slug: "automation-arena",
    title: "Automation Arena",
    description: "Built AI-powered workflow automation using no-code tools.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%204%20imaage-UmlJyVdMOsvOdWjNrEygvVsIdo6nH6.png",
  },
  {
    slug: "ai-agent",
    title: "AI Agent",
    description: "Developed autonomous AI agent using prompts and APIs.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%205-NKmRTR3F5TMlB2VfU66NoBqEJRYghm.jpeg",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold text-balance"> Gangadhar Hithesh Kumar</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">AI & Full-Stack Web Developer</p>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I build intelligent automation tools and modern web applications that solve real-world problems.
            Specialized in AI integration and full-stack development.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/projects">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                View My Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 py-20 bg-gradient-to-b from-transparent to-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Featured Tasks</h2>
          <p className="text-muted-foreground mb-12">
            A snapshot of my recent AI-focused tasks and real-world project work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Tasks
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-xl p-12 border border-purple-500/30">
          <h2 className="text-3xl font-bold">Ready to collaborate?</h2>
          <p className="text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Contact Me
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
