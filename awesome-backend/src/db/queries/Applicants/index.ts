import { InferModel, eq } from 'drizzle-orm';
import { Applicants } from '../../schema';
import db from '../../connection';
export type IApplicant = InferModel<typeof Applicants>;
export type INewApplicant = InferModel<typeof Applicants, 'insert'>;

export const getAllApplicants = async () => await db.select().from(Applicants);

export const getApplicantsByEmail = async (email: string) =>
    await db.select().from(Applicants).where(eq(Applicants.email, email));

export const createApplicant = async (newApplicant: INewApplicant) =>
    await db.insert(Applicants).values(newApplicant).returning({
        id: Applicants.id,
        name: Applicants.name,
        email: Applicants.email,
        address: Applicants.address,
        age: Applicants.age,
        mobileNumber: Applicants.mobileNumber,
    });

export const updateApplicantById = async (id: number, updatedApplicant: IApplicant) =>
    await db.update(Applicants).set(updatedApplicant).where(eq(Applicants.id, id)).returning({
        id: Applicants.id,
        name: Applicants.name,
        email: Applicants.email,
        address: Applicants.address,
        age: Applicants.age,
        mobileNumber: Applicants.mobileNumber,
    });

export const deleteApplicantById = async (id: number) =>
    await db.delete(Applicants).where(eq(Applicants.id, id)).returning({
        id: Applicants.id,
        name: Applicants.name,
        email: Applicants.email,
        address: Applicants.address,
        age: Applicants.age,
        mobileNumber: Applicants.mobileNumber,
    });
