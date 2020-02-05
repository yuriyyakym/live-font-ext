const getGoogleFontStyleUrl = (font) => {
  const fontFamily = font.family.replace(/ /g, '+');
  return `https://fonts.googleapis.com/css?family=${fontFamily}`;
};

const googleFontFromServerFormat = (googleFont) => ({
  fontFamily: googleFont.family,
  category: googleFont.category,
  variants: googleFont.variants,
  subsets: googleFont.subsets,
  styleSrc: getGoogleFontStyleUrl(googleFont)
});

export default googleFontFromServerFormat;
