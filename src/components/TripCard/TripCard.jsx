import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import { useGetActivitiesByTripQuery } from '../../redux/apiSlice';

import ActivityForm from '../ActivityForm/ActivityForm';
import SkeletonTripCard from '../SkeletonTripCard/SkeletonTripCard';

import './TripCard.css';

export default function TripCard({ trip }) {
  const { data, error, isLoading } =
    useGetActivitiesByTripQuery(trip);

  if (isLoading) {
    return <SkeletonTripCard />;
  }

  if (error) {
    return <div>Error.</div>;
  }

  const tripDuration = (start, end) => {
    let startDate = new Date(start).getTime();
    let endDate = new Date(end).getTime();
    return Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
  };

  const formatDate = (date) => {
    let options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    let dateObj = new Date(date);
    return dateObj.toLocaleDateString('en-US', options); // Saturday, September 17, 2016
  };

  return (
    <div className="TripCard">
      <div className="TripCard__Wrapper">
        <div className="TripCard__Details">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {trip.title}
          </motion.h3>
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {trip.description} (
            {tripDuration(trip.start_date, trip.end_date)} Days)
          </motion.h4>
          <motion.h5
            className="TripCard__Departure_Heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img src={'/departure.svg'} alt="Departure Icon"></img>
            {formatDate(trip.start_date)}
          </motion.h5>
          <motion.h5
            className="TripCard__Arrival_Heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img src={'/arrival.svg'} alt="Arrival Icon"></img>
            {formatDate(trip.end_date)}
          </motion.h5>
          {data && (
            <ul className="TripCard__ul">
              {data.map((activity) => (
                <motion.li
                  key={activity.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p>{activity.name}</p>
                </motion.li>
              ))}
            </ul>
          )}
          <ActivityForm trip={trip} />
        </div>
        <div className="TripCard__img__wrapper">
          <img
            className="TripCard__img"
            src={
              trip.image_url
                ? trip.image_url
                : './placeholder-trip.png'
            }
          ></img>
        </div>
      </div>
    </div>
  );
}
