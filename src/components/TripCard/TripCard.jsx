import React from 'react';
import { useGetActivitiesByTripQuery } from '../../redux/apiSlice';

import './TripCard.css';

export default function TripCard({ trip }) {
  const { data, error, isLoading } =
    useGetActivitiesByTripQuery(trip);

  if (isLoading) {
    return <div>Loading activities...</div>;
  }

  if (error) {
    return <div>Error.</div>;
  }

  const tripDuration = (start, end) => {
    let startDate = new Date(start).getTime();
    let endDate = new Date(end).getTime();
    return (
      Math.round((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1
    );
  };

  return (
    <>
      <div className="TripCard">
        <h3>{trip.title}</h3>
        <h4>
          {trip.description} (
          {tripDuration(trip.start_date, trip.end_date)} Days)
        </h4>
        <h5></h5>
        <h5>
          Departure: {trip.start_date} Return: {trip.end_date}
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
      </div>
    </>
  );
}
