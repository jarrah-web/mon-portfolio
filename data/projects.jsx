export const projects = [
  {
    id: 1,
    name: "RedactionMemoir",
    description: "Application de gestion de mémoires pour étudiants permettant le dépôt, l'encadrement et la validation des mémoires universitaires",
    technologies: ["Node.js", "XAMPP", "Tailwind CSS", "MySQL"],
    role: "Développeuse Full Stack",
    duration: "3 mois",
    github: "https://github.com/jarrah-web/gestion_etudiant",
    demo: null,
    image: "/images/redaction-memoir.png",
    features: [
      "Déposer une version de mémoire",
      "Demander un encadreur",
      "Consulter avancement mémoire",
      "Planifier séances d'encadrement",
      "Consulter bibliothèque des mémoires",
      "Valider sujet et soutenance",
      "Composer jury",
      "Gérer archivage"
    ]
  },
  {
    id: 2,
    name: "Module de gestion des tâches",
    description: "Application de to-do list personnelle avec système d'authentification complet",
    technologies: ["Laravel", "CSS", "MySQL"],
    role: "Développeuse de l'application",
    duration: "1 semaine",
    github: "https://github.com/jarrah-web/projetEber",
    demo: null,
    image: "/images/gestion-taches.png",
    features: [
      "Inscription et connexion",
      "Récupération mot de passe par email",
      "Protection des routes",
      "CRUD complet des tâches",
      "Marquage tâches terminées",
      "Liste personnelle de tâches"
    ]
  }
];