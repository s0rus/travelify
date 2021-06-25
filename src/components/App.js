import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/authContext';
import { useCountries } from '../contexts/countriesContext';
import '../styles/App.css';
import WorldMap from './WorldMap';
import CountryDetails from './CountryDetails';

function App() {
  const { currentUser } = useAuth();
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

  return (
    <>
      <div className="Navbar">
        <div className="navbar--country-label">
          <p>{countryLabel}</p>
        </div>
        <h1 className="navbar-logo">TRAVELIFY</h1>
        <p className="navbar-email">{currentUser.email}</p>
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
}

export default App;
