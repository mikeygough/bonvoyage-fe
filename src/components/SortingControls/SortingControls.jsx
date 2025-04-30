import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSorting, SORTING } from '../../redux/sortingSlice';

export default function SortingControls() {
  const dispatch = useDispatch();
  const currentSorting = useSelector((state) => state.sorting);

  return (
    <select
      value={currentSorting}
      onChange={(e) => dispatch(setSorting(e.target.value))}
    >
      <option value={SORTING.FIRST_DEPARTURE}>First Departure</option>
      <option value={SORTING.LAST_DEPARTURE}>Last Departure</option>
    </select>
  );
}
