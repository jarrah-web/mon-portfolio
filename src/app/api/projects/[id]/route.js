import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET - Récupérer un projet par ID
export async function GET(request, { params }) {
  try {
    const projects = await query('SELECT * FROM projects WHERE id = $1', [params.id]);
    
    if (projects.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'Projet non trouvé' 
      }, { status: 404 });
    }
    
    const project = projects[0];
    
    // Formater les données
    const formattedProject = {
      ...project,
      technologies: project.technologies.split(','),
      features: project.features.split('\n').filter(f => f.trim() !== '')
    };
    
    return NextResponse.json({ 
      success: true, 
      data: formattedProject 
    }, { status: 200 });
    
  } catch (error) {
    console.error('Erreur GET /api/projects/[id]:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}

// PUT - Modifier un projet
export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    
    // Vérifier si le projet existe
    const existingProjects = await query('SELECT * FROM projects WHERE id = $1', [params.id]);
    
    if (existingProjects.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'Projet non trouvé' 
      }, { status: 404 });
    }
    
    // Préparer les données
    const technologies = Array.isArray(body.technologies) 
      ? body.technologies.join(',') 
      : body.technologies;
      
    const features = Array.isArray(body.features) 
      ? body.features.join('\n') 
      : body.features;
    
    // Mettre à jour le projet
    const result = await query(
      `UPDATE projects 
       SET name = $1, description = $2, role = $3, duration = $4, 
           github = $5, demo = $6, image = $7, technologies = $8, features = $9,
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $10
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
        features,
        params.id
      ]
    );
    
    const updatedProject = result[0];
    
    return NextResponse.json({ 
      success: true, 
      data: {
        ...updatedProject,
        technologies: updatedProject.technologies.split(','),
        features: updatedProject.features.split('\n')
      }
    }, { status: 200 });
    
  } catch (error) {
    console.error('Erreur PUT /api/projects/[id]:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}

// DELETE - Supprimer un projet
export async function DELETE(request, { params }) {
  try {
    // Vérifier si le projet existe
    const existingProjects = await query('SELECT * FROM projects WHERE id = $1', [params.id]);
    
    if (existingProjects.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'Projet non trouvé' 
      }, { status: 404 });
    }
    
    // Supprimer le projet
    await query('DELETE FROM projects WHERE id = $1', [params.id]);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Projet supprimé avec succès' 
    }, { status: 200 });
    
  } catch (error) {
    console.error('Erreur DELETE /api/projects/[id]:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}