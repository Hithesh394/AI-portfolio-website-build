import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projectDetails: { [key: string]: any } = {
  "data-science-course": {
    title: "Data Science Course (Harvard/MIT Labs) – Ratings + Feedback Submission",
    description: "Ratings & feedback submission task for the Harvard/MIT Data Science course.",
    fullDescription:
      "Full documentation coming soon: Ratings collection, feedback forms, validation, and analytics to summarize learner responses and improve course content.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%203%20photo-98xMYCSZ12jguNE7KvsfN16mbV5Yve.jpg",
    technologies: ["Python", "Pandas", "Flask", "CSV"],
    features: ["Ratings form", "Feedback storage", "Basic analytics", "CSV export"],
    liveUrl: "https://drive.google.com/drive/folders/1AQTnhOhA8o6TnocyPBvRxnLy7I1cnK7a?usp=sharing",
    documents: [] as { name: string; file: string }[],
  },
  "professional-video-profile": {
    title: "Professional Video Profile – Intro, Skills, AI Projects, Career Goal",
    description: "A professional video profile showcasing intro, skills, AI projects, and career goals.",
    fullDescription:
      "Full documentation coming soon: storyboarding, script, recorded footage, editing steps, and final exported profile video for portfolio presentation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%202%20image-TcYZYxvOzvP6no7pDOI0d2vFozSD3X.jpeg",
    technologies: ["Figma", "Adobe Premiere", "Storyboarding"],
    features: ["Script & storyboard", "Recording setup", "Editing & color grading", "Final export"],
    liveUrl: "https://drive.google.com/file/d/1N6A_olaMZGfxORCYEYJm26x1i2nvjCb9/view?usp=sharing",
    documents: [] as { name: string; file: string }[],
  },
  "vibe-coding-course": {
    title: "Vibe Coding Course – Ratings + Feedback Submission",
    description: "Ratings and feedback collection system for the Vibe Coding Course.",
    fullDescription:
      "Full documentation coming soon: forms to collect learner ratings, backend to store responses, and dashboard to visualize feedback and improve course modules.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%201%20photo-BdrTFYI6JLTQTWqmS4y0apKXrnvXNR.jpg",
    technologies: ["React", "Node.js", "Express"],
    features: ["Feedback form", "Backend API", "Dashboard visuals", "Export reports"],
    liveUrl: "https://drive.google.com/drive/folders/1dPV7dPibJc7g-cVZIhgavF_BFJ9r2jiv?usp=sharing",
    documents: [] as { name: string; file: string }[],
  },
  "automation-arena": {
    title: "Automation Arena – Build AI-powered workflow using automation tools",
    description: "Create AI-powered automation workflows using tools like Zapier/Make and custom scripts.",
    fullDescription:
      "Full documentation coming soon: Built an AI-powered automated workflow that pulls data from Google Sheets, processes it using ChatGPT API, and sends results to output apps automatically.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%204%20imaage-UmlJyVdMOsvOdWjNrEygvVsIdo6nH6.png",
    technologies: ["Zapier", "Make", "APIs", "Python"],
    features: ["Trigger-action flows", "API integrations", "Error handling", "Scheduling"],
    gumloop : "https://www.gumloop.com/pipeline?workbook_id=xjEkz3pFjJ1JeSL7sh1Coj",
    liveUrl: "https://drive.google.com/drive/folders/1QXPjiUV4IlFDLwWn6MOzWDy6ho1op-so?usp=sharing",
    documents: [] as { name: string; file: string }[],
  },
  "ai-agent": {
    title: "AI Agent – Build an autonomous AI agent using API + prompts",
    description: "An autonomous AI agent built with prompt engineering and API integrations.",
    fullDescription:
      "Full documentation coming soon: agent architecture, prompt strategies, tool integrations, and examples of task automation using the agent.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%205-NKmRTR3F5TMlB2VfU66NoBqEJRYghm.jpeg",
    technologies: ["OpenAI API", "Python", "FastAPI"],
    features: ["Prompt chaining", "Tool integrations", "Action execution", "Result verification"],
    liveUrl: "https://drive.google.com/drive/folders/1dfOTwu3mJZ8Dfq96lETHSNfxo1Wacfhe?usp=sharing",
    documents: [] as { name: string; file: string }[],
  },
  "ai-influencer-tracker": {
    title: "AI Influencer Tracker – Scrape, organize & analyze influencer data",
    description: "Scrape and analyze influencer metrics to produce insights and trends.",
    fullDescription:
      "Full documentation coming soon: scraping pipelines, data cleaning, metric calculations, and predictive analytics to identify high-potential creators.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%206-n7xshYQLBrt12LDegi1C8viQvNR0Qf.jpeg",
    technologies: ["Python", "Scrapy", "Pandas", "scikit-learn"],
    features: ["Data scraping", "Engagement metrics", "Trend detection", "Export reports"],
    liveUrl: "https://drive.google.com/drive/folders/19g9Y8--qbwSY5YTTjr8RHz_syzSdP9Ky?usp=sharing",
    documents: [] as { name: string; file: string }[],
  },
  "stack-showdown": {
    title: "Stack Showdown – MERN vs Next.js vs Remix vs Astro (AI App Comparison)",
    description: "Comparative analysis of popular web stacks using an AI-assisted benchmarking approach.",
    fullDescription:
      "Full documentation coming soon: performance tests, developer experience notes, deployment comparisons and AI-driven recommendations for stack choices.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%20sev-lfAiggSwcLpilnJtwfBupL7pCzWYbk.jpeg",
    technologies: ["Node.js", "Next.js", "Remix", "Astro"],
    features: ["Benchmarking", "Feature comparisons", "Deployment notes", "AI recommendations"],
    liveUrl: "https://drive.google.com/drive/folders/1yOJmuh_ny_rg_OkLdeU3fWXXzJizOXNO?usp=sharing",
    documents: [] as { name: string; file: string }[],
  },
  "ai-content-forge": {
    title: "AI Content Forge – Write SEO-Friendly Technical Content for ORANTS Website",
    description: "AI-powered content generation for SEO-friendly technical articles.",
    fullDescription:
      "Full documentation coming soon: content pipeline, prompt templates, SEO checks, and examples of generated technical content optimized for search engines.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%20eg-eAwJfJmve4XSpViLTkYBwBVF5iflvF.jpeg",
    technologies: ["OpenAI API", "Next.js", "SEO"],
    features: ["Prompt templates", "SEO optimization", "Bulk content generation", "Editing workflow"],
    liveUrl: "https://drive.google.com/drive/folders/1muV94hkg9OHDx07fT1hKZLxld9TBX22s?usp=sharing",
    documents: [] as { name: string; file: string }[],
  },
  "vibe-coding-sprint": {
    title: "Vibe Coding Sprint – Build a Mobile App using AI Vibe Coding Method",
    description: "Rapid mobile app development following the AI Vibe Coding method.",
    fullDescription:
      "Full documentation coming soon: app requirements, AI-assisted scaffolding, component development, testing, and deployment to app stores or test environments.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%209-UWau4rsNVuCxeSHAT27hXbNTumBGNu.png",
    technologies: ["React Native", "Expo", "TypeScript"],
    features: ["Rapid prototyping", "AI scaffolding", "Testing & QA", "Deployment"],
    github: "https://github.com/Hithesh394/v0-smart-task-assistant",
    liveUrl: "https://drive.google.com/drive/folders/1J0sllQ_cAtZF4C89shAYizh5L4KTecLl?usp=sharing",
    documents: [] as { name: string; file: string }[],
  },
  "viral-replicator": {
    title: "Viral Replicator – Analyze viral content & replicate patterns using AI",
    description: "Analyze viral posts and replicate their patterns using AI models and heuristics.",
    fullDescription:
      "Full documentation coming soon: dataset curation, feature extraction, model training for pattern replication, and generation of viral-like content samples.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%2010-Y99MATzGI90Xls6xSX2x6IcoemHIJl.png",
    technologies: ["NLP", "Computer Vision", "Python"],
    features: ["Pattern analysis", "Feature extraction", "Generative replication", "Evaluation metrics"],
    liveUrl: "https://drive.google.com/drive/folders/1cHVeJZQYmw0IBmntA_tE-I9D0jMwJhbh?usp=sharing",
    documents: [] as { name: string; file: string }[],
  },
  "polish-and-present": {
    title: "Polish & Present – Final Portfolio Presentation + Documentation + Showcase",
    description: "Final polishing, documentation, and presentation of the full internship portfolio.",
    fullDescription:
      "Full documentation coming soon: slide deck, walkthrough script, consolidated documentation for all tasks, and final showcase materials for interviews and demos.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%2011-Nx7aQpuC1BHtRAIBn4ZW1IHSLUorzS.png",
    technologies: ["Slides", "Figma", "Storyboarding"],
    features: ["Slide deck", "Presentation script", "Demo videos", "Documentation pack"],
    liveUrl: "https://drive.google.com/drive/folders/17sk4GIvFi-q-jTrpdWIQpJJPMV8aUrSD?usp=sharing",
    documents: [] as { name: string; file: string }[],
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectDetails[params.slug]

  if (!project) {
    return (
      <main className="min-h-screen pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Image */}
        <div className="mb-8 rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 h-96 relative">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>

        {/* Header */}
        <div className="mb-8">
          <Link href="/projects" className="text-purple-400 hover:text-purple-300 transition mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button className="bg-purple-600 hover:bg-purple-700">View on GitHub</Button>
            </a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">View Live</Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature: string) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-purple-400">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Documents section (if any) */}
            {project.documents && project.documents.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Documents</h2>
                <div className="space-y-3">
                  {project.documents.map((doc: any) => (
                    <div key={doc.file} className="card p-3 rounded">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{doc.name}</div>
                        <a href={doc.file} download className="underline text-sm">
                          Download
                        </a>
                      </div>
                      {/* preview for common types */}
                      {/\.(png|jpe?g|webp|gif)$/i.test(doc.file) ? (
                        <img src={doc.file} alt={doc.name} className="mt-3 w-full object-cover rounded" />
                      ) : /\.(pdf)$/i.test(doc.file) ? (
                        <iframe src={doc.file} className="mt-3 w-full h-56 rounded" />
                      ) : (
                        <div className="mt-3 text-sm text-muted-foreground">No preview available — download to view.</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            {/* Technologies */}
            <div className="bg-card border border-purple-500/30 rounded-lg p-6">
              <h3 className="font-bold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="bg-card border border-purple-500/30 rounded-lg p-6">
              <h3 className="font-bold mb-3">Links</h3>
              <div className="flex flex-col gap-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="underline">
                  GitHub
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="underline">
                  Live / Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
