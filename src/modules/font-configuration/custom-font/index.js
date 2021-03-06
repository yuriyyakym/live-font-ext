import React from 'react';
import { useAppState } from '../../../state/app';

const CustomFont = () => {
  const { selectedFont, replaceFontFamily } = useAppState();

  return <input onChange={(event) => replaceFontFamily(selectedFont, event.target.value)} />;
};

export default CustomFont;
