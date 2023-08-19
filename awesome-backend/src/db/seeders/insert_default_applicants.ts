import { applicants as applicantsData } from '../../assets/data.json';
import { Applicants } from 'db/schema';
import db from '../connection';
import { eq } from 'drizzle-orm';
export default async () => {
    let insertedApplicantIds = [];
    for (let appIndex = 0; appIndex < applicantsData.length; appIndex++) {
        const applicant = applicantsData[appIndex];
        const isApplicantExist = await db
            .select()
            .from(Applicants)
            .where(eq(Applicants.email, applicant.email));
        let applicantId: number;
        if (isApplicantExist.length > 0) {
            applicantId = isApplicantExist[0].id;
        } else {
            const insertedData = await db
                .insert(Applicants)
                .values(applicant)
                .returning({ id: Applicants.id });

            applicantId = insertedData[0].id;
        }
        insertedApplicantIds.push(applicantId);
    }
    // console.log('🚀 ~ file: insert_default_applicants.ts:10 ~ insertedData:', insertedApplicantIds);
};
