'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const ClubRoomOverview = () => {
  const pathname = usePathname();
  
  // This can serve as a fallback or overview
  return (
    <div>
      <h1>Welcome to Club Room Section</h1>
      <p>Please select a room from the list to view more details.</p>
    </div>
  );
};

export default ClubRoomOverview;
