import React from 'react';
import { useAppState } from '../../state/app';
import styles from './styles.module.css';

const PageFonts = () => {
  const { fontFamilies, changedFontFamilies, setSelectedFont } = useAppState();

  return (
    <div>
      <ul className={styles.pageFontsList}>
        {fontFamilies.map((fontFamily) => {
          const newFont = changedFontFamilies[fontFamily];
          return (
            <li className={styles.pageFont} onClick={() => setSelectedFont(fontFamily)}>
              {fontFamily} {newFont && <span>- {newFont.fontFamily}</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PageFonts;
