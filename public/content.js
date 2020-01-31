let a;

const fetchFontFamilyGroups = () => {
  return Array.from(document.querySelectorAll('*'))
    .filter((element) => element.nodeType === 3 || element.nodeType === 1)
    .reduce((result, element) => {
      const fontFamily = getComputedStyle(element)['font-family'];
      result[fontFamily] = result[fontFamily] || [];
      result[fontFamily].push(element);
      return result;
    }, {});
};

// const loadFont = (newFontFamily) => {
//   const fontFamily = newFontFamily.replace(/ /g, '+');
//   const link = document.createElement('link');
//   link.setAttribute('rel', 'stylesheet');
//   link.setAttribute('type', 'text/css');
//   link.setAttribute('href', `https://fonts.googleapis.com/css?family=${fontFamily}`);
//   document.head.appendChild(link);
// };

// const replaceFont = (originalFont, newFontFamily) => {
//   const fontFamilyGroups = fetchFontFamilyGroups();
//   loadFont(newFontFamily);
//   for (const element of fontFamilyGroups[originalFont]) {
//     element.style.fontFamily = newFontFamily;
//   }
// };

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const { action, payload } = request;

  switch (action) {
    case 'live-font::get-font-families':
      const fontFamilyGroups = fetchFontFamilyGroups();
      a = fontFamilyGroups;
      const fontFamilies = Object.keys(fontFamilyGroups);
      sendResponse({ data: fontFamilies, success: true });
      return;

    // case 'live-font::replace-font-family':
    //   const { originalFont, newFont } = payload;
    //   replaceFont(originalFont, newFont);
    //   sendResponse({ success: true });
    //   return;
  }
});
