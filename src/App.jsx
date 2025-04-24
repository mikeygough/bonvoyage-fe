import React from 'react';
import { useEffect } from 'react';
import TripContainer from './components/TripContainer';

export default function App() {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:3000/trips.json`
      );

      if (!response.ok) {
        throw new Error('Could not get data');
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err.message);
      return null;
    } finally {
      console.log('Fetch attempt finished');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TripContainer />
    </>
  );
}
