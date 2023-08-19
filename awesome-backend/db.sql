CREATE TABLE applicants (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    address TEXT,
    age INTEGER,
    mobileNumber TEXT,
    gender TEXT,
    createdAt TIMESTAMP 
);