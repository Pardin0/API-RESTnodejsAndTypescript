require('dotenv').config(); // Necessário para conseguir pegar o usuário e senha
import express from 'express';
import config from 'config';

const app = express();
const bp = require('body-parser');
// DataBase
import db from '../config/database';

//Logger
import Logger from '../config/logger';
// Routes
import router from './router';
//Middleware
import MorganMiddleware from './middleware/morganMiddle';

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(MorganMiddleware);
app.use('/api/', router);

//  JSON MIDDLEWARE
const port = config.get<number>('port');

app.listen(port, async () => {
    await db();
    Logger.info(`App funcionando na porta - ${port}.`);
});
