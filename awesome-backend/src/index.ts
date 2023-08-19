import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import 'dotenv/config';
import router from './router';
import logger from 'morgan';
const app = express();
import helmet from 'helmet';
import hpp from 'hpp';
import seeders from 'db/seeders';

if (process.env.APP_ENV === 'dev') {
    app.use(logger('dev'));
} else {
    app.use(logger('tiny'));
}

app.use(cors({ credentials: true }));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(compression());
app.use(cookieParser());
app.use(express.json({}));
app.use(express.urlencoded());

app.use(helmet());

app.use(hpp());

app.use('/', router);

seeders();

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
