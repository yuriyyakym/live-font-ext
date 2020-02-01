import React, { useCallback } from 'react';
import { useAppState } from '../../../state';
import { useFontSearch } from './state';
import FontsList from '../../../components/fonts-list';
import styles from './styles.module.css';

const SearchFont = () => {
  const { selectedFont, replaceFontFamily } = useAppState();
  const { fonts } = useFontSearch();

  const onChange = useCallback(
    (font) => {
      replaceFontFamily(selectedFont, font.family);
    },
    [selectedFont, replaceFontFamily]
  );

  return (
    <div className={styles.serachFont}>
      <FontsList height={300} fonts={fonts} onChange={onChange} />
    </div>
  );
};

export default SearchFont;
