/* eslint-disable object-curly-newline */
import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { firestore } from '../firebase/config';
import { useAuth } from './authContext';

const CountriesContext = createContext();

export function useCountries() {
  return useContext(CountriesContext);
}

export function CountriesProvider({ children }) {
  const { currentUser } = useAuth();
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState({});

  useEffect(async () => {
    if (currentUser) {
      const visitedList = [];

      await firestore
        .collection('users')
        .where('email', '==', currentUser.email)
        .get()
        .then((snapshot) =>
          snapshot.forEach((data) =>
            visitedList.push(...data.data().visitedCountries),
          ),
        );

      setVisitedCountries(visitedList);
    }
  }, [currentUser]);

  const handleCurrentCountry = ({ target }) => {
    setCurrentCountry({
      countryID: target.attributes.id.value,
      countryName: target.attributes.name.value,
      countryFill: target.attributes.fill.value,
    });
  };

  const markAsVisited = async (countryID) => {
    const doc = [];

    await firestore
      .collection('users')
      .where('email', '==', currentUser.email)
      .get()
      .then((data) => data.forEach((v) => doc.push(v.id)));

    await firestore
      .collection('users')
      .doc(doc[0])
      .update({
        visitedCountries: firebase.firestore.FieldValue.arrayUnion(countryID),
      });

    setVisitedCountries([...visitedCountries, countryID]);
  };

  const markAsUnvisited = async (countryID) => {
    const doc = [];

    await firestore
      .collection('users')
      .where('email', '==', currentUser.email)
      .get()
      .then((data) => data.forEach((v) => doc.push(v.id)));

    await firestore
      .collection('users')
      .doc(doc[0])
      .update({
        visitedCountries: firebase.firestore.FieldValue.arrayRemove(countryID),
      });

    setVisitedCountries([...visitedCountries, countryID]);

    const newVisitedCountries = visitedCountries.filter(
      (ID) => ID !== countryID,
    );
    setVisitedCountries(newVisitedCountries);
  };

  const value = {
    visitedCountries,
    setVisitedCountries,
    handleCurrentCountry,
    currentCountry,
    setCurrentCountry,
    markAsVisited,
    markAsUnvisited,
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
}
