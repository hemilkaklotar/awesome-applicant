import insertApplicants from './insert_default_applicants';

export default async () => {
    // insert the seeders here
    const seeder = [insertApplicants()];
    Promise.all(seeder)
        .then(() => {
            console.log('Seeder ran successfully');
        })
        .catch(err => {
            console.log('Error Occured while running seeder ::', err);
        });
};
