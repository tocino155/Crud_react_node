import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const api_rest = "http://localhost:4000/libros";

const EditLibro = () => {
    //creamos las variables donde recibiremos dichos datos
    const [titulo, setTitulo] = useState('');   
    const [trama, setTrama] = useState(''); 
    const [n_paginas,setPaginas] = useState('');
    //esta es para poder mandar o cargar diferentes rutas sin recargar la pagina.
    const navigate = useNavigate();
    //hacemos uso de params para optener el id enviado por la ruta.
    const {id} = useParams();

    //procedimiento para actualizar
    const update = async (e) => {
        //este es para evitar que se recargue la pagina con el submint
        e.preventDefault();
        //al hacer la peticion le pasamos la ruta mas el id, esto con el de saber a que registro sera editado.
        await axios.put(api_rest+"/"+id, {
            //aqui declaramos la variables que espera recibir el back-end, con el dato que envia el usuario.
            titulo: titulo,
            trama: trama,
            n_paginas: n_paginas
        })
        //una vez agregado el registro mandamos al usuario a la vista de los registros
        navigate('/')
    }
    //cuando se cargue este componente ejecutamos la funcion donde obtenemos los datos del registro a editar.
    useEffect( ()=>{
        get_libro();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const get_libro = async () => { 
        const res = await axios.get(api_rest+"/"+id);
        //desglosamos los datos recibos, esto con el fin de mostralos en el formulario
        setTitulo(res.data.titulo);
        setTrama(res.data.trama);
        setPaginas(res.data.n_paginas);
        
    }

    return (
        <div>
            <div className="alert alert-dark">
                <h1>Editar Registro</h1>
            </div>
            <form onSubmit={update}>
                <div className=" container ">

                    <div className="mb-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="text_1">Titulo</span>
                            <input type="text" value={titulo}
                            onChange={ (e)=> setTitulo(e.target.value)} 
                            className="form-control"
                            aria-describedby="text_1"
                            required
                            placeholder="ingresa lo que deseas" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="text_2" >No. de paginas</span>
                            <input type="number" value={n_paginas}
                            onChange={ (e)=> setPaginas(e.target.value)} 
                            className="form-control"
                            required
                            placeholder="ingresa lo que deseas" />
                        </div>
                    </div>      
                    <div className="mb-3">
                        {/* con e.update.value, es con la que activamos el los datos, sin esto no te deja escribir  */}
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="text_1">Trama</span>
                            <textarea type="text" value={trama}
                            onChange={ (e)=> setTrama(e.target.value)} 
                            className="form-control" 
                            placeholder="ingresa lo que deseas" />
                        </div>
                    </div>            
                    <button type="submit" className="btn btn-warning">actualizar</button>

                </div>
                
            </form>
        </div>
    )

}

export default EditLibro;