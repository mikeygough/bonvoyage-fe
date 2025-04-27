import React, { useState } from 'react';
import { useAddActivityMutation } from '../../redux/apiSlice';

import './ActivityForm.css';

export default function ActivityForm({ trip }) {
  const [name, setName] = useState('');

  const [addActivity, { isLoading }] = useAddActivityMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const activityData = {
        tripId: trip.id,
        activity: {
          name,
        },
      };

      await addActivity(activityData).unwrap();

      setName('');
    } catch (err) {
      console.log('Failed to create activity', err);
    }
  };

  return (
    <div className="ActivityForm__wrappep">
      <form className="ActivityForm__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Activity Name"
          className="ActivityForm__input__name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <button
          type="submit"
          className="ActivityForm__submit"
          disabled={isLoading}
        >
          Add Activity
        </button>
      </form>
    </div>
  );
}
