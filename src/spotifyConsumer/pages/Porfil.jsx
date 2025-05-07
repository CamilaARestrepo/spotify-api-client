import React, { useState, useEffect, useContext } from "react";
import Nadvar from "./Nadvar";
import { useTheme } from "../../hooks/useTheme";
import { DataProfileContext } from "../contexts/DataPorfilContext";

const Perfil = () => {
  const { dataProfile, setDataProfile } = useContext(DataProfileContext);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataProfile({
      ...dataProfile,
      [name]: value,
    });
  };


  return (
    <>
      <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
        <Nadvar /> 
        <div className="space-y-36">
          <section className={`py-20 my-auto ${isDarkMode ? 'bg-black' : 'bg-gray-100'} transition-colors duration-300`}>
            <div className="lg:w-[80%] md:w-[90%] w-[96%] mx-auto flex gap-4">
              <div className={`lg:w-[88%] sm:w-[88%] w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center ${
                isDarkMode ? 'bg-gray-800/40' : 'bg-white'
              } transition-colors duration-300`}>
                <div>
                  <h1 className={`lg:text-3xl md:text-2xl text-xl font-serif font-extrabold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    Perfil
                  </h1>
                  <form>
                    <div className="w-full rounded-sm bg-cover bg-center bg-no-repeat items-center h-40 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30"></div>
                      <div className="mx-auto flex justify-center pt-6 relative z-10">
                        <div className="w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat border-4 border-white dark:border-gray-700 shadow-lg" 
                             style={{backgroundImage: `url('https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=${isDarkMode ? 'FFFFFF' : '000000'}')`}}>
                        </div>
                      </div>
                    </div>
                    
                    <h2 className={`text-center mt-1 font-semibold ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {dataProfile?.user || "Usuario"}
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                      <div className="w-full mb-4 mt-6">
                        <label className={`mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Nombre
                        </label>
                        <input
                          type="text"
                          name="name"
                          className={`mt-2 p-4 w-full border-2 rounded-lg ${
                            isDarkMode 
                              ? 'text-gray-200 border-gray-600 bg-gray-800' 
                              : 'text-gray-800 border-gray-300 bg-white'
                          } transition-colors duration-300`}
                          placeholder="First Name"
                          value={dataProfile?.name || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="w-full mb-4 lg:mt-6">
                        <label className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Apellidos
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          className={`mt-2 p-4 w-full border-2 rounded-lg ${
                            isDarkMode 
                              ? 'text-gray-200 border-gray-600 bg-gray-800' 
                              : 'text-gray-800 border-gray-300 bg-white'
                          } transition-colors duration-300`}
                          placeholder="Last Name"
                          value={dataProfile?.lastName || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                      <div className="w-full">
                        <h3 className={`mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Correo</h3>
                        <input
                          type="text"
                          name="email"
                          className={`mt-2 p-4 w-full border-2 rounded-lg ${
                            isDarkMode 
                              ? 'text-gray-200 border-gray-600 bg-gray-800' 
                              : 'text-gray-800 border-gray-300 bg-white'
                          } transition-colors duration-300`}
                          placeholder="Correo"
                          value={dataProfile?.email || ""}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold hover:bg-blue-600 transition-colors">
                      <button type="submit" className="w-full p-4">
                        Actualizar
                      </button>
                    </div>
                    {dataProfile.spotifyConect ? (
                      <div className={`w-full rounded-lg ${
                        isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                      } mt-6 p-6 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                      } text-lg font-semibold shadow-lg transition-colors duration-300`}>
                        <h1 className="text-2xl font-bold mb-4 border-b border-gray-600 pb-2">Estadísticas</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className={`${
                            isDarkMode ? 'bg-gray-700' : 'bg-white'
                          } p-4 rounded-lg shadow-md transition-colors duration-300`}>
                            <h3 className="text-lg font-medium mb-2">Número de Playlists</h3>
                            <p className="text-xl font-bold text-blue-400">{dataProfile?.stats?.numberPlayList || 0}</p>
                          </div>
                          <div className={`${
                            isDarkMode ? 'bg-gray-700' : 'bg-white'
                          } p-4 rounded-lg shadow-md transition-colors duration-300`}>
                            <h3 className="text-lg font-medium mb-2">Artistas Favoritos</h3>
                            <p className={`text-sm ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>{dataProfile?.stats?.FavoriteArtist?.join(", ") || "No hay datos disponibles"}</p>
                          </div>
                          <div className={`${
                            isDarkMode ? 'bg-gray-700' : 'bg-white'
                          } p-4 rounded-lg shadow-md transition-colors duration-300`}>
                            <h3 className="text-lg font-medium mb-2">Géneros Favoritos</h3>
                            <p className={`text-sm ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>{dataProfile?.stats?.favoriteGenre?.join(", ") || "No hay datos disponibles"}</p>
                          </div>
                          <div className={`${
                            isDarkMode ? 'bg-gray-700' : 'bg-white'
                          } p-4 rounded-lg shadow-md transition-colors duration-300`}>
                            <h3 className="text-lg font-medium mb-2">Últimas Reproducciones</h3>
                            {dataProfile?.stats?.recentPlayback && dataProfile.stats.recentPlayback.length > 0 ? (
                              <ul className="list-disc pl-5 text-sm">
                                {dataProfile.stats.recentPlayback.map((song, index) => (
                                  <li key={index}>
                                    <span className="font-semibold text-blue-400">{song.title}</span> - {song.artist} 
                                    <span className={`${
                                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}> ({song.album})</span> 
                                    <span className={`${
                                      isDarkMode ? 'text-gray-500' : 'text-gray-600'
                                    }`}> [{song.duration}]</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm text-gray-500">No hay reproducciones recientes</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={`w-full rounded-lg ${
                        isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                      } mt-6 p-6 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                      } text-lg font-semibold shadow-lg transition-colors duration-300`}>
                        <div className="text-center">
                          <img 
                            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" 
                            alt="Spotify Logo" 
                            className="h-14 mx-auto mb-4" 
                          />
                          <h2 className="text-xl mb-2">Conecta tu cuenta de Spotify</h2>
                          <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Conecta tu cuenta para ver tus estadísticas de reproducción, artistas favoritos y más.
                          </p>
                          <button
                            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-all transform hover:scale-105 flex items-center justify-center mx-auto"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Conectar con Spotify
                          </button>
                          <p className="text-xs mt-4 text-gray-500">
                            Necesitamos tu permiso para acceder a tus datos de Spotify.
                          </p>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Perfil;