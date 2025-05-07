import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Nadvar from "../spotifyConsumer/pages/Nadvar";
import Login from "../auth/page/login";
import HomePage from "../spotifyConsumer/pages/HomePage";
import Porfil from "../spotifyConsumer/pages/Porfil";
import { UserContext } from "../auth/contexts/UserContexts";
import { PlaylistProvider } from "../spotifyConsumer/contexts/PlaylistProvider";
import { DataProfileProvider } from "../spotifyConsumer/contexts/DataPorfilProvider";

export const AppRouter = () => {
  const {
    userState: { logged },
  } = useContext(UserContext);

  if (!logged) {
    return (
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/*" element={<Login />} />
      </Routes>
    );
  }

  return (
    <DataProfileProvider>
      <Routes>
        <Route
          path="/Home"
          element={
            <PlaylistProvider>
              <HomePage />
            </PlaylistProvider>
          }
        />
        <Route path="/Perfil" element={<Porfil />} />
        <Route
          path="/*"
          element={
            <PlaylistProvider>
              <HomePage />
            </PlaylistProvider>
          }
        />
      </Routes>
    </DataProfileProvider>
  );
};
