import React from 'react';
import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
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
  const [sortedTrips, setSortedTrips] = useState([]);

  useEffect(() => {
    if (!data) return;

    const newSortedTrips = [...data].sort((a, b) => {
      let a_start = new Date(a.start_date);
      let b_start = new Date(b.start_date);
      if (sorting === SORTING.FIRST_DEPARTURE) {
        return a_start - b_start;
      }
      if (sorting === SORTING.LAST_DEPARTURE) {
        return b_start - a_start;
      }
      return 0;
    });

    setSortedTrips(newSortedTrips);
  }, [data, sorting]);

  if (isLoading) {
    return <SkeletonTripContainer />;
  }

  if (error) {
    return <div>Error loading trips...</div>;
  }

  return (
    <div className="TripContainer__wrapper">
      <motion.div
        className="TripContainer__SortingControls"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <SortingControls />
      </motion.div>
      <div className="TripContainer">
        {data &&
          sortedTrips.map((trip) => (
            <motion.div
              key={`trip-${trip.id}`}
              layout
              transition={{
                type: 'spring',
                damping: 20,
                stiffness: 100,
              }}
            >
              <TripCard trip={trip} />
            </motion.div>
          ))}
      </div>
    </div>
  );
}
