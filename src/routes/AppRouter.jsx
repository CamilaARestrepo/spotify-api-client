import React from "react";
import { Route, Routes } from "react-router-dom";
import Nadvar from "../spotifyConsumer/pages/Nadvar";
import Login from "../auth/page/Login";
import HomePage from "../spotifyConsumer/pages/HomePage";
import Porfil from "../spotifyConsumer/pages/Porfil";
import { UserContext } from "../auth/contexts/UserContexts";
import { useContext } from "react";

export const AppRouter = () => {
  const { userState : { logged } } = useContext(UserContext);
  if (!logged) {
    return (
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/*" element={<Login />} />
      </Routes>
    );
  }
  return (
    <Routes>
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
