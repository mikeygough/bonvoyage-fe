import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplay } from '../../redux/tripFormSlice';

import './Header.css';

export default function Header() {
  const dispatch = useDispatch();
  const currentDisplayForm = useSelector((state) => state.tripForm);

  return (
    <div className="Header__Wrapper">
      <header className="Header">
        <h1>Bon Voyage!</h1>
        <button
          onClick={() => dispatch(setDisplay(!currentDisplayForm))}
        >
          Add a new trip!
        </button>
      </header>
    </div>
  );
}
