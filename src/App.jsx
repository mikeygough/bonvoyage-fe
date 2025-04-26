import React from 'react';
import TripContainer from './components/TripContainer/TripContainer';
import TripForm from './components/TripForm/TripForm';
import Header from './components/Header/Header';

import './App.css';

export default function App() {
  return (
    <>
      <TripForm />
      <Header></Header>
      <TripContainer />
    </>
  );
}
