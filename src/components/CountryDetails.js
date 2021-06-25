import React from 'react';
import PropTypes from 'prop-types';
import { useCountries } from '../contexts/countriesContext';
import '../styles/CountryDetails.css';
import { ReactComponent as Close } from '../svg/close.svg';

const CountryDetails = ({ countryDetails, closeDetailsModal }) => {
  const { visitedCountries, markAsVisited, markAsUnvisited } = useCountries();

  const isVisited = visitedCountries.includes(countryDetails.countryID);

  const handleCloseModal = () => {
    closeDetailsModal(false);
  };

  return (
    <div className="country-details">
      <div className="country-details--content">
        <div className="country-details--title">
          <div className="country-details--title-content">
            <img
              src={`https://www.countryflags.io/${countryDetails.countryID.toLowerCase()}/flat/64.png`}
              alt={`Flag of ${countryDetails.countryName}`}
            />
            <h1>{countryDetails.countryName}</h1>
          </div>
          <button
            className="country-details--close"
            type="button"
            onClick={() => handleCloseModal()}
          >
            <Close />
          </button>
        </div>
        {isVisited ? (
          <button
            className="country-details--mark"
            type="button"
            onClick={() => markAsUnvisited(countryDetails.countryID)}
          >
            MARK AS UNVISITED
          </button>
        ) : (
          <button
            className="country-details--mark"
            type="button"
            onClick={() => markAsVisited(countryDetails.countryID)}
          >
            MARK AS VISITED
          </button>
        )}
      </div>
      <div className="country-details--footer">
        <span>{countryDetails.countryID.repeat(20)}</span>
      </div>
    </div>
  );
};

CountryDetails.propTypes = {
  countryDetails: PropTypes.shape({
    countryID: PropTypes.string,
    countryName: PropTypes.string,
    countryFill: PropTypes.string,
  }).isRequired,
};

export default CountryDetails;
