// aqui es donde se crean todas las fuciones que requieran las rutas.

//importamos la base de datos recordemos que los modulos creados por nosotros, se les debe de agregar .js
import {pool} from '../database/db.js'

// las funciones seran asincronas ya que se trata de esperar los datos, recibidos o enviados.


//funcion de consultar todos los registros de una tabla.

export const getLibros = async (req,res)=> {
    //agregaremos todo en un try catch, para validar si existe algun error.
    try {
        //consultamos los datos, recordemos que con await esperamos que termine.
        // la consulta retorna un arreglo, entonces lo recibimos [result].
        const [result] = await pool.query("SELECT * FROM libros ORDER BY create_at ASC");

        //retornamos el arreglo
        res.json(result);
    } catch (error) {
        //si existe algun error ya sea en el servidor o la forma en la que se ojecuto la api, mandamos error.
        return res.status(500).json({"mensaje": error.message});
    }
    
}


//obtener una sola consulta.

export const getLibro = async (req,res)=> {
    try {
        //para acceder a los parametros enviados por la ruta se utiliza req.params.id
        // necesitamos el id para buscar en vase a eso.
        const [result] = await pool.query("SELECT * FROM libros WHERE id= ?",[req.params.id]);
        
        if(result.length===0){
            return res.status(404).json({mensaje: "libro no existente"});
        }else{
            //retornamos el dato, indicando que esta en la posicion 0, para que solo retorne los datos y no un arreglo.
            res.json(result[0]);
        }
    } catch (error) {
        return res.status(500).json({"mensaje": error.message});
    }
}

//insertando un registro a la tabla de libros

export const insertLibro = async (req,res)=> {
    try {
        //pasamos a variables los datos recibidos por el post
        const {titulo, n_paginas, trama} = req.body;
        //ahora estos datos los insertaremos en la base de datos
        const [result] = await pool.query('INSERT INTO libros(titulo,n_paginas,trama) VALUE (?,?,?)', [titulo,n_paginas,trama]);
        res.json({
            id: result.insertId,
            titulo
        });
    } catch (error) {
        return res.status(500).json({"mensaje": error.message});
    }
}

//actualizar registro.

export const updateLibro = async (req,res) => {
    try {
        
        //podemos recibir los datos o pasarlos directamene a la consulta.
        const [result] = await pool.query("UPDATE libros SET ? WHERE id = ?",[req.body, req.params.id]);
        if(result===0){
            return res.status(404).json({"mensaje" : "el registro ya no existe"});
        }else{
            return res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({"mensaje" : error.message});
    }
}


//eliminar registro.

export const deleteLibro = async (req, res)=> {
    try {
        const [result] = await pool.query("DELETE FROM libros WHERE id= ?", [req.params.id]);
        //validamos si se elimino con el if que se viene manejando, pero usaremos un dato que indica si fue afectado un registro o no
        if(result.affectedRows===0){
            return res.status(404).json({"mensaje" : "el registro que intentas eliminar ya no existe"});
        }else{
            return res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({"mensaje" : error.message});
    }
}