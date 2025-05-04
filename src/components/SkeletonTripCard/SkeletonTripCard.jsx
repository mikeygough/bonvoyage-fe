import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import './SkeletonTripCard.css';

export default function SkeletonTripCard() {
  return (
    <div className="SkeletonTripCard">
      <div className="SkeletonTripCard__Wrapper">
        <div className="SkeletonTripCard__Details">
          <h3>Loading Trip Title...</h3>
          <h4>Loading Trip Duration...</h4>
          <h5>Departure: Loading... Return: Loading...</h5>
          <ul className="SkeletonTripCard__ul">
            <li>Loading Trip Activities...</li>
            <li>Loading Trip Activities...</li>
            <li>Loading Trip Activities...</li>
          </ul>
        </div>
        <div className="SkeletonTripCard__img__wrapper">
          <div className="SkeletonTripCard__img">
            Loading Image...
          </div>
        </div>
      </div>
    </div>
  );
}
