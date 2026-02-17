export interface Skill {
    name: string;
    level: number;
    icon: string;
}

export interface Education {
    id: number;
    degree: string;
    school: string;
    location: string;
    period: string;
    status: string;
    description: string;
    highlights: string[];
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    period: string;
    type: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

export const personalData = {
    about: {
        title: "À propos de moi",
        description: "Passionnée par le développement web et l'ingénierie logicielle, je suis une développeuse Full Stack en formation. J'aime créer des solutions innovantes et résoudre des problèmes complexes.",
        name: "Jarrah", // Placeholder if I don't have the real name, will use generic
        role: "Développeuse Full Stack",
        subtext: "Spécialisée en Node.js, Laravel et React/Next.js"
    },
    skills: {
        frontend: [
            { name: 'React', level: 50, icon: '⚛️' },
            { name: 'Next.js', level: 65, icon: '▲' },
            { name: 'Tailwind CSS', level: 80, icon: '🎨' },
            { name: 'HTML/CSS', level: 95, icon: '📄' },
            { name: 'JavaScript', level: 45, icon: '📜' }
        ] as Skill[],
        backend: [
            { name: 'Node.js', level: 80, icon: '🟢' },
            { name: 'Laravel', level: 75, icon: '🔴' },
            { name: 'PHP', level: 75, icon: '🐘' },
            { name: 'Express.js', level: 70, icon: '🚂' }
        ] as Skill[],
        database: [
            { name: 'MySQL', level: 85, icon: '🐬' },
            { name: 'PostgreSQL', level: 75, icon: '🐘' },
            { name: 'MongoDB', level: 70, icon: '🍃' }
        ] as Skill[],
        tools: [
            { name: 'Git/GitHub', level: 85, icon: '🔧' },
            { name: 'VS Code', level: 90, icon: '💻' },
            { name: 'XAMPP', level: 80, icon: '📦' },
            { name: 'Postman', level: 75, icon: '📮' }
        ] as Skill[]
    },
    education: [
        {
            id: 1,
            degree: 'Bachelor en Informatique',
            school: 'Ecole Supérieure Polytechnique de Dakar (EPF Afrca)',
            location: 'Dakar, Sénégal',
            period: '2025 - 2026',
            status: 'En cours',
            description: 'Spécialisation en développement web et génie logiciel',
            highlights: [
                'Développement Full Stack (Frontend & Backend)',
                'Bases de données relationnelles ,non relationnelles et objets',
                'Gestion de projets agile',
                'Architecture logicielle'
            ]
        },
        {
            id: 2,
            degree: 'Certifications & Formations',
            school: 'Formations en ligne',
            location: 'En ligne',
            period: '2025 - 2026',
            status: 'Continu',
            description: 'Formations complémentaires en développement web',
            highlights: [
                'React et Next.js avancé',
                'Laravel et PHP',
                'PostgreSQL et MySQL',
                'Git et GitHub'
            ]
        }
    ] as Education[],
    experiences: [
        {
            id: 1,
            title: 'Développeuse Full Stack',
            company: 'Projet RedactionMemoir',
            location: 'Dakar, Sénégal',
            period: '3 mois',
            type: 'Projet académique',
            description: 'Développement d\'une plateforme complète de gestion de mémoires universitaires avec système d\'encadrement et validation.',
            achievements: [
                'Conception et développement de l\'architecture complète',
                'Implémentation du système d\'authentification et gestion des rôles',
                'Création du module de suivi d\'avancement des mémoires',
                'Mise en place du système de validation par jury'
            ],
            technologies: ['Node.js', 'XAMPP', 'Tailwind CSS', 'MySQL']
        },
        {
            id: 2,
            title: 'Développeuse Backend',
            company: 'Projet Gestion des Tâches',
            location: 'Dakar, Sénégal',
            period: '1 semaine',
            type: 'Projet personnel',
            description: 'Développement d\'une application de gestion de tâches avec système d\'authentification complet.',
            achievements: [
                'Développement de l\'API REST avec Laravel',
                'Implémentation de l\'authentification sécurisée',
                'Création du système de récupération de mot de passe',
                'CRUD complet des tâches avec protection des routes'
            ],
            technologies: ['Laravel', 'PHP', 'MySQL', 'CSS']
        }
    ] as Experience[]
};
