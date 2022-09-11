import { body } from 'express-validator';

export const productCreatValidation = () => {
    return [
        body('title')
            .isString()
            .withMessage('O nome do produto é obrigatório')
            .isLength({ min: 3 })
            .withMessage('O nome deve ter no mínimo 7 letras'),

        body('poster')
            .isURL()
            .withMessage('É preciso adcionar uma URL do produto'),

        body('description')
            .isString()
            .withMessage('A descrição do produto é obrigatório'),

        body('size').isString().withMessage('O tamanho é obrigatório'),

        body('deadline')
            .isString()
            .withMessage('O prazo de entrega é obrigatório'),

        body('price')
            .isNumeric()
            .withMessage('O preço do produto é obrigatório'),
    ];
};
