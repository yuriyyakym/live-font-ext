import React from 'react';
import { FixedSizeList as List } from 'react-window';

const getFontStyleUrl = (font) => {
  const fontFamily = font.family.replace(/ /g, '+');
  return `https://fonts.googleapis.com/css?family=${fontFamily}`;
};

const FontsList = ({ fonts, onChange }) => (
  <List height={150} itemCount={fonts.length} itemSize={35} width="100%">
    {({ index, style }) => {
      const font = fonts[index];
      return (
        <div
          style={{ ...style, fontFamily: font.family, fontSize: '14px' }}
          onClick={() => onChange(font)}>
          {font.family}
          <link href={getFontStyleUrl(font)} rel="stylesheet" type="text/css" />
        </div>
      );
    }}
  </List>
);

export default FontsList;
