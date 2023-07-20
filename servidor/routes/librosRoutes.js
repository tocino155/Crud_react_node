//importamos las funcines creadas en el controlador para poder activarlas mediente la url o API

import { Router } from "express";
import { deleteLibro, getLibro, getLibros, insertLibro, updateLibro } from "../controllers/librosControllers.js";

const router = Router();

//aqui el truco esta en el metodo usado en cada ruta, asi evitamos crear o cambiar el dominio.
//ruta para obtener los registros.
router.get("/libros",getLibros);

//ruta para obtener un solo registro de la tabla libros.
router.get("/libros/:id", getLibro);

//ruta para insertar un registro
router.post("/libros", insertLibro);

//ruta para editar un registro de la tabla libros.
router.put("/libros/:id", updateLibro);

//ruuta para eliminar un registro de la tabla.
router.delete("/libros/:id", deleteLibro);

export default router;