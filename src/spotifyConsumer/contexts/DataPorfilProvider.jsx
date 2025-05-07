import React,{useState, useEffect} from "react";
import { DataProfileContext } from "./DataPorfilContext";
import { dataPorfil } from "../../mock/dataPorfil";

export const DataProfileProvider = ({ children }) => {
    const [dataProfile, setDataProfile] = useState({
        id: null,
        name: "",
        lastName: "",
        user: "",
        email: "",
        date: "",
        stats: {
          numberPlayList: 0,
          FavoriteArtist: [],
          favoriteGenre: [],
          recentPlayback: [],
        },
        spotifyConect: true
      });
    
    useEffect(() => {
        setDataProfile(dataPorfil);
    }, []);
    
    return (
        <DataProfileContext.Provider value={{ dataProfile, setDataProfile }}>
        {children}
        </DataProfileContext.Provider>
    );
    }