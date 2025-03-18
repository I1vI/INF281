import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaInstagram, FaUser , FaTwitter} from "react-icons/fa";

const Inicio = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Verifica si hay un token en localStorage al cargar la página
    useEffect(() => {
        const token = localStorage.getItem("access_token");
        const id_user = localStorage.getItem("id_user");
        setIsLoggedIn(!!token);
    }, []); 

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id");
        setIsLoggedIn(false);
        setMenuOpen(false);
        window.location.href = "/login"; // Redirigir al login después de cerrar sesión
    };

    return (
        <div className="text-white">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full p-5 shadow-lg z-50 flex items-center justify-between bg-gradient-to-b from-black to-transparent">
                <img src="assets/logo1.png" alt="Bicentenario de Bolivia" className="w-32 h-auto" />
                <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-white text-2xl">
                    <a href="#" className="hover:text-yellow-400">Agenda</a>
                    <a href="#" className="hover:text-yellow-400">Eventos</a>
                    <a href="#" className="hover:text-yellow-400">Presidentes</a>
                    <a href="#" className="hover:text-yellow-400">Historia</a>
                    <a href="#" className="hover:text-yellow-400">Cultura</a>
                </div>
                
                {/* Icono de usuario */}
                <div className="ml-auto text-white text-4xl relative">
                    {isLoggedIn ? (   
                        <div className="relative">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="hover:text-yellow-400">
                                <FaUser />
                            </button>
                            {menuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg py-2 text-xl">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Mi agenda</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Mis eventos</a>
                                    <Link to="/editar-perfil" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">Editar perfil</Link>
                                    <button onClick={handleLogout} className="block px-4 py-2 w-full text-left hover:bg-gray-700">Cerrar sesión</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login" className="hover:text-yellow-400"><FaUser /></Link>
                   )} 
                </div>
            </nav>

            {/* Hero Section */}
            <section className="text-center py-40 bg-cover bg-center" style={{ backgroundImage: "url('/ruta-de-imagen.jpg')" }}>
                <h1 className="text-5xl font-extrabold">SOÑAMOS, LUCHAMOS Y VENCEMOS</h1>
            </section>

            {/* Sección de noticias */}
            <section className="p-10">
                <h2 className="text-3xl font-bold text-center">Noticias del Bicentenario</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-green-500 p-4 rounded-md">Noticia 1</div>
                    <div className="bg-green-500 p-4 rounded-md">Noticia 2</div>
                    <div className="bg-green-500 p-4 rounded-md">Noticia 3</div>
                </div>
            </section>
            
            {/* Sección multimedia */}
            <section className="p-10 text-center">
                <h2 className="text-3xl font-bold">Contenido Multimedia</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" className="w-full h-48"></iframe>
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" className="w-full h-48"></iframe>
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" className="w-full h-48"></iframe>
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" className="w-full h-48"></iframe>
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" className="w-full h-48"></iframe>
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" className="w-full h-48"></iframe>
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" className="w-full h-48"></iframe>
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" className="w-full h-48"></iframe>
                </div>
            </section>

            {/* Pie de página */}
            <footer className="bg-green-700 p-6 text-center">
                <p>&copy; 2025 Bicentenario de Bolivia</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
                    <FaYoutube className="text-2xl cursor-pointer hover:text-red-500" />
                    <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
                    <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
                </div>
            </footer>
        </div>
    );
};

export default Inicio;
