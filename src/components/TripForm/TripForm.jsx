import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';

import { useAddTripMutation } from '../../redux/apiSlice';
import { setDisplay } from '../../redux/tripFormSlice';

import './TripForm.css';

export default function TripForm() {
  const dispatch = useDispatch();
  const currentDisplayForm = useSelector((state) => state.tripForm);

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
      console.log('Failed to create trip', err);
    }
  };

  return (
    <AnimatePresence initial={false}>
      {currentDisplayForm && (
        <>
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="TripForm__wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: '-50%', y: '-50%' }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                width: '80vw',
                height: '90vh',
              }}
              key="form"
            >
              <form
                className="TripForm__form"
                onSubmit={handleSubmit}
              >
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
              <button
                className="TripForm__close__wrapper"
                onClick={() =>
                  dispatch(setDisplay(!currentDisplayForm))
                }
              >
                <img src={'/close.svg'} alt="Close Icon"></img>
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
