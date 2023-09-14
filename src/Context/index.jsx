import { createContext, useState } from "react";
import { database } from "../mock";

export const MovieContext = createContext({movie: database});

export const Context = ({ children }) => {
  const [movie, setMovie] = useState( database );
  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};