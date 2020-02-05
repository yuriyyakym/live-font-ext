import React from 'react';
import { FixedSizeList as List } from 'react-window';
import TextSymbolButton from '../../../../components/text-symbol-button';
import styles from './styles.module.css';

const FontsList = ({ fonts, height, onSelect, onAddToFavorites }) => (
  <List className={styles.list} height={height} itemCount={fonts.length} itemSize={45} width="100%">
    {({ index, style }) => {
      const font = fonts[index];
      return (
        <div
          style={{ ...style, fontFamily: font.family }}
          className={styles.fontRow}
          onClick={() => onSelect(font)}>
          {font.fontFamily}
          <TextSymbolButton text="☆" activeText="★" onClick={() => onAddToFavorites(font)} />
          <link href={font.styleSrc} rel="stylesheet" type="text/css" />
        </div>
      );
    }}
  </List>
);

export default FontsList;
