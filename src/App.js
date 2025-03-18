//Set-ExecutionPolicy Unrestricted -Scope Process
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './componentes/login/login.jsx';
import Inicio from './componentes/login/pagina-inicio.jsx';
import Modal from './componentes/login/modal.jsx'; // Importa tu modal
import Recuperar from './componentes/login/olvide-contrasenia.jsx'
import VerificarEmail from './componentes/login/verificar-email.jsx';
import EditarPerfil from './componentes/login/editar-perfil.jsx';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Página de Inicio */}
        <Route path="/" element={<Inicio />} />

        {/* Página de Login con Modal */}
        <Route path="/login" element={
          <div>
            <Login openModal={() => setModalOpen(true)} />
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
          </div>
        } />

        <Route path="/recuperar" element={<Recuperar />} />

        <Route path="/verificar-email" element={<VerificarEmail />} />
        <Route path="/editar-perfil" element={<EditarPerfil />} />
      </Routes>
    </Router>
  );
}

export default App;
