import { migrate } from 'drizzle-orm/postgres-js/migrator';
import db from './src/db/connection';
import { Applicants } from 'db/schema';

const main = async () => {
    console.log('Migrating...');

    // await db.delete(Applicants);

    await migrate(db, {
        migrationsFolder: 'drizzle',
    });

    console.log('Migration complete.');
};

main();
