import React, { useContext, useState, useCallback, useEffect } from 'react';
import * as api from './api';

const FavoritesContext = React.createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = useCallback((font) => {
    setFavorites((favorites) => [...favorites]);
  }, []);

  const value = {
    favorites,
    addToFavorites
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = () => useContext(FavoritesContext);
