import React from 'react';
import { useGetTripsQuery } from '../../redux/apiSlice';
import { useSelector } from 'react-redux';
import { SORTING } from '../../redux/sortingSlice';

import TripCard from '../TripCard/TripCard';
import SortingControls from '../SortingControls/SortingControls';
import SkeletonTripContainer from '../SkeletonTripContainer/SkeletonTripContainer';

import './TripContainer.css';

export default function TripContainer() {
  const { data, error, isLoading } = useGetTripsQuery();
  const sorting = useSelector((state) => state.sorting);

  if (isLoading) {
    return <SkeletonTripContainer />;
  }

  if (error) {
    return <div>Error loading trips...</div>;
  }

  const sortedTrips = [...data].sort((a, b) => {
    let a_start = new Date(a.start_date);
    let b_start = new Date(b.start_date);
    if (sorting === SORTING.FIRST_DEPARTURE) {
      return a_start - b_start;
    }
    if (sorting === SORTING.LAST_DEPARTURE) {
      return b_start - a_start;
    }
  });

  return (
    <div className="TripContainer">
      <h2 className="TripContainer__h2">
        You have {data.length} upcoming trips!
      </h2>
      <div className="TripContainer__SortingControls">
        <SortingControls />
      </div>
      <div className="TripContainer">
        {data &&
          sortedTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
      </div>
    </div>
  );
}
