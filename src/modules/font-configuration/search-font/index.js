import React, { useCallback } from 'react';
import { useAppState } from '../../../state';
import { useFontSearch } from './state';
import FontsList from '../../../components/fonts-list';

const SearchFont = () => {
  const { selectedFont, replaceFontFamily } = useAppState();
  const { fonts } = useFontSearch();

  const onChange = useCallback(
    (font) => {
      replaceFontFamily(selectedFont, font.family);
    },
    [selectedFont, replaceFontFamily]
  );

  return <FontsList fonts={fonts} onChange={onChange} />;
};

export default SearchFont;
