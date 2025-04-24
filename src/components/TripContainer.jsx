import React from 'react';
import { useSelector } from 'react-redux';
import TripCard from './TripCard';

export default function TripContainer() {
  const trips = useSelector((state) => state.trips);

  return (
    <>
      <h2>Upcoming Trips</h2>
      {trips.map((trip) => (
        <TripCard key={trip.id} tripData={trip} />
      ))}
    </>
  );
}
