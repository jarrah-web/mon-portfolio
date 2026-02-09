export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          À propos de moi
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Qui suis-je ?</h2>
          <p className="text-gray-700 mb-6">
            Je suis une développeuse Full Stack passionnée par la création dapplications web modernes et performantes.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Mes compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold">Frontend</h3>
              <p className="text-sm text-gray-600">React, Next.js, Tailwind CSS</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-semibold">Backend</h3>
              <p className="text-sm text-gray-600">Node.js, Laravel, PHP</p>
            </div>
            <div className="bg-purple-50 p-4 rounded">
              <h3 className="font-semibold">Base de données</h3>
              <p className="text-sm text-gray-600">MySQL, MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}