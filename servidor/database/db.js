import {createPool} from 'mysql2/promise';

//se crea o se hace la coneccion mediante createPool, es mejor que createConnection
export const pool = createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345678",
    database: "sistema_2"
});