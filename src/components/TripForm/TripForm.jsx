import React, { useState } from 'react';
import { useAddTripMutation } from '../../redux/apiSlice';

import './TripForm.css';

export default function TripForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');

  const [displayForm, setDisplayForm] = useState(false);

  const [addTrip, { isLoading }] = useAddTripMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const tripData = {
        title,
        description,
        image_url: imageUrl,
        start_date: startDate,
        end_date: endDate,
        budget: parseFloat(budget) || 0,
      };

      await addTrip(tripData).unwrap();

      setTitle('');
      setDescription('');
      setImageUrl('');
      setStartDate('');
      setEndDate('');
      setBudget('');
    } catch (err) {
      console.log('Failed to create trip', err);
    }
  };

  return (
    <div className="TripForm__wrapper">
      <h2>
        Traveling somewhere?{' '}
        <span>
          <button onClick={() => setDisplayForm(!displayForm)}>
            Add a new trip!
          </button>
        </span>
      </h2>
      {displayForm && (
        <form className="TripForm__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="TripForm__input__title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>

          <input
            type="text"
            placeholder="Description"
            className="TripForm__input__description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>

          {/* <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          ></input> */}

          <input
            type="text"
            placeholder="Start Date (YYYY-MM-DD)"
            className="TripForm__input__startdate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          ></input>

          <input
            type="text"
            placeholder="End Date (YYYY-MM-DD)"
            className="TripForm__input__enddate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          ></input>

          <input
            type="text"
            placeholder="Budget"
            className="TripForm__input__button"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          ></input>

          <button
            type="submit"
            disabled={isLoading}
            className="TripForm__input__submit"
          >
            Add Trip
          </button>
        </form>
      )}
    </div>
  );
}
