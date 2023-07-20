import './App.css';
//importamos los componentes
import ListaLibros from './componets/libros/lista_libros.js';
import EditLibro from './componets/libros/editar_libro.js';
import NavComponet from './componets/nav/nav.js';
//imortamos el router
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import RegistrarLibro from './componets/libros/registrar_libro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavComponet  />
        <Routes>
            <Route path='/' element={ <ListaLibros />} />
            <Route path='/edit_libro/:id' element={<EditLibro />} />
            <Route path='/create_registro/' element={<RegistrarLibro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
