import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App tab="app" />
    </BrowserRouter>
  </Provider>

);
