import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchActivities,
  selectAllActivities,
  selectAllActivitiesStatus,
} from '../redux/activitySlice';

export default function TripCard({ tripData }) {
  const dispatch = useDispatch();
  const activities = useSelector(selectAllActivities);
  const status = useSelector(selectAllActivitiesStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchActivities(tripData.id));
    }
  }, [status, dispatch, tripData.id, activities]);

  if (status === 'loading') {
    return <div>Loading activities...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading activities...</div>;
  }
  return (
    <>
      <div>
        <h3>{tripData.title}</h3>
        {activities &&
          activities
            .filter((activity) => activity.trip_id === tripData.id)
            .map((activity) => (
              <div>
                <p>{activity.name}</p>
              </div>
              // wonder if i should reconfigure my routes
              // to not be nested and i can do the filtering in the FE
            ))}
      </div>
    </>
  );
}
