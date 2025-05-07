import React, { useState, useEffect } from "react"; 
import { PlaylistContext } from "./PlaylistContext";
import { playLists } from "../../mock/playLists";

export const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    setPlaylists(playLists);
  }, []);

  return (
    <PlaylistContext.Provider value={{ playlists, setPlaylists }}>
      {children}
    </PlaylistContext.Provider>
  );
};
