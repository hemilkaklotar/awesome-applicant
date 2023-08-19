import express from 'express';
import {
    deleteApplicantById,
    getAllApplicants,
    getApplicantsByEmail,
    updateApplicantById,
    createApplicant,
} from '../../db/queries/Applicants';
import { HTTP_CODE, RESPONSE_TYPE } from '../../constants';

export const getDefaultApplicant = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const applicants = await getApplicantsByEmail('hemilkaklotar@gmail.com');
        if (applicants.length <= 0) {
            return res.status(HTTP_CODE.BAD_REQUEST).json({
                status: RESPONSE_TYPE.ERROR,
                message: 'No Data found',
                data: {},
            });
        }
        return res.status(HTTP_CODE.OK).json({
            status: RESPONSE_TYPE.SUCCESS,
            message: 'data fetched successfully',
            data: applicants[0] || {},
        });
    } catch (e) {
        console.log(e);
        return next(
            res.sendStatus(HTTP_CODE.BAD_REQUEST).json({
                message: 'something went wrong',
            }),
        );
    }
};

export const getApplicants = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const applicants = await getAllApplicants();
        console.log('🚀 ~ file: index.ts:47 ~ applicants:', applicants);
        if (applicants.length <= 0) {
            return res.status(HTTP_CODE.BAD_REQUEST).json({
                status: RESPONSE_TYPE.ERROR,
                message: 'No Data found',
                data: {},
            });
        }
        return res.status(HTTP_CODE.OK).json({
            status: RESPONSE_TYPE.SUCCESS,
            message: 'data fetched successfully',
            data: applicants,
        });
    } catch (e) {
        console.log(e);
        return next(
            res.sendStatus(HTTP_CODE.BAD_REQUEST).json({
                status: RESPONSE_TYPE.ERROR,
                message: 'something went wrong',
            }),
        );
    }
};

export const getApplicant = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const { email = '' } = req.params;
        if (!email) {
            return res.status(HTTP_CODE.BAD_REQUEST).json({
                status: RESPONSE_TYPE.ERROR,
                message: 'Bad request: "email" is missing from params',
            });
        }
        const applicants = await getApplicantsByEmail(email);
        if (applicants.length <= 0) {
            return res.status(HTTP_CODE.BAD_REQUEST).json({
                status: RESPONSE_TYPE.ERROR,
                message: 'No Data found',
                data: {},
            });
        }
        return res.status(HTTP_CODE.OK).json({
            status: RESPONSE_TYPE.SUCCESS,
            message: 'data fetched successfully',
            data: applicants,
        });
    } catch (e) {
        console.log(e);
        return next(
            res.sendStatus(HTTP_CODE.BAD_REQUEST).json({
                status: RESPONSE_TYPE.ERROR,
                message: 'something went wrong while fetching the data',
            }),
        );
    }
};

export const updateApplicant = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        let requestBody = req.body;
        const { email = '' } = requestBody;
        if (!email) {
            return res.status(HTTP_CODE.BAD_REQUEST).json({
                status: RESPONSE_TYPE.ERROR,
                message: 'Bad request: "email" is missing from body',
            });
        }
        const applicants = await getApplicantsByEmail(email);
        if (applicants.length <= 0) {
            return res.status(HTTP_CODE.BAD_REQUEST).json({
                status: RESPONSE_TYPE.ERROR,
                message: 'No Data found',
                data: {},
            });
        }

        const updatedApplicant = await updateApplicantById(applicants[0].id, requestBody);

        return res.status(HTTP_CODE.OK).json({
            status: RESPONSE_TYPE.SUCCESS,
            message: 'Applicant data updated successfully',
            data: updatedApplicant,
        });
    } catch (e) {
        console.log(e);
        return next(
            res.sendStatus(HTTP_CODE.BAD_REQUEST).json({
                status: RESPONSE_TYPE.ERROR,
                message: 'something went wrong while updating the data',
            }),
        );
    }
};

export const deleteApplicant = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const { email = '' } = req.params;
        if (!email) {
            return res.status(HTTP_CODE.BAD_REQUEST).json({
                message: 'Bad request: "email" is missing from body',
            });
        }
        const applicants = await getApplicantsByEmail(email);
        if (applicants.length <= 0) {
            return res.status(HTTP_CODE.BAD_REQUEST).json({
                message: 'No Data found',
                data: {},
            });
        }

        const deletedApplicant = await deleteApplicantById(applicants[0].id);

        return res.status(HTTP_CODE.OK).json({
            message: 'Applicant data deleted successfully',
            data: { id: deletedApplicant[0].id },
        });
    } catch (e) {
        console.log(e);
        return next(
            res.sendStatus(HTTP_CODE.BAD_REQUEST).json({
                error: 'something went wrong while deleting the data',
            }),
        );
    }
};

export const insertApplicant = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        let requestBody = req.body;
        const { email = '' } = requestBody;
        if (!email) {
            return res.status(HTTP_CODE.BAD_REQUEST).json({
                status: RESPONSE_TYPE.ERROR,
                message: 'Bad request: "email" is missing from body',
            });
        }
        const applicants = await getApplicantsByEmail(email);
        if (applicants.length > 0) {
            return res.status(HTTP_CODE.BAD_REQUEST).json({
                status: RESPONSE_TYPE.ERROR,
                message: 'Applicant already exists!',
                data: {},
            });
        }

        const insertedApplicant = await createApplicant(requestBody);

        return res.status(HTTP_CODE.OK).json({
            status: RESPONSE_TYPE.SUCCESS,
            message: 'Applicant data updated successfully',
            data: insertedApplicant,
        });
    } catch (e) {
        console.log(e);
        return next(
            res.sendStatus(HTTP_CODE.BAD_REQUEST).json({
                status: RESPONSE_TYPE.ERROR,
                message: 'something went wrong while updating the data',
            }),
        );
    }
};
