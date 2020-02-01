import React from 'react';
import { FixedSizeList as List } from 'react-window';
import styles from './styles.module.css';

const getFontStyleUrl = (font) => {
  const fontFamily = font.family.replace(/ /g, '+');
  return `https://fonts.googleapis.com/css?family=${fontFamily}`;
};

const FontsList = ({ fonts, height, onChange }) => (
  <List className={styles.list} height={height} itemCount={fonts.length} itemSize={45} width="100%">
    {({ index, style }) => {
      const font = fonts[index];
      return (
        <div
          style={{ ...style, fontFamily: font.family }}
          className={styles.fontRow}
          onClick={() => onChange(font)}>
          {font.family}
          <link href={getFontStyleUrl(font)} rel="stylesheet" type="text/css" />
        </div>
      );
    }}
  </List>
);

export default FontsList;
