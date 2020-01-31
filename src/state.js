import React, { useContext, useState } from "react";

const StateContext = React.createContext();

const mockFontFamilyGroups = {
  "Arial, Times New Roman": [1, 2, 3],
  "Helvetica, consolas": [5]
};

export const StateContextProvider = ({ children }) => {
  const [selectedFont, setSelectedFont] = useState(null);
  const [fontFamilyGroups, setFontFamilyGroups] = useState(
    mockFontFamilyGroups
  );

  const value = {
    fontFamilyGroups,
    selectedFont,
    setSelectedFont
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useAppState = () => useContext(StateContext);
