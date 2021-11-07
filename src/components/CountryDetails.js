import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { useCountries } from '../contexts/countriesContext';
import '../styles/CountryDetails.css';
import { ReactComponent as Close } from '../svg/close.svg';
import { ReactComponent as Loading } from '../svg/loading.svg';

const CountryDetails = ({ countryDetails, closeDetailsModal }) => {
  const { visitedCountries, markAsVisited, markAsUnvisited } = useCountries();
  const [countryInfo, setCountryInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryDetails.countryID.toLowerCase()}`,
    );

    const [data] = await response.json();
    setCountryInfo(data);
    setLoading(false);
  }, [countryDetails]);

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
              src={`https://flagcdn.com/w40/${countryDetails.countryID.toLowerCase()}.png`}
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
        <div className="details--country-info">
          {loading ? (
            <Loading className="details--loading" />
          ) : (
            countryInfo && (
              <>
                <div className="details--content">
                  <p>{`Capital city: ${countryInfo.capital}`}</p>
                  <p>{`Region: ${countryInfo.region}`}</p>
                  <p>{`Subregion: ${countryInfo.subregion}`}</p>
                  <p>
                    {'Population: '}
                    <NumberFormat
                      value={countryInfo.population}
                      displayType="text"
                      thousandSeparator
                    />
                  </p>
                </div>
              </>
            )
          )}
        </div>
      </div>
      <div className="country-details--footer">
        <span>{countryDetails.countryID.repeat(40)}</span>
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
