import React, { useState } from "react";
import Nadvar from "./Nadvar";

const samplePlaylists = [
  {
    id: 1,
    title: "Workout Boost",
    description: "Energía para tu entrenamiento.",
    cover: "https://picsum.photos/seed/workout/300/200",
    followers: 1234,
    updatedAt: "2023-12-01",
    songs: [
      { title: "Song 1", artist: "Artist A", album: "Album A", duration: "3:45" },
      { title: "Song 2", artist: "Artist B", album: "Album B", duration: "4:10" },
    ],
  },
  {
    id: 2,
    title: "Relax Vibes",
    description: "Sonidos suaves para relajarte.",
    cover: "https://picsum.photos/seed/relax/300/200",
    followers: 2345,
    updatedAt: "2024-01-10",
    songs: [
      { title: "Calm Sea", artist: "Oceanic", album: "Peace", duration: "5:02" },
    ],
  },
  {
    id: 3,
    title: "Latin Heat",
    description: "Los ritmos más calientes.",
    cover: "https://picsum.photos/seed/latin/300/200",
    followers: 3500,
    updatedAt: "2025-02-05",
    songs: [
      { title: "Baila Baila", artist: "Reggaeton Star", album: "Fiesta", duration: "3:25" },
    ],
  },
  {
    id: 4,
    title: "Chill Night",
    description: "Perfecto para terminar el día.",
    cover: "https://picsum.photos/seed/chill/300/200",
    followers: 2800,
    updatedAt: "2024-06-20",
    songs: [
      { title: "Moonlight", artist: "Luna", album: "Dreams", duration: "4:05" },
    ],
  },
];

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const filteredPlaylists = samplePlaylists.filter((playlist) =>
    playlist.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Nadvar className=""/>
  
    <div className="min-h-screen bg-black text-white flex flex-col space-y-10">
      <div className="h-6"></div>

      <div className="flex">
        {/* Sección izquierda 70% */}
        <div className="w-[70%] p-6 flex flex-col space-y-6 overflow-auto">
          {/* Buscador */}
          <input
            type="text"
            placeholder="Buscar playlist..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Subdivisión: propias y recomendadas */}
          <div className="flex gap-4 overflow-auto">
            {/* Tus Playlists */}
            <div className="w-1/2">
              <h2 className="text-xl font-semibold mb-2 text-red-500">Tus Playlists</h2>
              <div className="space-y-2">
                {filteredPlaylists.map((playlist) => (
                  <div
                    key={playlist.id}
                    className="bg-gray-800 p-4 rounded hover:bg-red-600 cursor-pointer"
                    onClick={() => setSelectedPlaylist(playlist)}
                  >
                    <img src={playlist.cover} alt={playlist.title} className="w-full mb-2 rounded" />
                    <h3 className="text-lg font-bold">{playlist.title}</h3>
                    <p className="text-sm text-gray-300">{playlist.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recomendadas */}
            <div className="w-1/2">
              <h2 className="text-xl font-semibold mb-2 text-red-500">Recomendadas</h2>
              <div className="space-y-2">
                {filteredPlaylists.map((playlist) => (
                  <div
                    key={`rec-${playlist.id}`}
                    className="bg-gray-800 p-4 rounded hover:bg-red-600 cursor-pointer"
                    onClick={() => setSelectedPlaylist(playlist)}
                  >
                    <img src={playlist.cover} alt={playlist.title} className="w-full mb-2 rounded" />
                    <h3 className="text-lg font-bold">{playlist.title}</h3>
                    <p className="text-sm text-gray-300">{playlist.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sección derecha */}
        <div className="w-[30%] bg-gray-900 fixed right-0 top-28 bottom-0 space-y-11">
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
                <p className="text-sm text-gray-400">{selectedPlaylist.description}</p>
                <p className="text-sm mt-2">
                  <strong>Seguidores:</strong> {selectedPlaylist.followers}
                </p>
                <p className="text-sm mb-4">
                  <strong>Última modificación:</strong> {selectedPlaylist.updatedAt}
                </p>

                <h3 className="text-lg font-semibold mb-2 text-red-500">Canciones</h3>
                <ul className="space-y-2">
                  {selectedPlaylist.songs.map((song, idx) => (
                    <li key={idx} className="text-sm">
                      <strong>{song.title}</strong> – {song.artist} | {song.album} • {song.duration}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-gray-400">Selecciona una playlist para ver detalles</p>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;