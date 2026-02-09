'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProject() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    role: '',
    duration: '',
    github: '',
    demo: '',
    technologies: '',
    features: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Transformer les données
    const newProject = {
      id: Date.now(), // ID temporaire (en attendant la base de données)
      name: formData.name,
      description: formData.description,
      role: formData.role,
      duration: formData.duration,
      github: formData.github,
      demo: formData.demo || null,
      image: '/images/project-placeholder.png',
      technologies: formData.technologies.split(',').map(tech => tech.trim()),
      features: formData.features.split('\n').filter(f => f.trim() !== '')
    };

    // Pour l'instant, on affiche juste dans la console
    console.log('Nouveau projet :', newProject);

    // Simuler un délai d'envoi
    setTimeout(() => {
      setLoading(false);
      alert('Projet ajouté avec succès ! (Pour l\'instant juste en console)');
      router.push('/admin/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push('/admin/dashboard')}
            className="text-blue-600 hover:text-blue-800 flex items-center mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Retour au dashboard
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Ajouter un nouveau projet</h1>
          <p className="text-gray-600 mt-2">Remplissez les informations du projet</p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 space-y-6">
          {/* Nom du projet */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nom du projet *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="Ex: RedactionMemoir"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Décrivez votre projet..."
            />
          </div>

          {/* Rôle et Durée (2 colonnes) */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                Votre rôle *
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Ex: Développeuse Full Stack"
              />
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                Durée *
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Ex: 3 mois"
              />
            </div>
          </div>

          {/* GitHub et Démo (2 colonnes) */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-2">
                Lien GitHub *
              </label>
              <input
                type="url"
                id="github"
                name="github"
                value={formData.github}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="https://github.com/..."
              />
            </div>

            <div>
              <label htmlFor="demo" className="block text-sm font-medium text-gray-700 mb-2">
                Lien Démo (optionnel)
              </label>
              <input
                type="url"
                id="demo"
                name="demo"
                value={formData.demo}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="https://demo.com/..."
              />
            </div>
          </div>

          {/* Technologies */}
          <div>
            <label htmlFor="technologies" className="block text-sm font-medium text-gray-700 mb-2">
              Technologies utilisées *
            </label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="Node.js, React, MongoDB, Tailwind CSS (séparez par des virgules)"
            />
            <p className="text-sm text-gray-500 mt-1">
              Séparez chaque technologie par une virgule
            </p>
          </div>

          {/* Fonctionnalités */}
          <div>
            <label htmlFor="features" className="block text-sm font-medium text-gray-700 mb-2">
              Fonctionnalités principales *
            </label>
            <textarea
              id="features"
              name="features"
              value={formData.features}
              onChange={handleChange}
              required
              rows="8"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Une fonctionnalité par ligne :
Authentification des utilisateurs
CRUD complet
Système de notifications
..."
            />
            <p className="text-sm text-gray-500 mt-1">
              Une fonctionnalité par ligne
            </p>
          </div>

          {/* Boutons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => router.push('/admin/dashboard')}
              className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Ajout en cours...' : 'Ajouter le projet'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}