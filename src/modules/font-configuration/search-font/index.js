import React, { useCallback } from 'react';
import { useAppState } from '../../../state/app';
import { useFavorites } from '../../../state/favorites';
import { useFontSearch } from './state';
import FontsList from './fonts-list';
import styles from './styles.module.css';

const SearchFont = () => {
  const { selectedFont, changeFontFamily } = useAppState();
  const { favorites, addToFavorites } = useFavorites();
  const { fonts } = useFontSearch();

  const onSelect = useCallback(
    (font) => {
      changeFontFamily(selectedFont, font);
    },
    [selectedFont, changeFontFamily]
  );

  return (
    <div className={styles.serachFont}>
      <FontsList
        height={300}
        fonts={fonts}
        favorites={favorites}
        onSelect={onSelect}
        onAddToFavorites={addToFavorites}
      />
    </div>
  );
};

export default SearchFont;
