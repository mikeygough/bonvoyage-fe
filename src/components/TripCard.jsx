import React from 'react';
import { useGetActivitiesByTripQuery } from '../redux/apiSlice';

export default function TripCard({ tripData }) {
  const { data, error, isLoading } =
    useGetActivitiesByTripQuery(tripData);

  if (isLoading) {
    return <div>Loading activities...</div>;
  }

  if (error) {
    return <div>Error.</div>;
  }

  return (
    <>
      <div>
        <h3>{tripData.title}</h3>
        {data &&
          data.map((activity) => (
            <div key={activity.name}>
              <p>{activity.name}</p>
            </div>
          ))}
      </div>
    </>
  );
}
