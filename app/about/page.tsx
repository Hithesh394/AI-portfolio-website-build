import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const skills = {
    "AI & Machine Learning": [
      "Natural Language Processing",
      "Computer Vision",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
    ],
    "Backend Development": ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
    "Frontend Development": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Web APIs"],
    "DevOps & Tools": ["Docker", "Kubernetes", "GitHub Actions", "AWS", "Vercel"],
  }

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm Hithesh Gangadhar, an AI and Full-Stack Web Developer passionate about building intelligent automation
              tools and modern web applications. With a strong foundation in machine learning and full-stack
              development, I specialize in creating solutions that combine the power of AI with intuitive user
              experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              My journey in technology started with a curiosity about how AI could solve real-world problems. Over the
              years, I've developed expertise in building end-to-end solutions, from training machine learning models to
              deploying production applications on cloud platforms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new AI technologies, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-card border border-purple-500/30 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-purple-400">{category}</h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-purple-400">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-lg p-12 border border-purple-500/30 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-6">
            I'm always interested in new projects and collaborations. Let's create something amazing together.
          </p>
          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700">Get In Touch</Button>
          </Link>
        </section>
      </div>
    </main>
  )
}
