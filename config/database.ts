import mongoose from 'mongoose';
import config from 'config';
import Logger from '../config/logger';

async function connect() {
    const db = config.get<string>('db');

    try {
        await mongoose.connect(db);
        Logger.info('A conecção ao banco de dados foi feita com sucesso!!');
    } catch (e) {
        Logger.error('A conecção falhou!');
        Logger.error(`Erro ${e}`);
        process.exit(1);
    }
}

export default connect;
