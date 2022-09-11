import { Request, Response } from 'express';

// Model - Modelos dos dados que ficarão no banco de dados
import { CrocheModel } from '../models/Costuras';

// Logger
import Logger from '../../config/logger';
import { createBrotliCompress } from 'zlib';

export async function createCroche(req: Request, res: Response) {
    const data = req.body;
    try {
        const croche = await CrocheModel.create(data);
        return res.status(201).json(croche);
    } catch (error: any) {
        Logger.error(`Ocorreu um erro no sistema: ${error.message}`);
        return res
            .status(500)
            .json({ error: 'Por favor, tente novamente dentro de 5 minutos.' });
    }
}

export async function findCrocheProductById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const croche = await CrocheModel.findById(id);

        if (!croche) {
            return res
                .status(404)
                .json({ error: 'Não há esse produto à venda.' });
        }
        return res.status(200).json(croche);
    } catch (error: any) {
        Logger.error(`Ocorreu um erro no sistema: ${error.message}`);
        return res
            .status(500)
            .json({ error: 'Por favor, tente novamente dentro de 5 minutos.' });
    }
}

export async function getAllCrocheProcuct(req: Request, res: Response) {
    try {
        const croche = await CrocheModel.find();
        return res.status(200).json(croche);
    } catch (error: any) {
        Logger.error(`Ocorreu um erro no sistema: ${error.message}`);
        return res
            .status(500)
            .json({ error: 'Por favor, tente novamente dentro de 5 minutos.' });
    }
}

export async function removeCroche(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const croche = await CrocheModel.findById(id);

        if (!croche) {
            return res.status(404).json({ error: 'Não há esse croche' });
        }

        await croche.delete();
        return res.status(200).json({ msg: 'Croche removido com sucesso! ' });
    } catch (error: any) {
        Logger.error(`Ocorreu um erro no sistema: ${error.message}`);
        return res
            .status(500)
            .json({ error: 'Por favor, tente novamente dentro de 5 minutos.' });
    }
}

export async function updateCroche(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const data = req.body;

        const croche = await CrocheModel.findById(id);

        if (!croche) {
            return res.status(404).json({ error: 'Não há esse croche' });
        }
        await CrocheModel.updateOne({ _id: id }, data);
        return res.status(200).json(data);
    } catch (error: any) {
        Logger.error(`Ocorreu um erro no sistema: ${error.message}`);
        return res
            .status(500)
            .json({ error: 'Por favor, tente novamente dentro de 5 minutos.' });
    }
}
