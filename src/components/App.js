import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { useCountries } from '../contexts/countriesContext';
import '../styles/App.css';
import WorldMap from './WorldMap';
import CountryDetails from './CountryDetails';

function App() {
  const { currentUser, logOut } = useAuth();
  const { currentCountry } = useCountries();
  const [countryDetailsModal, setCountryDetailsModal] = useState();
  const [countryLabel, setCountryLabel] = useState(null);

  useEffect(() => {
    setCountryDetailsModal(currentCountry.countryName);
  }, [currentCountry]);

  const handleCountryLabel = (e) => {
    setCountryLabel(e.target.attributes.name.value);
  };

  const handleHideCountryLabel = () => {
    setCountryLabel(null);
  };

  const appContent = !currentUser ? (
    <Redirect to="/login" />
  ) : (
    <>
      <div className="Navbar">
        <div className="navbar--country-label">
          <p>{countryLabel}</p>
        </div>
        <h1 className="navbar-logo">TRAVELIFY</h1>
        <p className="navbar-email">
          <button type="button" onClick={() => logOut()}>
            log out
          </button>
        </p>
      </div>
      <div className="App">
        <WorldMap
          handleCountryLabel={handleCountryLabel}
          handleHideCountryLabel={handleHideCountryLabel}
        />
        {countryDetailsModal && (
          <CountryDetails
            countryDetails={currentCountry}
            closeDetailsModal={setCountryDetailsModal}
          />
        )}
      </div>
    </>
  );

  return appContent;
}

export default App;
