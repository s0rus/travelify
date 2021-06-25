import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './contexts/authContext';
import { CountriesProvider } from './contexts/countriesContext';

const Router = () => (
  <AuthProvider>
    <CountriesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </CountriesProvider>
  </AuthProvider>
);

export default Router;
