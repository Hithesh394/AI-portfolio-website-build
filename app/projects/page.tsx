import ProjectCard from "@/components/project-card"

const allProjects = [
  {
    slug: "data-science-course",
    title: "Data Science Course (Harvard/MIT Labs)",
    description: "Submitted ratings and feedback for advanced Data Science labs.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%203%20photo-98xMYCSZ12jguNE7KvsfN16mbV5Yve.jpg",
  },
  {
    slug: "professional-video-profile",
    title: "Professional Video Profile",
    description: "Created intro video showcasing skills, AI projects, and career goals.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%202%20image-TcYZYxvOzvP6no7pDOI0d2vFozSD3X.jpeg",
  },
  {
    slug: "vibe-coding-course",
    title: "Vibe Coding Course",
    description: "Completed course and submitted structured feedback for improvement.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%201%20photo-BdrTFYI6JLTQTWqmS4y0apKXrnvXNR.jpg",
  },
  {
    slug: "automation-arena",
    title: "Automation Arena",
    description: "Built AI-based workflow automation using no-code and API tools.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%204%20imaage-UmlJyVdMOsvOdWjNrEygvVsIdo6nH6.png",
  },
  {
    slug: "ai-agent",
    title: "AI Agent",
    description: "Developed autonomous agent using prompts and external APIs.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%205-NKmRTR3F5TMlB2VfU66NoBqEJRYghm.jpeg",
  },
  {
    slug: "ai-influencer-tracker",
    title: "AI Influencer Tracker",
    description: "Scraped, organized and analyzed influencer data using AI.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%206-n7xshYQLBrt12LDegi1C8viQvNR0Qf.jpeg",
  },
  {
    slug: "stack-showdown",
    title: "Stack Showdown",
    description: "Compared MERN, Next.js, Remix & Astro through an AI-assisted report.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%20sev-lfAiggSwcLpilnJtwfBupL7pCzWYbk.jpeg",
  },
  {
    slug: "ai-content-forge",
    title: "AI Content Forge",
    description: "Wrote SEO-friendly technical content for ORANTS website using AI.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%20eg-eAwJfJmve4XSpViLTkYBwBVF5iflvF.jpeg",
  },
  {
    slug: "vibe-coding-sprint",
    title: "Vibe Coding Sprint",
    description: "Built a mobile app using AI-powered Vibe Coding method.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%209-UWau4rsNVuCxeSHAT27hXbNTumBGNu.png",
  },
  {
    slug: "viral-replicator",
    title: "Viral Replicator",
    description: "Analyzed viral content and recreated patterns using AI.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%2010-Y99MATzGI90Xls6xSX2x6IcoemHIJl.png",
  },
  {
    slug: "polish-and-present",
    title: "Polish & Present",
    description: "Final portfolio, documentation, presentation & showcase setup.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/task%2011-Nx7aQpuC1BHtRAIBn4ZW1IHSLUorzS.png",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground text-lg">
            A collection of AI and web development projects showcasing my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </main>
  )
}
