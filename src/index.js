import React from 'react';
import { render } from 'react-snapshot';
import { StateContextProvider } from './state';
import App from './App';
import './index.css';

const app = (
  <StateContextProvider>
    <App />
  </StateContextProvider>
);

render(app, document.getElementById('root'));
