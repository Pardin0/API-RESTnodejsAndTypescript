import { Router, Request, Response } from 'express';
import {
    createCroche,
    findCrocheProductById,
    getAllCrocheProcuct,
    removeCroche,
    updateCroche,
} from './controllers/crocheControllers';

import { validate } from './middleware/handleValidation';
import { productCreatValidation } from './middleware/productCrocheValidation';

const router = Router();

export default router
    .get('/test', (req: Request, res: Response) => {
        res.status(200).send('API Funcionando!');
    })
    .post('/croche', productCreatValidation(), validate, createCroche)
    .get('/croche/:id', findCrocheProductById)
    .get('/croche', getAllCrocheProcuct)
    .delete('/croche/:id', removeCroche)
    .patch('/croche/:id', productCreatValidation(), validate, updateCroche);
