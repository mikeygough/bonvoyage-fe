// TODO
// Refactor this to use RTK Query...

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTrips,
  selectAllTrips,
  selectAllTripsStatus,
} from '../redux/tripSlice';

import TripCard from './TripCard';

export default function TripContainer() {
  const dispatch = useDispatch();
  const trips = useSelector(selectAllTrips);
  const status = useSelector(selectAllTripsStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTrips());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading trips...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading trips...</div>;
  }

  return (
    <>
      <h2>Upcoming Trips</h2>
      {trips &&
        trips.map((trip) => (
          <TripCard key={trip.id} tripData={trip} />
        ))}
    </>
  );
}
