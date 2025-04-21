import React, { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import axios from "axios";

export const EntertainmentContext = createContext();

const EntertainmentProvider = ({ children }) => {


  const [movies, setMovies] = useState([]);
  const [halls, setHalls] = useState([]);

  console.log(movies);

 const axiosSecure= useAxiosSecure();

 useEffect(() => {
  const fetchData = async () => {
    // Get cinema halls
    const hallsResponse = await axiosSecure.get('/cinemahalls');
    setHalls(hallsResponse.data);
    
    // Get local movies
    const localMoviesResponse = await axiosSecure.get('/allmovies');
    const localMovies = localMoviesResponse.data;
    
    // Get external movies
    const externalMoviesResponse = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=7c6a26f876561b33041c71bf76c78528");
    const externalMovies = externalMoviesResponse.data.results;

    // const externalMoviesResponse = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=7c6a26f876561b33041c71bf76c78528");
    // const externalMovies = externalMoviesResponse.data.results;


    
    // Combine both movie sources
    setMovies([...localMovies, ...externalMovies]);
  };
  
  fetchData();
}, [])

 

  const entertainmenInfo = {
    movies,
    setMovies,
    halls
    
  };

  return (
    <EntertainmentContext.Provider value={entertainmenInfo}>
      {children}
    </EntertainmentContext.Provider>
  );
};

export default EntertainmentProvider;
