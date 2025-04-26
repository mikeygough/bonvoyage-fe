import React from 'react';
import { useGetTripsQuery } from '../../redux/apiSlice';

import TripCard from '../TripCard/TripCard';

import './TripContainer.css';

export default function TripContainer() {
  const { data, error, isLoading } = useGetTripsQuery();

  if (isLoading) {
    return <div>Loading trips...</div>;
  }

  if (error) {
    return <div>Error loading trips...</div>;
  }

  return (
    <div className="TripContainer">
      <h2 className="TripContainer__h2">
        You have {data.length} upcoming trips!
      </h2>
      <div className="TripContainer">
        {data &&
          data.map((trip) => <TripCard key={trip.id} trip={trip} />)}
      </div>
    </div>
  );
}
