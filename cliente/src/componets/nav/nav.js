import { useState } from "react";
import { Link } from "react-router-dom";

const NavComponet = ()=>{
    const [titulo_area, setTitulo_area] =useState("Lista de Registros");
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <label style={{margin: "10px", fontWeight: "bold"}}>{titulo_area}</label>
                <button id="menu_c" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link  remarcar"  to={"/"} onClick={()=> setTitulo_area("Lista de registros")}>Lista</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link remarcar" to={"/create_registro"} onClick={()=> setTitulo_area("Registrar")}>Crear Registro</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

    );
}

export default NavComponet;