import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export interface ClubRoom {
  image: string; // URL or path to the image
  imageDescription: string; // A brief description of the image
  steps: {
    stepNumber: number; // Number for the step
    description: string; // Description of the step
  }; // Array of steps
}

export const Step_1: ClubRoom = {
  image: "/Ingersoll Hall.png", 
  imageDescription: "Ingersoll Hall", 
  steps: {
    stepNumber: 1, 
    description: "This is Ingersoll Hall where all CISC courses are taken here",
  }
}; 

export const Step_2: ClubRoom = {
  image: "/Ingersoll Hall Main Entrance.png",
  imageDescription: "Main Entrance of Ingersoll Hall",
  steps: {
    stepNumber: 2, 
    description: "After reaching Ingersoll Hall you will see the inside the main entrance of Ingersoll Hall",
  }
};

export const Step_3: ClubRoom = {
  image: "/Ingersoll Hall First Floor.png",
  imageDescription: "First floor of Ingersoll Hall",
  steps: {
    stepNumber: 3, 
    description: "After getting pass the main entrance of Ingersoll Hall you will be in the first floor",
  }
};

export const Step_4: ClubRoom = {
  image: "/Entrance to Ingersoll Basement.png",
  imageDescription: "Entrance to Ingersoll Basement",
  steps: {
    stepNumber: 4, 
    description: "In the first floor of Ingersoll Hall, you will use this entrance to ingersoll basement",
  }
};

export const Step_5: ClubRoom = {
  image: "/Ingersoll Basement Path.png",
  imageDescription: "Ingersoll Basement Path",
  steps: {
    stepNumber: 5, 
    description: "Take the stairs to go down to Ingersoll Hall Basement",
  }
};
export const Step_6: ClubRoom = {
  image: "/Path to Staircase of Ingersoll Basement.png",
  imageDescription: "Path to Staircase of Ingersoll Basement",
  steps: {
    stepNumber: 6, 
    description: "Continue to take the stairs to go down to Ingersoll Basement",
  }
};
export const Step_7: ClubRoom = {
  image: "/Ingersoll Basement Stairs.png",
  imageDescription: "Ingersoll Basement Stairs",
  steps: {
    stepNumber: 7, 
    description: "Continue to take the stairs to go down to Ingersoll Basement",
  }
};
export const Step_8: ClubRoom = {
  image: "/Ingersoll Basement Stairs-2.png",
  imageDescription: "Continuing to go down the Ingersoll Basement Staircase",
  steps: {
    stepNumber: 8, 
    description: "Continue to go down the stairs until you reached Ingersoll Basesment",
  }
};
export const Step_9: ClubRoom = {
  image: "/Path to Ingersoll Basement.png",
  imageDescription: "Path to Ingersoll Basement",
  steps: {
    stepNumber: 9, 
    description: "Once you reached the path to Ingersoll Basement, open the door to find Room 0317",
  }
};
export const Step_10: ClubRoom = {
  image: "/Room Directions for  0308-0319.png",
  imageDescription: "Room Directions for 0308-0319",
  steps: {
    stepNumber: 10, 
    description: "Please see the directions for Rooms 0308-0319, the club room is in Room 0317",
  }
};
export const Step_11: ClubRoom = {
  image: "/Right side of Ingersoll Basement.png",
  imageDescription: "Right side of Ingersoll Basement",
  steps: {
    stepNumber: 11, 
    description: "Go to the right side, after reviewing the directions for 0308-0319 to find Room 0317",
  }
};
export const Step_12: ClubRoom = {
  image: "/Rooms 0308-0319.png",
  imageDescription: "Rooms 0308-0319",
  steps: {
    stepNumber: 12, 
    description: "Once you see the sign 0308-0319, take a left turn and you will see Room 0317",
  }
};
export const Step_13: ClubRoom = {
  image: "/Room 0317.png",
  imageDescription: "Room 0317 - Computer Science Club Room",
  steps: {
    stepNumber: 13, 
    description: "This is Room 0317",
  }
};
