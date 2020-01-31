import React from 'react';
import styles from './styles.module.css';
import { useAppState } from '../../state';

const PageFonts = () => {
  const { fontFamilies, setSelectedFont } = useAppState();

  return (
    <div>
      <ul className={styles.pageFontsList}>
        {fontFamilies.map((fontFamily) => (
          <li className={styles.pageFont} onClick={() => setSelectedFont(fontFamily)}>
            {fontFamily}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageFonts;
