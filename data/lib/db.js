import { Pool } from 'pg';

// Configuration de la connexion PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Fonction pour exécuter des requêtes
export async function query(text, params) {
  try {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Requête exécutée', { text, duration, rows: res.rowCount });
    return res.rows;
  } catch (error) {
    console.error('Erreur de base de données:', error);
    throw error;
  }
}

// Tester la connexion
export async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Connexion PostgreSQL réussie !', result.rows[0]);
    return true;
  } catch (error) {
    console.error('❌ Erreur de connexion PostgreSQL:', error.message);
    return false;
  }
}

// Fermer le pool (utile pour les tests)
export async function closePool() {
  await pool.end();
}