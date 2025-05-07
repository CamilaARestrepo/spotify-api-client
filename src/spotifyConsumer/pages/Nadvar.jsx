import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../auth/contexts/UserContexts";
import Logo from "../../assets/Logo.png";
import Logo2 from "../../assets/Logo2.png";
import { useTheme } from "../../hooks/useTheme";
import { DataProfileContext } from "../contexts/DataPorfilContext";

const Nadvar = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [isOpen, setIsopen] = useState(false);
  const { dataProfile } = useContext(DataProfileContext);
  const [spotifyConect, setSpotifyConect] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsopen(!isOpen);
  };

  const navBarLinks = [
    { id: 0, title: "Inicio", link: "/Home" },
    { id: 1, title: "Perfil", link: "/Perfil" },
    { id: 2, title: "Cerrar sesión", action: "logout" },
  ];

  const handleClick = (item) => {
    if (item.action === "logout") {
      logout();
      navigate("/");
    } else if (item.link) {
      navigate(item.link);
    }
    setIsopen(false);
  };

  return (
    <>
    <nav className={`fixed top-0 left-0 w-full z-50 ${
      isDarkMode 
        ? 'bg-slate-900 bg-opacity-60 backdrop-blur-md' 
        : 'bg-white bg-opacity-80 backdrop-blur-md shadow-md'
    } transition-colors duration-300`}>
      <div className="flex justify-between items-center sm:px-12 sm:py-4 px-4 py-3">
        {/* Logo y estado */}
        <div className="flex items-center space-x-2">
          <img
            src={dataProfile.spotifyConect ? Logo : Logo2}
            alt="Logo"
            className="w-[30px]"
          />
          <span
            className={`text-sm font-bold ${
              dataProfile.spotifyConect 
                ? (isDarkMode ? "text-red-500" : "text-red-600") 
                : (isDarkMode ? "text-orange-500" : "text-orange-600")
            }`}
          >
            {dataProfile.spotifyConect ? "ONLINE" : "OFFLINE"}
          </span>
        </div>

        {/* Botón hamburguesa */}
        <button onClick={toggleMenu} className={`md:hidden ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navegación desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-4 sm:space-x-8 items-center">
            {navBarLinks.map((item) => (
              <li key={item.id}>
                <button
                  className={`sm:text-lg text-sm transition-transform hover:scale-110 transform duration-300 ${
                    isDarkMode 
                      ? 'text-white hover:text-sky-200' 
                      : 'text-gray-800 hover:text-blue-600'
                  }`}
                  onClick={() => handleClick(item)}
                >
                  {item.title}
                </button>
              </li>
            ))}
            
            {/* Theme Toggle Button - Desktop */}
            <li>
              <div className="flex items-center">
                <button 
                  onClick={toggleTheme}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-blue-100 hover:bg-blue-200 text-gray-800'
                  }`}
                  aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                >
                  {isDarkMode ? (
                    <>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                      </svg>
                      <span className="text-sm">Modo Oscuro</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">Modo Claro</span>
                    </>
                  )}
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } ${isDarkMode ? 'bg-black' : 'bg-white shadow-lg'}`}
      >
        <ul className="flex flex-col px-4 py-2">
          {navBarLinks.map((item) => (
            <li key={item.id} className="py-2 text-center">
              <button
                className={`${isDarkMode ? 'text-white hover:text-sky-200' : 'text-gray-800 hover:text-blue-600'}`}
                onClick={() => handleClick(item)}
              >
                {item.title}
              </button>
            </li>
          ))}
          
          {/* Theme Toggle - Mobile */}
          <li className="py-3 text-center">
            <button
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 mx-auto ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-blue-100 hover:bg-blue-200 text-gray-800'
              }`}
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <span>Cambiar a Modo Claro</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                  </svg>
                  <span>Cambiar a Modo Oscuro</span>
                </>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Nadvar;