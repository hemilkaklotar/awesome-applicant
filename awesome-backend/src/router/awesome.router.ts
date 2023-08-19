import { HTTP_CODE, RESPONSE_TYPE } from '../constants';
import {
    deleteApplicant,
    getApplicant,
    getDefaultApplicant,
    updateApplicant,
    insertApplicant,
    getApplicants,
} from 'controllers/Applicants';

import express from 'express';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    return res.status(HTTP_CODE.OK).json({
        status: RESPONSE_TYPE.SUCCESS,
        message: 'Awesome route is live',
    });
});

router.get('/applicant', getDefaultApplicant);
router.get('/applicant/all', getApplicants);
router.get('/applicant/:email', getApplicant);
router.patch('/applicant', updateApplicant);
router.delete('/applicant/:email', deleteApplicant);
router.post('/applicant', insertApplicant);

export default router;
