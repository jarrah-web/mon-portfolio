import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Globe } from "lucide-react"
import { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm text-card-foreground shadow-lg transition-all hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 overflow-hidden flex flex-col h-full">
      {/* Gradient overlay sur hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 -z-10" />
      
      <div className="relative w-full aspect-video overflow-hidden bg-muted">
        <Image
          src={project.image || "/placeholder.svg"} 
          alt={project.name}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
        {/* Overlay avec dégradé */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-xl sm:text-2xl font-bold leading-tight tracking-tight mb-3 group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-1 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech} 
              className="inline-flex items-center rounded-lg border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary transition-all hover:bg-secondary/20 hover:border-secondary/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
             <span className="inline-flex items-center rounded-lg border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
               +{project.technologies.length - 3}
             </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-auto pt-4 border-t border-border/50">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors group/link"
          >
            Voir détails
            <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
          
          <div className="flex gap-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
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
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted/50 text-muted-foreground hover:bg-accent/10 hover:text-accent transition-all hover:scale-110"
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
