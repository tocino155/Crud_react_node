import express, { json }  from "express";
import cors from "cors";
//importamos las rutas
import librosRutas from "./routes/librosRoutes.js";
const app = express();
//configuracion

//este es para poder recibir, mostrar datos desde otro lado.
app.use(cors({
    origin: "http://localhost:3000"
}));

//este es para poder poder procesar los datos mandados por el usuario
app.use(json());

//hacemos uso de las rutas
app.use(librosRutas);

//encendemos servidor
app.listen(4000);
console.log("servidor corriendo en el puerto ", 4000);