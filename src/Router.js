import React from 'react';
import App from './App';
import { CountriesProvider } from './contexts/countriesContext';

const Router = () => (
  <div>
    <CountriesProvider>
      <App />
    </CountriesProvider>
  </div>
);

export default Router;
