(() => {
  const fetchFontFamilyGroups = () => {
    return Array.from(document.querySelectorAll('*'))
      .filter((element) => element.nodeType === 3 || element.nodeType === 1)
      .reduce((result, element) => {
        const fontFamily = getComputedStyle(element)['font-family'];
        const parentFontFamily =
          element.parentElement && getComputedStyle(element.parentElement)['font-family'];

        if (fontFamily !== parentFontFamily) {
          result[fontFamily] = result[fontFamily] || [];
          result[fontFamily].push(element);
        }

        return result;
      }, {});
  };

  const fontFamilyGroups = fetchFontFamilyGroups();

  const loadFont = (fontDetails) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', fontDetails.styleSrc);
    document.head.appendChild(link);
  };

  const replaceFont = (fontFamily, newFontDetails) => {
    // const fontFamilyGroups = fetchFontFamilyGroups();
    loadFont(newFontDetails);
    for (const element of fontFamilyGroups[fontFamily]) {
      element.style.fontFamily = newFontDetails.fontFamily;
    }
  };

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { action, payload } = request;

    switch (action) {
      case 'live-font::get-font-families':
        const fontFamilies = Object.keys(fontFamilyGroups);
        sendResponse({ data: fontFamilies, success: true });
        return;

      case 'live-font::change-font':
        const { fontFamily, newFontDetails } = payload;
        replaceFont(fontFamily, newFontDetails);
        sendResponse({ success: true });
        return;

      case 'live-font::highlight-font-family-elements':
        return;

      case 'live-font::unhighlight-font-family-elements':
        return;
    }
  });
})();
