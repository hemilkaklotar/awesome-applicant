CREATE TABLE IF NOT EXISTS "applicants" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"address" text,
	"age" integer DEFAULT 0,
	"mobileNumber" text,
	"gender" text,
	"createdAt" timestamp DEFAULT now(),
	CONSTRAINT "applicants_email_unique" UNIQUE("email")
);
