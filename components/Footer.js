export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; 2026 Mon Portfolio. Tous droits réservés.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/jarrah-web" target="_blank" rel="noopener noreferrer" 
             className="hover:text-blue-400">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}