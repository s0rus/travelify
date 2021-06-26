/* eslint-disable object-curly-newline */
import React, { createContext, useContext, useState } from 'react';

const CountriesContext = createContext();

export function useCountries() {
  return useContext(CountriesContext);
}

export function CountriesProvider({ children }) {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState({});

  const handleCurrentCountry = ({ target }) => {
    setCurrentCountry({
      countryID: target.attributes.id.value,
      countryName: target.attributes.name.value,
      countryFill: target.attributes.fill.value,
    });
  };

  const markAsVisited = (countryID) => {
    setVisitedCountries([...visitedCountries, countryID]);
  };

  const markAsUnvisited = (countryID) => {
    const newVisitedCountries = visitedCountries.filter((ID) => ID !== countryID);
    setVisitedCountries(newVisitedCountries);
  };

  const value = {
    visitedCountries,
    handleCurrentCountry,
    currentCountry,
    markAsVisited,
    markAsUnvisited,
  };

  return <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>;
}
