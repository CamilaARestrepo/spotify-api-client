import React, { useState, useEffect } from "react";

const DataPorfil = {
  id: 1,
  name: "James",
  lastName: "Hincapie Mejia",
  user: "jamesor2017",
  email: "jamesor2017@gmail.com",
  date: "2003-04-23",
  stats: {
    numberPlayList: 5,
    FavoriteArtist: ["artist1", "artist2", "artist3", "artist4"],
    favoriteGenre: ["rock", "pop", "jazz", "reggaeton"],
    recentPlayback: [
      {
        title: "Song 1",
        artist: "Artist A",
        album: "Album A",
        duration: "3:45",
      },
      {
        title: "Song 2",
        artist: "Artist B",
        album: "Album B",
        duration: "4:10",
      },
      {
        title: "Song 3",
        artist: "Artist C",
        album: "Album C",
        duration: "2:30",
      },
      {
        title: "Song 4",
        artist: "Artist D",
        album: "Album D",
        duration: "5:00",
      },
    ],
  },
};

const Porfil = () => {
  const [formData, setFormData] = useState(DataPorfil);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verificar si hay una preferencia guardada en localStorage
    const savedTheme = localStorage.getItem("theme");
    // Si hay un tema guardado, usarlo; de lo contrario, usar oscuro por defecto
    return savedTheme ? savedTheme === "dark" : true;
  });

  // Sincronizar el estado del tema con localStorage y aplicar clases
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Escuchar cambios en el localStorage (si el tema se cambia desde otro componente)
  useEffect(() => {
    const handleStorageChange = () => {
      const currentTheme = localStorage.getItem("theme");
      setIsDarkMode(currentTheme === "dark");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <section className={`py-10 my-auto ${isDarkMode ? 'bg-black' : 'bg-gray-100'} transition-colors duration-300`}>
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
                <div className="w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8M   Hx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                  <div className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000')] bg-cover bg-center bg-no-repeat"></div>
                </div>
                <h2 className={`text-center mt-1 font-semibold ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {formData.user}
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
                      value={formData.name}
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
                      value={formData.lastName}
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
                      value={formData.email}
                    />
                  </div>
                </div>
                <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                  <button type="submit" className="w-full p-4">
                    Actualizar
                  </button>
                </div>
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
                      <p className="text-xl font-bold text-blue-400">{formData.stats.numberPlayList}</p>
                    </div>
                    <div className={`${
                      isDarkMode ? 'bg-gray-700' : 'bg-white'
                    } p-4 rounded-lg shadow-md transition-colors duration-300`}>
                      <h3 className="text-lg font-medium mb-2">Artistas Favoritos</h3>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{formData.stats.FavoriteArtist.join(", ")}</p>
                    </div>
                    <div className={`${
                      isDarkMode ? 'bg-gray-700' : 'bg-white'
                    } p-4 rounded-lg shadow-md transition-colors duration-300`}>
                      <h3 className="text-lg font-medium mb-2">Géneros Favoritos</h3>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{formData.stats.favoriteGenre.join(", ")}</p>
                    </div>
                    <div className={`${
                      isDarkMode ? 'bg-gray-700' : 'bg-white'
                    } p-4 rounded-lg shadow-md transition-colors duration-300`}>
                      <h3 className="text-lg font-medium mb-2">Últimas Reproducciones</h3>
                      <ul className="list-disc pl-5 text-sm">
                        {formData.stats.recentPlayback.map((song, index) => (
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
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Porfil;