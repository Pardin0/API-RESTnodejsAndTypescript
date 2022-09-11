import { model, Schema } from 'mongoose';

const crocheSchema = new Schema(
    {
        title: { type: String },
        poster: { type: String },
        description: { type: String },
        size: { type: Number },
        deadline: { type: String },
        price: { type: Number },
    },
    {
        timestamps: true,
    }
);
export const CrocheModel = model('Croche', crocheSchema);
