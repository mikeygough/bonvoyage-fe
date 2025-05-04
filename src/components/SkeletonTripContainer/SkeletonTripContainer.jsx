import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import SkeletonTripCard from '../SkeletonTripCard/SkeletonTripCard';

import './SkeletonTripContainer.css';

export default function SkeletonTripContainer() {
  return (
    <div className="SkeletonTripContainer">
      <h2 className="SkeletonTripContainer__h2">
        Loading Trip Data...
      </h2>
      <SkeletonTripCard />
      <SkeletonTripCard />
      <SkeletonTripCard />
    </div>
  );
}
