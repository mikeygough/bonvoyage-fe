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
          <h3>{trip.title}</h3>
          <h4>
            {trip.description} (
            {tripDuration(trip.start_date, trip.end_date)} Days)
          </h4>
          <h5 className="TripCard__Departure_Heading">
            <img src={'/departure.svg'} alt="Departure Icon"></img>
            {formatDate(trip.start_date)}
          </h5>
          <h5 className="TripCard__Arrival_Heading">
            <img src={'/arrival.svg'} alt="Arrival Icon"></img>
            {formatDate(trip.end_date)}
          </h5>
          {data && (
            <ul className="TripCard__ul">
              {data.map((activity) => (
                <li key={activity.name}>
                  <p>{activity.name}</p>
                </li>
              ))}
            </ul>
          )}
          <ActivityForm trip={trip} />
        </div>
        <div className="TripCard__img__wrapper">
          <img className="TripCard__img" src={trip.image_url}></img>
        </div>
      </div>
    </div>
  );
}
