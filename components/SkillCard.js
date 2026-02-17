export default function SkillCard({ name, level, icon }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <h3 className="font-semibold text-gray-900">{name}</h3>
        </div>
        <span className="text-blue-600 font-bold">{level}%</span>
      </div>
      
      {/* Barre de progression */}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}