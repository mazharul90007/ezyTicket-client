import React, { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export const EntertainmentContext = createContext();

const EntertainmentProvider = ({ children }) => {


  const [movies, setMovies] = useState([]);
  const [halls, setHalls] = useState([]);


 const axiosSecure= useAxiosSecure();

   useEffect(()=>{

    axiosSecure.get('/cinemahalls')
            .then(res=>
            setHalls(res.data))

         axiosSecure.get('/allmovies')
         .then(res=>
          setMovies(res.data))
      },[])

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
