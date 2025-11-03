import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  slug: string
  title: string
  description: string
  image: string
}

export default function ProjectCard({ slug, title, description, image }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="group cursor-pointer rounded-lg overflow-hidden bg-card border border-purple-500/30 hover:border-purple-500/60 transition-all hover:shadow-lg hover:shadow-purple-500/20">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2 group-hover:text-purple-400 transition">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Link>
  )
}
