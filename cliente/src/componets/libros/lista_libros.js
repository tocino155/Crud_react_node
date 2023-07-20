import axios from "axios";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

//indicamos la url una vez para despues solo llamarla.
const api_rest = "http://localhost:4000/libros";

const ListaLibros= () =>{
    //perimite darle darle el estado de react a un componete.
    const [libros, setLibros] = useState([]);

    //creamos una funcion que se inicializa apenas se carga.
    useEffect(()=>{
        //esta es una funcion creada aqui mismo que usaremos para consultar la api que debuelve los registros.
        get_libros();
    },[]);
    //la funcion de igual manera que el el back-end es de tipo asincrona y tenermos que esperar respues.
    const get_libros= async ()=> {
        //aqui es donde recibimos los datos, el tipo de ruta debe de ser el mismo que el del api
        const res = await axios.get(api_rest);
        //ahora le damos el resultado a una variable "globa" para poder usarla en otro lado.
        setLibros(res.data);
    };

    //crearemos otra para eliminar un registro.
    const deleteLibro = async (id) => {
        await axios.delete(`${api_rest}/${id}`);
        //recargamos la lista de registros sin recargar la pagina, esto es para ver que si se elimine el registro
        get_libros();
    }
    return(
        <div>
            <div className="alert alert-dark">
                <h1>Lista de registros</h1>            
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead className="table-dark">
                                <tr>
                                    <th>Titulo</th>
                                    <th>Trama</th>
                                    <th>Numero de paginas</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*aahora imprimimos los datos mediante un metodo llamara map, es como foreach  */}
                                {
                                    libros.map((libro)=>(
                                        <tr key={libro.id}>
                                            <td>{libro.titulo}</td>
                                            <td>{libro.trama}</td>
                                            <td>{libro.n_paginas}</td>
                                            <td>
                                                <Link to={`/edit_libro/${libro.id}`} className="btn btn-primary btn-sm" style={{ marginBottom: "5px", }}>edit</Link>
                                                <button onClick={()=>deleteLibro(libro.id)} className="btn btn-danger btn-sm">delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaLibros;