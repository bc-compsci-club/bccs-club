'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import * as ClubRoomData from '../../../utils/clubRoom';
import styles from './ClubRoomDetails.module.css'; // Import the CSS Module

const ClubRoomDetails = () => {
  const pathname = usePathname();
  const roomNumber = pathname.split('/').pop(); // Extract room number from the URL
  const [currentRoom, setCurrentRoom] = useState<ClubRoomData.ClubRoom | null>(null);

  useEffect(() => {
    // Dynamically access the room data based on the room number
    const roomKey = `Step_${roomNumber}` as keyof typeof ClubRoomData;
    if (ClubRoomData[roomKey]) {
      setCurrentRoom(ClubRoomData[roomKey]);
    }
  }, [roomNumber]);

  if (!currentRoom) {
    return <div className={styles.roomNotFound}>Room details not found.</div>;
  }

  const { image, imageDescription, steps } = currentRoom;

  return (
    <div style={{ marginTop: '150px' }}> {/* Extra spacing below the entire component */}
      <div className={styles.clubRoomContainer}>
        <h1 className={styles.clubRoomTitle}><strong>Club Room Details</strong></h1>
        <div className={styles.imageContainer}>
          <img
            src={image}
            alt={imageDescription}
            className={styles.clubRoomImage}
          />
          <p className={styles.imageDescription}>{imageDescription}</p>
        </div>
        <ul className={styles.stepsList}>
          <li>
            <strong>Step {steps.stepNumber}:</strong> {steps.description}
          </li>
        </ul>
      </div>
    </div>
  );
  
};

export default ClubRoomDetails;
