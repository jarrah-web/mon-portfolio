export default function ExperienceCard({ experience }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
      {/* En-tête */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {experience.title}
          </h3>
          <p className="text-blue-600 font-semibold mb-1">
            {experience.company}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="flex items-center">
              📍 {experience.location}
            </span>
            <span className="flex items-center">
              📅 {experience.period}
            </span>
            <span className="flex items-center">
              💼 {experience.type}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4">
        {experience.description}
      </p>

      {/* Réalisations */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Réalisations :</h4>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-700">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Technologies :</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}