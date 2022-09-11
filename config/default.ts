const dbUsuario = process.env.DB_USUARIO;
const dbPassword = process.env.DB_PASSWORD;

export default {
    port: 8080,
    db: `mongodb+srv://${dbUsuario}:${dbPassword}@cluster0.unsv4rw.mongodb.net/?retryWrites=true&w=majority`,
    env: 'development',
};
