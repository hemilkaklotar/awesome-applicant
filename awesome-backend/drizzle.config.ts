import type { Config } from 'drizzle-kit';
import 'dotenv/config';

export default {
    schema: './src/db/schema/*.ts',
    out: './drizzle',
    driver: 'pg',
    dbCredentials: {
        host: process.env.PG_HOST || 'localhost',
        user: process.env.PG_USER || 'postgres',
        database: process.env.PG_DATABASE || 'aweapp',
        password: process.env.PG_PASSWORD || 'password',
        port: typeof process.env.PG_PORT == 'undefined' ? 5432 : +process.env.PG_PORT,
    },
} satisfies Config;


