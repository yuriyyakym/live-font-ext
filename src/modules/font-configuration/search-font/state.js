import { useState, useEffect, useMemo } from 'react';
import { fetchGoogleFonts } from '../../../api';

export const useFontSearch = () => {
  const [googleFonts, setGoogleFonts] = useState([]);

  useEffect(() => {
    fetchGoogleFonts().then(setGoogleFonts);
  }, []);

  const fonts = useMemo(() => [...googleFonts], [googleFonts]);

  return { fonts };
};
