/* globals chrome */

import googleFontFromServerFormat from './models/google-font';

const GOOGLE_FONTS_API_KEY = 'AIzaSyDB1WOc7Yq1wsPRe41OfTwCbSTsSF4WWgc';

export const fetchGoogleFonts = () =>
  fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_FONTS_API_KEY}`)
    .then((response) => response.json())
    .then(({ items }) => items)
    .then((items) => items.map(googleFontFromServerFormat));

export const getFontFamilies = () =>
  new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: 'live-font::get-font-families' },
        (response) => {
          resolve(response.data);
        }
      );
    });
  });

export const changeFontFamily = (fontFamily, newFontDetails) =>
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'live-font::change-font',
      payload: {
        fontFamily,
        newFontDetails
      }
    });
  });

export const highlightFontFamilyElements = (fontFamily) =>
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'live-font::highlight-font-family-elements',
      payload: {
        fontFamily
      }
    });
  });

export const unhighlightFontFamilyElements = (fontFamily) =>
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'live-font::unhighlight-font-family-elements',
      payload: {
        fontFamily
      }
    });
  });
