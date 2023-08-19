import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import 'dotenv/config';

const client = postgres({
    host: process.env.PG_HOST || 'localhost',
    user: process.env.PG_USER || 'postgres',
    database: process.env.PG_DATABASE || 'aweapp',
    password: process.env.PG_PASSWORD || 'password',
    port: typeof process.env.PG_PORT == 'undefined' ? 5432 : +process.env.PG_PORT,
});
const db: PostgresJsDatabase = drizzle(client);

export default db;
