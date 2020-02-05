/* globals chrome */

const GOOGLE_FONTS_API_KEY = 'AIzaSyDB1WOc7Yq1wsPRe41OfTwCbSTsSF4WWgc';

export const fetchGoogleFonts = () =>
  fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_FONTS_API_KEY}`)
    .then((response) => response.json())
    .then(({ items }) => items);

export const getFontFamilies = () =>
  new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      console.warn({ tabs });
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: 'live-font::get-font-families' },
        (response) => {
          console.warn(1, response);
          resolve(response.data);
        }
      );
    });
  });

export const replaceFontFamily = (fontFamily, newFontDetails) =>
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'live-font::change-font',
      payload: {
        fontFamily,
        newFontDetails
      }
    });
  });
