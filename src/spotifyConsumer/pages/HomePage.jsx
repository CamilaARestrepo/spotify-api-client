import React, { useState, useEffect } from "react";
import Nadvar from "./Nadvar";
import { useTheme } from "../../hooks/useTheme";
import { useContext } from "react";
import { PlaylistContext } from "../contexts/PlaylistContext";
import { DataProfileContext } from "../contexts/DataPorfilContext";

const HomePage = () => {
  const {playlists} = useContext(PlaylistContext);
  const [search, setSearch] = useState("");
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const { isDarkMode } = useTheme(); 
  const {dataProfile} = useContext(DataProfileContext);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Nadvar />
  
      <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'} flex flex-col space-y-10 transition-colors duration-300`}>
        <div className="h-16"></div>

        <div className="flex">
          {/* playlist */}
          <div className="w-[70%] p-6 flex flex-col space-y-6 overflow-auto">
            {/* Seeker */}
            <input
              type="text"
              placeholder="Buscar playlist..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`p-2 rounded ${
                isDarkMode 
                  ? 'bg-gray-800 text-white placeholder-gray-400 focus:ring-red-500' 
                  : 'bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:ring-blue-500'
              } focus:outline-none focus:ring-2 transition-colors duration-300`}
            />
            <div className="flex gap-4 overflow-auto">
              {/* Own playlists */}
              <div className="w-1/2">
                <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-red-500' : 'text-blue-600'}`}>
                  Tus Playlists
                </h2>
                <div className="space-y-2">
                  {filteredPlaylists.map((playlist) => (
                    <div
                      key={playlist.id}
                      className={`${
                        isDarkMode 
                          ? 'bg-gray-800 hover:bg-red-600' 
                          : 'bg-white hover:bg-blue-100 shadow-md'
                      } p-4 rounded cursor-pointer transition-colors duration-300 flex flex-col h-64`}
                      onClick={() => setSelectedPlaylist(playlist)}
                    >
                      <div className="relative">
                        <img src={playlist.cover} alt={playlist.title} className="w-full h-32 object-cover rounded mb-2" />
                      </div>
                      <h3 className="text-lg font-bold">{playlist.title}</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} flex-grow`}>
                        {playlist.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Playlists */}
              <div className="w-1/2">
                <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-red-500' : 'text-blue-600'}`}>
                  Recomendadas
                </h2>
                <div className="space-y-2">
                  {filteredPlaylists.map((playlist) => (
                    <div
                      key={`rec-${playlist.id}`}
                      className={`${
                        isDarkMode 
                          ? 'bg-gray-800 hover:bg-red-600' 
                          : 'bg-white hover:bg-blue-100 shadow-md'
                      } p-4 rounded cursor-pointer transition-colors duration-300 flex flex-col h-64`}
                      onClick={() => setSelectedPlaylist(playlist)}
                    >
                      <div className="relative">
                        <img src={playlist.cover} alt={playlist.title} className="w-full h-32 object-cover rounded mb-2" />
                        {dataProfile.spotifyConect ?(
                        <button
                          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center ${
                            isDarkMode 
                              ? 'bg-red-500 text-white hover:bg-red-600' 
                              : 'bg-blue-500 text-white hover:bg-blue-600'
                          } transition-colors duration-300 shadow-lg`}
                        >
                          <span className="text-xl font-bold">+</span>
                        </button>
                        ): null}
                      </div>
                      <h3 className="text-lg font-bold">{playlist.title}</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} flex-grow`}>
                        {playlist.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details of the selected playlist */}
          <div className={`w-[30%] ${
            isDarkMode ? 'bg-gray-900' : 'bg-gray-200'
          } fixed right-0 top-16 bottom-0 space-y-4 transition-colors duration-300`}>
            <div 
              className={`h-full p-6 ${
                scrollEnabled ? "overflow-y-auto" : "overflow-hidden"
              }`}
              onMouseEnter={() => setScrollEnabled(true)}
              onMouseLeave={() => setScrollEnabled(false)}
            >
              {selectedPlaylist ? (
                <>
                  <img
                    src={selectedPlaylist.cover}
                    alt={selectedPlaylist.title}
                    className="w-full rounded mb-4"
                  />
                  <h2 className="text-2xl font-bold">{selectedPlaylist.title}</h2>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {selectedPlaylist.description}
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Seguidores:</strong> {selectedPlaylist.followers}
                  </p>
                  <p className="text-sm mb-4">
                    <strong>Última modificación:</strong> {selectedPlaylist.updatedAt}
                  </p>

                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-red-500' : 'text-blue-600'}`}>
                    Canciones
                  </h3>
                  <ul className="space-y-2">
                    {selectedPlaylist.songs.map((song, idx) => (
                      <li key={idx} className="text-sm">
                        <strong>{song.title}</strong> – {song.artist} | {song.album} • {song.duration}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Selecciona una playlist para ver detalles
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;