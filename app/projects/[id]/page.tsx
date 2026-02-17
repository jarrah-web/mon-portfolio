import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, Globe, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Retour aux projets
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Project Image */}
        <div className="relative aspect-video rounded-xl overflow-hidden border shadow-lg">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Summary Info */}
        <div className="flex flex-col h-full justify-center">
          <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
          <p className="text-xl text-primary font-medium mb-6">{project.role} | {project.duration}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Github className="mr-2 h-5 w-5" />
                Code Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Globe className="mr-2 h-5 w-5" />
                Voir le site
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Full Description & Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Description du Projet</h2>
            <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.description}
            </div>
            {/* If we had more long-form content we would put it here. Currently using 'description' from data */}
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Fonctionnalités Clés</h2>
            <ul className="space-y-4">
                {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </main>
  );
}
