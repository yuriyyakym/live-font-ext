(() => {
  const initCss = () => {
    const sheet = new CSSStyleSheet();
    const css = `
      @keyframes lfe-color-blinking {
        30% {
          color: #03588C;
        }
        45% {
          color: #dedede;
        }
        60% {
          color: #A67153;
        }
      }

      .lfe-text-highlight {
        animation: lfe-color-blinking 1s linear infinite;
      }
    `;
    sheet.replaceSync(css);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
  };

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

  const highlightFontFamilyElements = (fontFamily) => {
    for (const element of fontFamilyGroups[fontFamily]) {
      element.classList.add('lfe-text-highlight');
    }
  };

  const unhighlightFontFamilyElements = (fontFamily) => {
    for (const element of fontFamilyGroups[fontFamily]) {
      element.classList.remove('lfe-text-highlight');
    }
  };

  initCss();

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { action, payload } = request;

    switch (action) {
      case 'live-font::get-font-families':
        const fontFamilies = Object.keys(fontFamilyGroups);
        sendResponse({ data: fontFamilies, success: true });
        return;

      case 'live-font::change-font':
        replaceFont(payload.fontFamily, payload.newFontDetails);
        sendResponse({ success: true });
        return;

      case 'live-font::highlight-font-family-elements':
        highlightFontFamilyElements(payload.fontFamily);
        return;

      case 'live-font::unhighlight-font-family-elements':
        unhighlightFontFamilyElements(payload.fontFamily);
        return;
    }
  });
})();
