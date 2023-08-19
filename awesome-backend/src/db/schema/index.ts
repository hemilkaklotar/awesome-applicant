import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const Applicants = pgTable('applicants', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    address: text('address'),
    age: integer('age').default(0),
    mobileNumber: text('mobileNumber'),
    gender: text('gender'),
    createdAt: timestamp('createdAt', {
        mode: 'string',
    }).defaultNow(),
});
