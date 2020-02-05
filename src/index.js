import React from 'react';
import { render } from 'react-snapshot';
import { AppStateContextProvider } from './state/app';
import { FavoritesContextProvider } from './state/favorites';
import App from './App';
import './index.css';

const app = (
  <FavoritesContextProvider>
    <AppStateContextProvider>
      <App />
    </AppStateContextProvider>
  </FavoritesContextProvider>
);

render(app, document.getElementById('root'));
