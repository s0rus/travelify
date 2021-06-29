import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { useCountries } from '../contexts/countriesContext';
import '../styles/App.css';
import WorldMap from './WorldMap';
import CountryDetails from './CountryDetails';
import { ReactComponent as Settings } from '../svg/settings.svg';
import SettingsModal from './SettingsModal';

function App() {
  const { currentUser, logOut } = useAuth();
  const {
    visitedCountries,
    setVisitedCountries,
    currentCountry,
    setCurrentCountry,
  } = useCountries();
  const [countryLabel, setCountryLabel] = useState(null);
  const [countryDetailsModal, setCountryDetailsModal] = useState();
  const [settingsModal, setSettingsModal] = useState(false);

  useEffect(() => {
    setCountryDetailsModal(currentCountry.countryName);
  }, [currentCountry]);

  const handleCountryLabel = (e) => {
    setCountryLabel(e.target.attributes.name.value);
  };

  const handleHideCountryLabel = () => {
    setCountryLabel(null);
  };

  const handleSettingsModal = () => {
    setSettingsModal((prevModal) => !prevModal);
  };

  const handleLogOut = async () => {
    setCountryDetailsModal();
    await setCurrentCountry({});
    await setVisitedCountries([]);
    await logOut();
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
        <p className="navbar-settings">
          <button
            className="navbar--settings-button"
            type="button"
            onClick={() => handleSettingsModal()}
          >
            <Settings
              className={
                settingsModal ? 'settings-active' : 'settings-unactive'
              }
            />
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
      {settingsModal && (
        <SettingsModal
          handleSettingsModal={handleSettingsModal}
          handleLogOut={handleLogOut}
          countriesCount={visitedCountries.length}
        />
      )}
    </>
  );

  return appContent;
}

export default App;
