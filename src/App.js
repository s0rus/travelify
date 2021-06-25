import React, { useEffect, useState } from 'react';
import { useCountries } from './contexts/countriesContext';
import './App.css';
import WorldMap from './components/WorldMap';
import CountryDetails from './components/CountryDetails';

function App() {
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
        <h1>TRAVELIFY</h1>
        <p>{countryLabel}</p>
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
