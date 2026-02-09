import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        <p className="text-white text-2xl font-bold">{project.name}</p>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-gray-500 text-xs">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex gap-3">
          <Link 
            href={`/projects/${project.id}`}
            className="flex-1 bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition"
          >
            Voir détails
          </Link>
          
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}