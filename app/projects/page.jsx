import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez mes réalisations en développement web
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}