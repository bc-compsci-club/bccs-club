'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ClubRoom } from '../../../utils/clubRoom';

const RoomLocation = () => {
  const router = useRouter();

  const handleRoomClick = (room: ClubRoom) => {
    // You can define the logic to navigate or display room details on click.
    console.log(`Clicked ${room}`); // Just for demonstration, replace with your desired action
    router.push(`/clubroom/${room}`);
  };

  return (
    <div>
      
    </div>
  );
};

export default RoomLocation;
