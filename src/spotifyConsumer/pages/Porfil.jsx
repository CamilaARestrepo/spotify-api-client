import React, { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <section class="py-10 my-auto dark:bg-black">
        <div class="lg:w-[80%] md:w-[90%] w-[96%] mx-auto flex gap-4">
          <div class="lg:w-[88%] sm:w-[88%] w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div class="">
              <h1 class="lg:text-3xl md:text-2xl text-xl font-serif font-extrabold mb-2 dark:text-white">
                Perfil
              </h1>
              <form>
                <div class="w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8M   Hx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                  <div class="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000')] bg-cover bg-center bg-no-repeat"></div>
                </div>
                <h2 class="text-center mt-1 font-semibold dark:text-gray-300">
                  {formData.user}
                </h2>

                <div class="flex flex-col lg:flex-row gap-2 justify-center w-full">
                  <div class="w-full mb-4 mt-6">
                    <label for="" class="mb-2 dark:text-gray-300">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="First Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="w-full mb-4 lg:mt-6">
                    <label for="" class="dark:text-gray-300">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="flex flex-col lg:flex-row gap-2 justify-center w-full">
                  <div class="w-full">
                    <h3 class="dark:text-gray-300 mb-2">Correo</h3>
                    <input
                      type="text"
                      name="email"
                      class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Correo"
                      value={formData.email}
                    />
                  </div>
                </div>
                <div class="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                  <button type="submit" class="w-full p-4">
                    Actualizar
                  </button>
                </div>
                <div class="w-full rounded-lg bg-gray-800 mt-6 p-6 text-white text-lg font-semibold shadow-lg">
                  <h1 class="text-2xl font-bold mb-4 border-b border-gray-600 pb-2">Estadísticas</h1>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-700 p-4 rounded-lg shadow-md">
                      <h3 class="text-lg font-medium mb-2">Número de Playlists</h3>
                      <p class="text-xl font-bold text-blue-400">{formData.stats.numberPlayList}</p>
                    </div>
                    <div class="bg-gray-700 p-4 rounded-lg shadow-md">
                      <h3 class="text-lg font-medium mb-2">Artistas Favoritos</h3>
                      <p class="text-sm text-gray-300">{formData.stats.FavoriteArtist.join(", ")}</p>
                    </div>
                    <div class="bg-gray-700 p-4 rounded-lg shadow-md">
                      <h3 class="text-lg font-medium mb-2">Géneros Favoritos</h3>
                      <p class="text-sm text-gray-300">{formData.stats.favoriteGenre.join(", ")}</p>
                    </div>
                    <div class="bg-gray-700 p-4 rounded-lg shadow-md">
                      <h3 class="text-lg font-medium mb-2">Últimas Reproducciones</h3>
                      <ul class="list-disc pl-5 text-sm text-gray-300">
                        {formData.stats.recentPlayback.map((song, index) => (
                          <li key={index}>
                            <span class="font-semibold text-blue-400">{song.title}</span> - {song.artist} 
                            <span class="text-gray-400"> ({song.album})</span> 
                            <span class="text-gray-500"> [{song.duration}]</span>
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
