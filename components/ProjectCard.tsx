import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Globe } from "lucide-react"
import { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"} 
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
          {project.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
             <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground">
               +{project.technologies.length - 4}
             </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Voir détails
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          
          <div className="flex gap-2">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Code"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Live Demo"
              >
                <Globe className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
