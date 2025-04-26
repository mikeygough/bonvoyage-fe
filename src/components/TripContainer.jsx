import React from 'react';
import { useGetTripsQuery } from '../redux/apiSlice';

import TripCard from './TripCard';

export default function TripContainer() {
  const { data, error, isLoading } = useGetTripsQuery();

  if (isLoading) {
    return <div>Loading trips...</div>;
  }

  if (error) {
    return <div>Error loading trips...</div>;
  }

  return (
    <>
      <h2>Upcoming Trips</h2>
      {data &&
        data.map((trip) => (
          <TripCard key={trip.id} tripData={trip} />
        ))}
    </>
  );
}
