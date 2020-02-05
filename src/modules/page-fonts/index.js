import React from 'react';
import styles from './styles.module.css';
import { useAppState } from '../../state';

const PageFonts = () => {
  const { fontFamilies, replacedFontFamilies, setSelectedFont } = useAppState();

  return (
    <div>
      <ul className={styles.pageFontsList}>
        {fontFamilies.map((fontFamily) => {
          const newFont = replacedFontFamilies[fontFamily];
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
