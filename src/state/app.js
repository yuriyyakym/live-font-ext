import React, { useContext, useState, useCallback, useEffect } from 'react';
import * as api from '../api';

const AppStateContext = React.createContext();

export const AppStateContextProvider = ({ children }) => {
  const [selectedFont, setSelectedFont] = useState(null);
  const [changedFontFamilies, setChangedFontFamilies] = useState({});
  const [fontFamilies, setFontFamilies] = useState(['Not yet loaded']);

  useEffect(() => {
    api.getFontFamilies().then(setFontFamilies);
  }, []);

  const changeFontFamily = useCallback((fontFamily, newFontDetails) => {
    setChangedFontFamilies((changedFontFamilies) => ({
      ...changedFontFamilies,
      [fontFamily]: newFontDetails
    }));
    api.changeFontFamily(fontFamily, newFontDetails);
  }, []);

  const value = {
    fontFamilies,
    changedFontFamilies,
    selectedFont,
    changeFontFamily,
    setSelectedFont,
    highlightFontFamilyElements: api.highlightFontFamilyElements,
    unhighlightFontFamilyElements: api.unhighlightFontFamilyElements
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);
