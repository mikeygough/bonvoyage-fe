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
      console.log('Failed to create the trip', err);
    }
  };

  return (
    <div className="TripForm__wrapper">
      <form className="TripForm__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        ></input>

        <button type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
}
