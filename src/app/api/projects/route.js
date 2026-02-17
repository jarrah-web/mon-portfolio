import { NextResponse } from 'next/server';

// Import relatif au lieu de @/lib/db
import { query } from '../../../lib/db.js';

export async function GET() {
  try {
    console.log('🔵 Connexion à PostgreSQL...');
    
    const projects = await query('SELECT * FROM projects ORDER BY created_at DESC');
    
    console.log('✅ Projets récupérés:', projects.length);
    
    const formattedProjects = projects.map(project => ({
      id: project.id,
      name: project.name,
      description: project.description,
      role: project.role,
      duration: project.duration,
      github: project.github,
      demo: project.demo,
      image: project.image,
      technologies: project.technologies ? project.technologies.split(',') : [],
      features: project.features ? project.features.split('\n').filter(f => f.trim() !== '') : []
    }));
    
    return NextResponse.json({ 
      success: true, 
      data: formattedProjects 
    });
    
  } catch (error) {
    console.error('❌ Erreur:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message
    }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    console.log('🔵 Création projet:', body.name);
    
    const technologies = Array.isArray(body.technologies) 
      ? body.technologies.join(',') 
      : body.technologies;
      
    const features = Array.isArray(body.features) 
      ? body.features.join('\n') 
      : body.features;
    
    const result = await query(
      `INSERT INTO projects (name, description, role, duration, github, demo, image, technologies, features) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [
        body.name,
        body.description,
        body.role,
        body.duration,
        body.github,
        body.demo || null,
        body.image || '/images/project-placeholder.png',
        technologies,
        features
      ]
    );
    
    console.log('✅ Projet créé avec ID:', result[0].id);
    
    const newProject = result[0];
    
    return NextResponse.json({ 
      success: true, 
      data: {
        ...newProject,
        technologies: newProject.technologies.split(','),
        features: newProject.features.split('\n')
      }
    }, { status: 201 });
    
  } catch (error) {
    console.error('❌ Erreur création:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}