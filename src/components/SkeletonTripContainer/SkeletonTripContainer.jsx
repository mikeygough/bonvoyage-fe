import React from 'react';

import SkeletonTripCard from '../SkeletonTripCard/SkeletonTripCard';

export default function SkeletonTripContainer() {
  return (
    <div className="SkeletonTripContainer">
      <SkeletonTripCard />
      <SkeletonTripCard />
      <SkeletonTripCard />
    </div>
  );
}
