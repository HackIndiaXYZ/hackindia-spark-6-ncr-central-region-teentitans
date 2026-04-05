import pg from 'pg'
import { ENV } from './env.js'

const { Pool } = pg

const pool = new Pool({
  connectionString: ENV.DATABASE_URL,
  ssl: ENV.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
})

pool.on('connect', () => {
  console.log('✅ PostgreSQL connected')
})

pool.on('error', (err) => {
  console.error('❌ PostgreSQL error:', err)
})

export default pool
