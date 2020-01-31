import React, { useContext, useState, useCallback, useEffect } from 'react';
import * as api from './api';

const StateContext = React.createContext();

export const StateContextProvider = ({ children }) => {
  const [selectedFont, setSelectedFont] = useState(null);
  const [fontFamilies, setFontFamilies] = useState(['A', 'b']);

  useEffect(() => {
    api.getFontFamilies().then((a) => console.log(a) || setFontFamilies(a));
  }, []);

  const replaceFontFamily = useCallback((originalFont, newFont) => {
    api.replaceFontFamily(originalFont, newFont);
  }, []);

  const value = {
    fontFamilies,
    selectedFont,
    replaceFontFamily,
    setSelectedFont
  };

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

export const useAppState = () => useContext(StateContext);
