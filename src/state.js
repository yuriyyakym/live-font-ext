import React, { useContext, useState, useCallback, useEffect } from 'react';
import * as api from './api';

const StateContext = React.createContext();

export const StateContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [selectedFont, setSelectedFont] = useState(null);
  const [replacedFontFamilies, setReplacedFontFamilies] = useState({});
  const [fontFamilies, setFontFamilies] = useState(['Not yet loaded']);

  useEffect(() => {
    api.getFontFamilies().then((a) => console.log(a) || setFontFamilies(a));
  }, []);

  const replaceFontFamily = useCallback((fontFamily, newFontDetails) => {
    setReplacedFontFamilies((replacedFontFamilies) => ({
      ...replacedFontFamilies,
      [fontFamily]: newFontDetails
    }));
    api.replaceFontFamily(fontFamily, newFontDetails);
  }, []);

  const addToFavorites = useCallback((font) => {
    setFavorites((favorites) => [...favorites]);
  }, []);

  const value = {
    favorites,
    fontFamilies,
    replacedFontFamilies,
    selectedFont,
    addToFavorites,
    replaceFontFamily,
    setSelectedFont
  };

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

export const useAppState = () => useContext(StateContext);
