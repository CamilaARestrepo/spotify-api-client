import React from "react";
import { Route, Routes } from "react-router-dom";
import Nadvar from "../spotifyConsumer/pages/Nadvar";
import Login from "../auth/page/Login";
import HomePage from "../spotifyConsumer/pages/HomePage";
import Porfil from "../spotifyConsumer/pages/Porfil";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route
        path="/Home"
        element={
          <HomePage/>
        }
      />
      <Route
        path="/Perfil"
        element={
          <>
            <Nadvar />
            <div style={{ marginTop: "150px" }}>
              <Porfil />
            </div>
          </>
        }
      />
      <Route path="/*" element={<Login />} />
    </Routes>
  );
};
