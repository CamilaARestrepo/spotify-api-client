import React, { useState } from "react";
import Logo from "../../assets/Logo.png";

const Login = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const toggleLogin = () => setIsLoginOpen(!isLoginOpen);
    const toggleRegister = () => setIsRegisterOpen(!isRegisterOpen);

    return (
        <div>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 bg-white w-full bg-opacity-15 backdrop-blur-md z-50">
                <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
                    {/* Logo */}
                    <div>
                        {Logo ? (
                            <img src={Logo} alt="Logo del sitio" className="w-[100px]" />
                        ) : (
                            <span className="text-white text-lg">Logo</span>
                        )}
                    </div>
                    {/* Login and Register */}
                    <div className="flex space-x-4">
                        <button
                            onClick={toggleLogin}
                            className="text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110 transform inline-block duration-300"
                        >
                            Login
                        </button>
                        <button
                            onClick={toggleRegister}
                            className="text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110 transform inline-block duration-300"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </nav>

            {/* Login Modal */}
            {isLoginOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-xl font-bold mb-4">Login</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Usuario</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Contraseña</label>
                                <div className="relative">
                                    <input
                                        type={isPasswordVisible ? "text" : "password"}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                        className="absolute inset-y-0 right-0 px-3 text-gray-500 hover:text-gray-700"
                                    >
                                        <i className={`bi ${isPasswordVisible ? "bi-eye" : "bi-eye-slash"} w-5 h-5`}></i>
                                    </button>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                            >
                                Iniciar Sesión
                            </button>
                        </form>
                        <button
                            onClick={toggleLogin}
                            className="mt-4 text-sm text-gray-500 hover:underline"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            {/* Register Modal */}
            {isRegisterOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-xl font-bold mb-4">Registro</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formElements = e.target.elements;
                                const nombre = formElements["nombre"].value.trim();
                                const apellidos = formElements["apellidos"].value.trim();
                                const usuario = formElements["usuario"].value.trim();
                                const password = formElements["password"].value.trim();
                                const confirmPassword = formElements["confirmPassword"].value.trim();

                                if (!nombre || !apellidos || !usuario || !password || !confirmPassword) {
                                    alert("Todos los campos deben estar llenos");
                                    return;
                                }

                                if (password !== confirmPassword) {
                                    alert("Las contraseñas no coinciden");
                                    return;
                                }
                                toggleRegister();
                            }}
                        >
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Nombre</label>
                                <input
                                    name="nombre"
                                    type="text"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Apellidos</label>
                                <input
                                    name="apellidos"
                                    type="text"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Usuario</label>
                                <input
                                    name="usuario"
                                    type="text"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Contraseña</label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={isPasswordVisible ? "text" : "password"}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                        className="absolute inset-y-0 right-0 px-3 text-gray-500 hover:text-gray-700"
                                    >
                                        <i className={`bi ${isPasswordVisible ? "bi-eye" : "bi-eye-slash"} w-5 h-5`}></i>
                                    </button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Repetir Contraseña</label>
                                <div className="relative">
                                    <input
                                        name="confirmPassword"
                                        type={isPasswordVisible ? "text" : "password"}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                        className="absolute inset-y-0 right-0 px-3 text-gray-500 hover:text-gray-700"
                                    >
                                        <i className={`bi ${isPasswordVisible ? "bi-eye" : "bi-eye-slash"} w-5 h-5`}></i>
                                    </button>
                                </div>
                            </div>
                            <button
                                id="register-button"
                                type="submit"
                                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                            >
                                Registrarse
                            </button>
                        </form>
                        <button
                            onClick={toggleRegister}
                            className="mt-4 text-sm text-gray-500 hover:underline"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;

