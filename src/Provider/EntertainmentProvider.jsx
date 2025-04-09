import React, { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export const EntertainmentContext = createContext();

const EntertainmentProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
 const axiosSecure= useAxiosSecure();

   useEffect(()=>{
         axiosSecure.get('/allmovies')
         .then(res=>
          
          setMovies(res.data))
      },[movies])

  const entertainmenInfo = {
    movies,
    setMovies,
    
  };

  return (
    <EntertainmentContext.Provider value={entertainmenInfo}>
      {children}
    </EntertainmentContext.Provider>
  );
};

export default EntertainmentProvider;
