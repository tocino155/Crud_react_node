import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const api_rest = "http://localhost:4000/libros";

const RegistrarLibro = () => {
    //creamos las variables donde recibiremos dichos datos
    const [titulo, setTitulo] = useState('');   
    const [trama, setTrama] = useState(''); 
    const [n_paginas,setPaginas] = useState('');
    //esta es para poder mandar o cargar diferentes rutas sin recargar la pagina.
    const navigate = useNavigate();
    var validar=false;
    //agregamos un proceso para crear al registro
    const create_libro = async (e)=>{
        e.preventDefault();

        //antes de enviar los datos verificamos que los datos esten correctos
        titulo!=="" ? validar=true : validar=false;
        n_paginas!=="" ? validar=true : validar=false; 

        if (validar===true) {
            await axios.post(api_rest,{titulo: titulo, trama: trama, n_paginas: n_paginas});
            navigate("/");
        }
        
    }

    return (
        <div>
            <div className="alert alert-dark">
                <h1>Crear Registro</h1>
            </div>
            <form onSubmit={create_libro}>

                <div className=" container ">
                    
                <div class="alert alert-success alert-dismissible" role="alert">   
                    <div>Nice, you triggered this alert message!</div>   
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

                    <div className="mb-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="text_1">Titulo</span>
                            <input type="text" value={titulo}
                            onChange={ (e)=> setTitulo(e.target.value)} 
                            className="form-control"
                            aria-describedby="text_1"
                            
                            placeholder="ingresa lo que deseas" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="text_2" >No. de paginas</span>
                            <input type="number" value={n_paginas}
                            onChange={ (e)=> setPaginas(e.target.value)} 
                            className="form-control" 
                            aria-describedby="text_2"
                             
                            placeholder="ingresa lo que deseas" />
                        </div>
                    </div>      
                    <div className="mb-3">
                        {/* con e.update.value, es con la que activamos el los datos, sin esto no te deja escribir  */}
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="text_3">Trama</span>
                            <textarea type="text" value={trama}
                            onChange={ (e)=> setTrama(e.target.value)} 
                            className="form-control"
                            aria-describedby="text_3"
                            placeholder="ingresa lo que deseas" />
                        </div>
                    </div>            
                    <button type="submit" className="btn btn-warning">actualizar</button>

                </div>

            </form>
        </div>
    )

}

export default RegistrarLibro;