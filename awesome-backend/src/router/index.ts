import express from 'express';
import awesomeRouter from './awesome.router';
import { HTTP_CODE, RESPONSE_TYPE } from '../constants';
const mainRouter = express.Router();

mainRouter.use('/awesome', awesomeRouter);
mainRouter.get(
    '/',
    async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        return res.status(HTTP_CODE.OK).json({
            status: RESPONSE_TYPE.SUCCESS,
            message: 'Server is live.',
        });
    },
);

export default mainRouter;
