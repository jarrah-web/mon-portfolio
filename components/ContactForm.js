'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // 'success', 'error', ou ''

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simulation d'envoi (pour l'instant)
    console.log('Données du formulaire :', formData);
    
    // Simuler un délai d'envoi
    setStatus('sending');
    
    setTimeout(() => {
      setStatus('success');
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Effacer le message de succès après 5 secondes
      setTimeout(() => setStatus(''), 5000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nom */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Nom complet *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          placeholder="Votre nom"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          placeholder="votre.email@exemple.com"
        />
      </div>

      {/* Sujet */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Sujet *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          placeholder="Opportunité de collaboration"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
          placeholder="Votre message..."
        />
      </div>

      {/* Bouton d'envoi */}
      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
      </div>

      {/* Messages de statut */}
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          ✅ Votre message a été envoyé avec succès ! Je vous répondrai bientôt.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          ❌ Une erreur est survenue. Veuillez réessayer.
        </div>
      )}
    </form>
  );
}